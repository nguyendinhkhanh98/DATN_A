const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
// const docsRoute = require('./docs.route');
// const config = require('../../config/config');
// const { route } = require('./auth');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/users',
        route: userRoute,
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router