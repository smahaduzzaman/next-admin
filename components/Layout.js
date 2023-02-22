import { useState, useEffect, Fragment } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Transition } from "@headlessui/react";

const Layout = ({ children }) => {
    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    function handleReSize() {
        if (innerWidth <= 640) {
            setShowNav(false);
            setIsMobile(true);
        } else {
            setShowNav(true);
            setIsMobile(false);
        }
    }

    useEffect(() => {
        if (typeof window != undefined) {
            addEventListener("resize", handleReSize);
        }

        return () => {
            removeEventListener("resize", handleReSize);
        }

    }, []);


    return (
        <>
            <TopBar showNav={showNav} setShowNav={setShowNav}></TopBar>
            <Transition
                as={Fragment}
                show={showNav}
                enter="transform transition duration-[400ms]"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-[400ms] transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <SideBar showNav={showNav}></SideBar>
            </Transition>
            <main className={`pt-16 transition-all duration-[400mx] ${showNav && !isMobile ? "pl-56" : ""}`}>
                <div className="px-4 md:px-16">
                    {children}
                </div>
            </main>
        </>

    );
};

export default Layout;