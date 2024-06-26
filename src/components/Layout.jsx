import React from "react";
import HeaderComponent from "./layout/header";
import FooterComponent from "./layout/footer";
import { Outlet } from "react-router-dom";

const LayoutComponent = () => {
    return (
        <>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
        </>
    );
};

export default LayoutComponent;