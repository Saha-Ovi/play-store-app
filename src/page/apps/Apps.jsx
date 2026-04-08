import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import useApp from '../../hook/useApp';
import navImg from '../../assets/images/logo.png'

const Apps = () => {
    const { storeData, loading } = useApp();
    // const [storeData, setStoreData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("/data.json");
    //         const data = await res.json();
    //         setStoreData(data);
    //     }
    //     fetchData();


    // }, []);
    // console.log(storeData);

    return (
        <div className='container mx-auto my-8 '>
            {
                loading ?
                    (
                        <div className='flex justify-center items-center'>
                            <h2 className='text-8xl flex'>L<img className='w-20 animate-spin' src={navImg} alt="" /> ading</h2>
                        </div>
                    ) :
                     <div className='space-y-4'>
                <h2 className='text-center text-5xl font-bold'>Our All Applications</h2>
                <p className='text-center text-xl font-semibold'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between'>
                    <h2>({storeData.length}) Apps Found</h2>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        storeData.map(data => {
                            return (
                                <div key={data.id} className="card bg-base-100 w-96 shadow-sm">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src={data.image}
                                            alt="Shoes"
                                            className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{data.title}</h2>
                                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                        <div className="flex justify-between items-center w-full">
                                            <button className="badge flex item-center bg-base-200 text-green-500">
                                                <MdDownload />
                                                {data.downloads}</button>
                                            <button className="badge bg-orange-100 text-orange-500">
                                                <FaRegStar /> {data.ratingAvg}</button>



                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
           }
        </div>
    );
};

export default Apps;