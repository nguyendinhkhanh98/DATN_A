const { verify } = require('argon2');
const express = require('express');
const router = express.Router();
const verifyToken = require('../app/middlewares/Auth')

const Post = require('../app/models/Posts')



// @router GET api/posts
// @desc GET Post
// @access Private

router.get('/', verifyToken, async(req, res) => {
    try { 
        const posts = await Post.find({ user: req.userId }).populate('user','username')
        res.json({success: true, posts})
    }catch(error) { 
        console.log(error)
        res.status(500).json({
            success: false, 
            message: 'Internal server error'
    })
}
})



// @router POST api/posts
// @desc Create Post
// @access Private

router.post('/', verifyToken, async(req, res) => {
    const {title, description, url, status} = req.body

    // Simple validation
    if(!title) 
    return res.status(400).json({
        success: false,
        message: 'Title is required'
    })

    try{
        const newPost = new Post({
            title, 
            description, 
            url: (url.startsWith('http://')) ? url : `https://${url}`,
            status: status || 'TO LEARN',
            user: req.userId
        })

        await newPost.save()

        res.json({
            success : true, 
            message: 'Happy learning',
            post: newPost
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            success: false, 
            message: 'Internal server error'
        })
    }
})



// @router PUT api/posts
// @desc Update Post
// @access Private

router.put('/:id/delete',verifyToken, async(req, res) => {
    const {title, description, url, status} = req.body
    // Simple validation    
    if(!title) 
    return res.status(400).json({
        success: false,
        message: 'Title is required'
    })

    try{
        let updatedPost = {
            title, 
            description: description || '', 
            url: (url.startsWith('http://') ? url : `https://${url}`) || '',
            status: status || 'TO LEARN',
            user: req.userId
        }
        
        const postUpdateCondition = {
            _id:  req.params.id,
            user: req.userId
        }

        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, {new: true})

        // User not authorised tp update post or post not found
        if(!updatedPost)
        return res.status(401).json({success: false, message:'Post not found or user not authorised'})

        res.json({success: true, message:'Done', post: updatedPost})

    }catch(error) {
        console.log(error)
        res.status(500).json({
            success: false, 
            message: 'Internal server error'
        })
    }
})

// @router DELETE api/posts
// @desc Delete Post
// @access Private

router.delete('/:id/delete', verifyToken, async(req, res) => {
    try{
        const postDeleteCondition = {_id: req.params.id, usr: req.userId}
        const deletePost = await Post.findOneAndDelete(postDeleteCondition)

        //User not authorised or post not found
        if(!deletePost)
        return res.status(401).json({success: false, message:'Post not found or user not authorised'})

        res.json({success: true, message:'Done', post: deletePost})
    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false, 
            message: 'Internal server error'
        }) 
    }
})

module.exports = router