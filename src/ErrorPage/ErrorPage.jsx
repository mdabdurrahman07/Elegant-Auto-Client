import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <div className='max-w-6xl mx-auto p-3 space-y-7'>
            <h1 className='text-6xl text-center font-bold text-red-50 bg-black p-5 '>404 </h1>
            <img src="https://learningactors.com/wp-content/uploads/2018/05/error_handling.jpg" alt="error" />
            <p className='text-red-500 font-medium text-3xl text-center'>
        <i>{error.statusText || error.message}</i>
      </p>
        </div>
    );
};

export default ErrorPage;