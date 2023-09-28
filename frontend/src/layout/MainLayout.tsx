import React from "react";
import SideBar from "./SideBar";

interface IDashboardLayoutWrapperProps {
    children: React.ReactNode;
  }
const MainLayout : React.FunctionComponent<
  IDashboardLayoutWrapperProps
> = ({ children }) => {
  return (
    <>
      <div className={`relative min-h-screen pt-16 pb-10 transition-all duration-500 ease-in-out bg-slate-100 dark:bg-gray-900 md:pl-72`}>
        <SideBar />
        {children}
      </div>
    </>
  );
};

export default MainLayout;