import {Fragment} from "react";
import {getSession, useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from 'axios';

interface changePasswordInputs{
    password:string,
    newPassword:string
}

const Profile = () => {
    const [session, loading] = useSession();
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<changePasswordInputs>();
    
    const onSubmit: SubmitHandler<changePasswordInputs> = data => {
        axios.patch('/api/users/change-password',data).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
    }
    
    return (
        <Fragment>
            <h1>{router.query.name}</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='m-4'>
                    <input {...register('password')} type='password'  placeholder='password'/>
                    <input {...register('newPassword')}  type='password'  placeholder='new password'/>
                    <button className='transition ease-in-out duration-200 bg-purple-500 text-purple-100 px-4 py-2 rounded ml-2 hover:bg-purple-600'>change</button>
                </form>
            </div>
        </Fragment>
    )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession({req: context.req});
    console.log(session)
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}
export default Profile;