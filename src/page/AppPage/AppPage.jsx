import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useApp from '../../hook/useApp';
import navImg from '../../assets/images/logo.png'
import { BsDownload } from 'react-icons/bs';
import { AppContext } from '../../context/AppContext';

const AppPage = () => {
    const { id } = useParams()
    const { storeData, loading } = useApp();
    const{installApp,setInstallApp}=useContext(AppContext);
    const expectedApp = storeData.find(app => app.id === Number(id));
    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <h2 className='text-8xl flex'>L<img className='w-20 animate-spin' src={navImg} alt="" /> ading</h2>
            </div>
        );
    }
    if (!expectedApp) {
        return (
            <div className='bg-base-300 text-5xl text-center font-extrabold'>
                <h2>App is Found</h2>
            </div>
        );
      

    }
      const handleOnClick=(expectedApp)=>
        {
            setInstallApp([...installApp,expectedApp]);
        }
    return (
        <div className='container mx-auto w-full'>
            <div className='flex items-center gap-8'>
                <div>
                    <img className='w-20' src={expectedApp.image} alt="" />
                </div>
                <div className=''>
                    <div className='border-b border-gray-400'>
                        <h2>{expectedApp.title}</h2>
                        <p>Developed By : {expectedApp.companyName}</p>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <div>
                            <span><BsDownload /></span>
                            <p>Downloads</p>
                            <p>{expectedApp.downloads}</p>
                        </div>
                        
                            <div>
                                <span><BsDownload /></span>
                                <p>Downloads</p>
                                <p>{expectedApp.downloads}</p>
                            </div>
                            
                                <div>
                                    <span><BsDownload /></span>
                                    <p>Downloads</p>
                                    <p>{expectedApp.downloads}</p>
                                </div>
                    </div>
                    <div>
                        <button onClick={()=>handleOnClick(expectedApp)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-green-500 text-white">Install Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppPage;