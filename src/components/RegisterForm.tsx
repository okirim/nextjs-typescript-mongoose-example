import {Fragment} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { UserAttrs } from '../../models/users/users.schema';
export interface registerUserAttrs extends UserAttrs{
    passwordConfirm:string
}
interface RegisterFormProps{
    handleRegister:(data:registerUserAttrs)=>void,
    isLoading:boolean
}
const RegisterForm:React.FC<RegisterFormProps>=(props)=> {
    const { register, handleSubmit } = useForm<registerUserAttrs>();
    const onSubmit: SubmitHandler<registerUserAttrs> = (data:registerUserAttrs) => props.handleRegister(data)
    
    return (
       <Fragment>

           <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
               <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

               <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                       <div>
                           <label className="text-gray-700 dark:text-gray-200" htmlFor="username">name</label>
                           <input id="username" type="text"
                                  {...register('name')}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border 
                                  border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300
                                   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500
                                   focus:outline-none focus:ring"/>
                       </div>

                       <div>
                           <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email
                               Address</label>
                           <input id="emailAddress" type="email"
                                  {...register('email')}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border 
                                  border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300
                                  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500
                                  focus:outline-none focus:ring"/>
                       </div>

                       <div>
                           <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                           <input id="password" type="password"
                                  {...register('password')}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 
                                  rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                                  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                       </div>

                       <div>
                           <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Password
                               Confirmation</label>
                           <input id="passwordConfirmation" type="password"
                                  {...register('passwordConfirm')}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 
                                  bg-white border border-gray-300 rounded-md dark:bg-gray-800
                                   dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
                                   dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                       </div>
                   </div>

                   <div className="flex justify-end mt-6">
                       <button
                            className="px-6 py-2 leading-5 text-green-100 transition-colors 
                           duration-200 transform bg-green-500 rounded-md hover:bg-green-600
                             focus:outline-none focus:bg-green-700 focus:ring-2 focus:ring-gree-800" >
                           {props.isLoading ? '...' : 'save'}
                       </button>
                   </div>
               </form>
           </section>
       </Fragment>
    );
}

export default RegisterForm;