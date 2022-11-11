
import axios from "axios"
import { ADD_DOCTOR_FAILURE, ADD_DOCTOR_REQUEST, ADD_DOCTOR_SUCCESS, GET_DOCTOR_FAILURE, GET_DOCTOR_REQUEST, GET_DOCTOR_SUCCESS } from "./action.type"
export const doctorRequest=()=>{

    return{
        type:GET_DOCTOR_REQUEST
    }
    
}

export const doctorSuccess=(data)=>{
    return{
        type:GET_DOCTOR_SUCCESS,
        Payload:data
    }
     
 
}


export const doctorFailure=(err)=>{
    return{
        type:GET_DOCTOR_FAILURE,
        Payload:err
    }
}


export const addDoctorRequest=()=>{
    return{
        type:ADD_DOCTOR_REQUEST
    }
    
}

export const addDoctorSuccess=(data)=>{
    return{
        type:ADD_DOCTOR_SUCCESS,
        Payload:data
    }
     
 
}


export const addDoctorFailure=(err)=>{
    return{
        type:ADD_DOCTOR_FAILURE,
        Payload:err
    }
}




export const Doctordata=(params)=>async (dispatch)=>{
 dispatch(doctorRequest());
  await axios.get("http://localhost:8040/data",params)
  .then((r)=>{
    console.log(r.data)
    dispatch(doctorSuccess(r.data))})
  .catch((e)=>dispatch(doctorFailure(e)))
}


