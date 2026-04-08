import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const InstallApp = () => {
     const{installApp,setInstallApp}=useContext(AppContext);
     console.log(installApp);
     const handleRemove=(currentApp)=>
     {
        const newInstallApp = installApp.filter(app=>app.id!==currentApp.id);
        setInstallApp(newInstallApp);
     }
    return (
        <div>
            {
                installApp.map(app=>(
                
                <div>
                    <h2>hello from install app {app.title}</h2>
                    <button className='btn' onClick={()=>handleRemove(app)}>uninstall</button>
                </div>
                ))
            }
        </div>
    );
};

export default InstallApp;