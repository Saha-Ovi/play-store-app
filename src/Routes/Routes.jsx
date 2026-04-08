import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../page/Homepage/HomePage";
import InstallApp from "../page/InstallApps/InstallApp";
import Apps from "../page/apps/Apps";

export const router=createBrowserRouter([
  {
      path:"/",
      Component:MainLayout,
      children:[
        {
            index:true,
            Component:HomePage   
        },
        {
            path:"/apps",
            Component:Apps
        },
        {
            path:"install-apps",
            Component:InstallApp
        }
      ]
  }
])