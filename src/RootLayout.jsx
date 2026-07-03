import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

export default function RootLayout() {

    const location = useLocation()

    const transparent = location.pathname === "/";

    return (
        <>
            <Header transparent={transparent} />
            <Outlet />
            <Footer />
        </>
    )
}