import { loadData, removeData, saveData } from '../../utils/localstorage';
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_LOADING, REGISTER_SUCCESS } from './action.type';
// import * as types from './action.type'

const init = {
    token:loadData("token_") || "",
    isError:false,
    isLoading:false,
    isSignup:false
}
export const authReducer = (state=init,{type,Payload})=>{
    //console.log(type);
    switch (type){

        case LOGIN_LOADING :{
            return {
                ...state,
                token:"",
                isError:false,
                isLoading:true
            }
        } 
        case LOGIN_SUCCESS :{

            console.log(Payload.token);
            let newtoken = Payload.token;
            saveData("token_",newtoken);
            return {
                ...state,
                token:Payload.token,
                isError:false,
                isLoading:false
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                isError:true,
                isLoading:false

            }
        }
        case REGISTER_LOADING:{

            return {
                ...state,
                token:"",
                isError:false,
                isLoading:true,
                isSignup:false
            }
        }

        case REGISTER_SUCCESS :{
            return {
                ...state,
                token:"",
                isError:false,
                isLoading:false,
                isSignup:true
            }
        } 
        case REGISTER_FAILURE :{
            return {
                ...state,
                token:"",
                isError:false,
                isLoading:false,
                isSignup:false
            }
        } 
        case LOGOUT_SUCCESS:{
           removeData("user_");
           removeData("token_");
           return{
            ...state,
            token:""
           }
        }
        default :{
            return state;
        }
    }
}