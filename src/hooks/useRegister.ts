import React, {useContext, useEffect, useState} from 'react';
import {useMutation} from "react-query";
import axios from 'axios';
import {registerUserAttrs} from "../components/RegisterForm";
import authContext from "../store/auth/auth.context";

const addUser= (data:registerUserAttrs)=> axios.post('/api/users/register',data);

function useRegister() {
    const authCtx=useContext(authContext);
    return useMutation(addUser,{
           onSuccess:(result)=>{
               const {data}=result;
               authCtx.login(data);
           },
        
       })

}
export default useRegister;