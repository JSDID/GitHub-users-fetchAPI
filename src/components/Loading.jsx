import React from 'react';

const Loading = () => {
    return (
        <div className='h-96 flex justify-center items-center'>
            <span className='border-4 p-5 rounded-full border-b-transparent border-green-700 animate-spin'></span>
        </div>
    );
};

export default Loading;
