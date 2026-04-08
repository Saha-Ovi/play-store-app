import React, { useEffect, useState } from 'react';

const useApp = () => {
    const [storeData, setStoreData] = useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            setTimeout(()=>{
                setStoreData(data);
                setLoading(false);
                
            },2000)
        }
        fetchData();


    }, []);
    // console.log(storeData);
    return (
        { storeData,loading}
    );
};

export default useApp;