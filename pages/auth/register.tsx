import React, {useContext, useEffect} from 'react';
import RegisterForm, {registerUserAttrs} from "../../src/components/RegisterForm";
import useRegister from "../../src/hooks/useRegister";
import authContext from "../../src/store/auth/auth.context";

function Register() {
    const {error,mutate,isError,isLoading,isSuccess}=useRegister();
    const authCtx=useContext(authContext);
    const handleRegister=(data:registerUserAttrs)=>{
        mutate(data)
    }
    if(isError){
        console.log((error as any).message);
    }
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gray-800'>
            <RegisterForm isLoading={isLoading} handleRegister={handleRegister}/>
        </div>
    );
}

export default Register;