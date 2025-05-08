import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-dots loading-md"></span>
<span className="loading loading-dots loading-lg"></span>
<span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default Loading;