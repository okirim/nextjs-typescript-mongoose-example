import axios from 'axios';
import {
    useMutation,
} from 'react-query'
import {IUser} from "../../app/types/app.types";
import {useContext} from "react";
import authContext from "../store/auth/auth.context";
import {useRouter} from "next/router";

function useLogin() {
    const authCtx=useContext(authContext);
    const router=useRouter();
    // Mutations
    const mutation = useMutation((data:IUser)=>axios.post('/api/users/login',data).catch(err=>{
        throw new Error(err)
    }), {
        onSuccess: (result) => {
            const {data}=result;
            // Invalidate and refetch
            console.log('hooks login success',data);
            authCtx.login(data.user);
            // router.push('/hello') 
        },
    })
    return (
        mutation
    );
}

export default useLogin;