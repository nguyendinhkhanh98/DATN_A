// import { authHeader } from "../helpers/authHeader";
import axios from 'axios'

export const userService = {
  loginUser,
  logoutUser,
  registerUser,
};

const loadUser = async () => {
  if(localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
    setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
  }
  
  try {
    const response = await axios.get(`${apiUrl}/auth`)
    if(response.data.success) {
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: true,
          user: response.data.user
        }
      })
    }
  }catch (error) {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
    setAuthToken(null)
    dispatch({
      type: 'SET_AUTH',
      payload: {
        isAuthenticated: false,
        user: null
      }
    })
  }
}

//login

const loginUser = async (userForm) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, userForm);
    if (response.data.success)
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN_NAME,
        response.data.accessToken
      )

    await loadUser()
    return response.data
  } catch (error) {
    if(error.response.data) return error.response.data
    else return {
      success: false,
      message: error.message
    }
  } 
}

// register

const registerUser = async (userForm) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/`, userForm)
    if(response.data.success)
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN_NAME,
        response.data.accessToken
      )
    
    await loadUser()

    return response.data
  }catch(error) {
    if(error.response.data) return error.response.data
    else return {
      success: false,
      message: error.message
    }
  }
}

// logout

const logoutUser = async () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
  dispatch({
    type: 'SET_AUTH',
    payload: {
      isAuthenticated: false,
      user: null,
    }
  })
}

