import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import axios from "axios";

interface Product {
  id: string;
  title: string;
}

const Home = () => {
  const emailRef = React.useRef<HTMLInputElement | null>();
  const nameRef = React.useRef<HTMLInputElement | null>();
  const messageRef = React.useRef<HTMLTextAreaElement | null>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      message: messageRef.current.value,
    };
    if (data.email && data.name && data.message) {
      axios
        .post("api/contact/newsletter", data)
        .then((res) => {
          console.log(res.data);
          emailRef.current.value = "";
          nameRef.current.value = "";
          messageRef.current.value = "";
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-900 text-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Get in touch
        </h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div className="mt-6 ">
          <div className="items-center -mx-2 md:flex">
            <div className="w-full mx-2">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>

              <input
                ref={emailRef}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
              />
            </div>

            <div className="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                E-mail
              </label>

              <input
                ref={nameRef}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Message
            </label>

            <textarea
              ref={messageRef}
              className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md 
            hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-gray-400"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>

      <Link href="/events">
        <a
          className="px-8 py-4 text-4xl tracking-wide bg-purple-500 text-purple-100
                                    rounded transition duration-200 ease-in-out hover:bg-purple-600"
        >
          <div className="flex justify-center items-center">
            <span>events</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
        </a>
      </Link>
    </div>
  );
};

// export const getStaticProps:GetStaticProps=async(con)=> {
//     return {
//         props: {
//             featuredEvents: ''
//         }
//     }
// }

export default Home;
