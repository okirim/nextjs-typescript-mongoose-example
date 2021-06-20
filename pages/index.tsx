import React from "react";
import {Fragment} from "react";
import LInk from 'next/link';
import LoginForm from "../src/components/LoginForm";
import {IUser} from "../app/types/app.types";
import { useContext } from "react";
import authContext from "../src/store/auth/auth.context";
import useLogin from "../src/hooks/useLogin";
import {signOut, useSession} from "next-auth/client";



const Home = () => {
    const [session,loading]=useSession();
    const handleLogout=()=>{
        signOut()
    }
return (<Fragment>
<div className='flex bg-gray-100 shadow-md px-8 py-4 justify-end items-center w-screen space-x-4'>
    {session?.user?.name ? <button onClick={handleLogout}>logout</button>: <Fragment>
    <LInk href='/auth/login'><a className='border-2 rounded text-purple-500 transition duration-200 ease-in-out hover:text-gray-100 hover:bg-purple-500 border-purple-500 px-4 py-2'>login</a></LInk>
        <LInk href='/auth/register'><a className='border-2 rounded text-purple-500 transition duration-200 ease-in-out hover:text-gray-100 hover:bg-purple-500 border-purple-500 px-4 py-2'>regesiter</a></LInk>
    </Fragment>
    }
</div>
</Fragment>)

};

export default Home;
