import React, { useState } from 'react';
import { AppContext } from './AppContext';

const AppProvider = ({children}) => {
    const[installApp,setInstallApp]=useState([]);
    const data={installApp,setInstallApp};
    return (
        <div>
            <AppContext.Provider value={data}>
                {children}
            </AppContext.Provider>
        </div>
    );
};

export default AppProvider;