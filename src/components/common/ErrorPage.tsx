import React from "react";
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

const ErrorPage: React.FC = () => {
    return (
        <main className='min-h-screen justify-center flex flex-col items-center text-center'>
            <h1 className='mb-4 text-8xl font-bold text-[#ffb400]'>404</h1>
            <h1 className='mb-4 text-4xl font-bold text-gray-200'>Page not found</h1>
            <div className='animate-bounce mt-10'>
                <svg
                    className='mx-auto h-16 w-16 text-[#ffb400]'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'/>
                </svg>
            </div>
            <p className='text-gray-300 mt-2'>
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <Link
                to={'/'}
                className='mt-4 flex items-center text-[#ffb400] hover:opacity-80 hover:-translate-x-2 duration-300 font-semibold'>
                <ArrowLeft className='text-[#ffb400] mr-2'/>
                Back to Home
            </Link>
        </main>
    );
}

export default ErrorPage;
