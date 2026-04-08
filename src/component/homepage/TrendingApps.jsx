import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { Link } from 'react-router';
import useApp from '../../hook/useApp';
import navImg from '../../assets/images/logo.png'

const TrendingApps = () => {
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
                )
                : (<div className='space-y-4'>
                        <h2 className='text-center text-5xl font-bold'>Trending Apps</h2>
                        <p className='text-center text-xl font-semibold'>Explore All Trending Apps on the Market developed by us</p>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                storeData.slice(0, 9).map(data => {
                                    return (
                                        <Link to={`/apps/${data.id}`} key={data.id} className="card bg-base-100 w-96 shadow-sm">
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
                                        </Link>
                                    )
                                }
                                )
                            }
                        </div>

                        <div className='flex justify-center'>
                            <Link to={"/apps"}> <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All</button></Link>
                        </div>
                    </div>)

            }
        </div>
    );
};

export default TrendingApps;