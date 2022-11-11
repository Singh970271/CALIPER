import { legacy_createStore as createstore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./Auth/authReducer";
import { DoctorReducer } from "./Doctor/reducer";



const rootReducer=combineReducers({
    auth:authReducer,
    doctor:DoctorReducer
})

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createstore(rootReducer,composeEnhancers(applyMiddleware(thunk)))


