import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white  '>
          <div className='container mx-auto p-8'>
              <h2 className='text-center text-4xl'>Trusted by Millions, Built for You</h2>
           <div className='flex justify-between items-center'>
             <div className='text-center'>
                <small className=''>Total Downloads</small>
                <h1 className='text-4xl '>29.6M</h1>
                <p className='text-lg '>21% more than last month</p>
            </div>
             <div className='text-center'>
                <small>Total Reviews</small>
                <h1 className='text-4xl '>906K</h1>
                <p className='text-lg '>46% more than last month</p>
            </div>
             <div className='text-center'>
                <small>Active Apps</small>
                <h1 className='text-4xl ' >132+</h1>
                <p className='text-lg '>31 more will Launch</p>
            </div>
           </div>
          </div>
        </div>
    );
};

export default Stats;