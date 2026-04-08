import React from 'react';
import Banner from '../../component/homepage/Banner';
import Stats from '../../component/homepage/Stats';
import TrendingApps from '../../component/homepage/TrendingApps';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default HomePage;