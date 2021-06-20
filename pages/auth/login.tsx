import {Fragment, useContext, useEffect} from 'react';
import LoginForm from "../../src/components/LoginForm";
import {IUser} from "../../app/types/app.types";
import {getSession, signIn} from "next-auth/client";
import {useRouter} from 'next/router';
import {useState} from 'react';
import {Session} from 'next-auth';
import {GetServerSideProps} from "next";

interface LoginProps{
    session?:Session
}
const Login:React.FC<LoginProps>=({session})=> {

    const router = useRouter();
useEffect(()=>{
        if(session){
            router.push(`/users/${session?.user?.name}`);
        }
    }, [])
    const handleLogin = async (data: IUser) => {
        //login
        signIn('credentials', {redirect: false, ...data}).then(res=>{
            getSession().then(session=>window.location.href=`/users/${session?.user?.name}`)
        });

    }
    return (
        <Fragment>
            <div className="bg-blue-900 flex items-center justfy-center w-screen h-screen">
                <LoginForm handleSubmit={handleLogin}/>
            </div>
        </Fragment>
    );
}
export const getServerSideProps:GetServerSideProps=async (context)=>{
    const session=await getSession({req:context.req});
    // console.log(session)
    if(session){
        return {
            redirect:{
                destination:`/users/${session?.user?.name}`,
                permanent:false
            }
        }
    }
    return {
        props:{session}
    }
}
export default Login;