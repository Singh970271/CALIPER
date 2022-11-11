

import { LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_LOADING, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_LOADING, REGISTER_SUCCESS } from "./action.type"



export const loginLoading=()=>{
    return{
        type:LOGIN_LOADING
    }
}

export const loginSuccess=(data)=>{
    return{
        type:LOGIN_SUCCESS,
        Payload:data
    }
}

export const loginFailure=(data)=>{
    return{
        type:LOGIN_SUCCESS,
        Payload:data
    }
}


export const registerLoading=()=>{
    return{
        type:REGISTER_LOADING
    }
}

export const registerSuccess=(data)=>{
    return{
        type:REGISTER_SUCCESS,
        Payload:data
    }
}

export const registerFailure=(data)=>{
    return{
        type:REGISTER_FAILURE,
        Payload:data
    }
}


export const logoutLoading=()=>{
    return{
        type:LOGOUT_LOADING
    }
}

export const logoutSuccess=(data)=>{
    return{
        type:LOGOUT_SUCCESS,
        Payload:data
    }
}

export const logoutFailure=(data)=>{
    return{
        type:LOGOUT_FAILURE,
        Payload:data
    }
}


