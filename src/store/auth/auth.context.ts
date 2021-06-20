import {createContext} from "react";
import {IUser} from "../../../app/types/app.types";


interface T extends IUser{}
interface AuthContextProps{
    login:(user:T)=>void
    logout:()=>void
    authUser:IUser|null
}
export const AuthContextInitialState={
login:function<T extends IUser>(user:T){},
logout:function (){},
authUser:null
}
const authContext=createContext<AuthContextProps>({
    ...AuthContextInitialState
}) 
export default authContext