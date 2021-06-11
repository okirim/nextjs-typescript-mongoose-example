import React from 'react';
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps} from "next";
import {getEvent, getFeaturedEvents} from "../../helpers/api_util";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

function Event(props) {
    const router=useRouter();

    const item=props.event;
    if(!item){
        return <LoadingSpinner color='red-500' h={12} w={12}/>
    }
    const HandleBack=()=>{
        router.back();
    };
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={'/'+item.image} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {item.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{item.description}</p>
                    <div className="flex justify-center">
                        <button onClick={HandleBack} className="flex items-center justify-center space-x-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                            </svg>
                            <span>back</span></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Event;


export const getStaticProps:GetStaticProps=async(context)=> {
    const eventId=context.params.eventId;
    const event=await getEvent(eventId);
  return {
      props:{
          event
      },
      revalidate:30
  }
};

export const getStaticPaths:GetStaticPaths=async()=>{
    const events=await getFeaturedEvents();
    const paths=events.map(e=>({params:{eventId:e.id}}));//[{prams:{eventId:e.id}}]
   return {
       paths,
       fallback:true
   }
}
