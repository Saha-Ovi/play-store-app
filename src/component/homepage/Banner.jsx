import React from 'react';
import playImg from '../../assets/images/playstore.png'
import storeImg from '../../assets/images/appstore.png'
import bannerImg from '../../assets/images/hero.png'

const Banner = () => {
    return (
        <div className='container mx-auto mt-8'>
            <div className="hero bg-base-200 min-h-[70vh]">
                <div className="hero-content text-center">
                    <div className="max-w-md space-y-4">
                        <h1 className="text-5xl font-bold">We Build <br />
                            Productive Apps</h1>
                        <p className="py-6">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='flex gap-3 justify-center'>
                            <button className="btn btn-base p-6 ">
                                <img src={playImg} alt="" />
                                Google Play
                                </button>
                            <button className="btn btn-base p-6">
                                <img src={storeImg} alt="" />
                                App Store
                                </button>
                        </div>
                         <div className=''>
                            <img src={bannerImg} alt="" />
                         </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;