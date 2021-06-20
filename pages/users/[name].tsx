import {Fragment} from "react";
import {getSession, useSession} from "next-auth/client";
import { useRouter } from "next/router";
import {GetServerSideProps} from "next";

const Profile=()=>{
    const [session,loading]=useSession();
    const router=useRouter();
    
    return (
        <Fragment>
            <h1>{router.query.name}</h1>
        </Fragment>
    )
}
export const getServerSideProps:GetServerSideProps=async (context)=>{
    const session=await getSession({req:context.req});
    console.log(session)
    if(!session){
        return {
            redirect:{
                destination:'/auth',
                permanent:false
            }
        }
    }
    return {
        props:{}
    }
}
export default Profile;