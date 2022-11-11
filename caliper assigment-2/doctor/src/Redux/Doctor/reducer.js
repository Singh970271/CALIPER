import { ADD_DOCTOR_FAILURE, ADD_DOCTOR_REQUEST, ADD_DOCTOR_SUCCESS, GET_DOCTOR_FAILURE, GET_DOCTOR_REQUEST, GET_DOCTOR_SUCCESS } from "./action.type"

const inistate={
    doctor:[],
    isLoading:false,
    isError:false
}

export const DoctorReducer=(state=inistate,{type,Payload})=>{
 switch(type){
    case GET_DOCTOR_REQUEST:
        return{...state,isLoading:true,isError:false}

        case GET_DOCTOR_SUCCESS:
            return{...state,doctor:Payload,isLoading:false,isError:false}

          case GET_DOCTOR_FAILURE:
            return{...state,isLoading:false,isError:true}  

            case ADD_DOCTOR_REQUEST:
                return{...state,isLoading:true,isError:false}
        
                case ADD_DOCTOR_SUCCESS:
                    return{...state,isLoading:false,isError:false}
        
                  case ADD_DOCTOR_FAILURE:
                    return{...state,isLoading:false,isError:true}  
        
    default :return state        
 }


}