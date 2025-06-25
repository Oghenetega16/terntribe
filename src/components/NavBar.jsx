import { useState } from "react";
import Logo from "./Logo";
import Button from "./button";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="bg-cyan-950 sm:flex sm:justify-between sm:items-center sm:py-5">
            <div className="flex items-center justify-between px-6 py-8 sm:pr-0 sm:py-0 sm:size-fit">
                <Logo />
                <img src={showMenu === false ? "/assets/icons/bars-solid.svg" : ""}  alt="Menu icon" className="w-5 cursor-pointer sm:hidden" onClick={handleMenu} />
            </div>

            <div className={`${showMenu ? '' : 'hidden'} text-black bg-cyan-100 font-overpass space-y-8 fixed h-full top-0 w-4/5 p-10 sm:flex sm:gap-4 sm:bg-transparent sm:py-0 sm:space-y-0 sm:items-center sm:size-fit sm:relative lg:gap-15`}>
                <img src="/assets/icons/xmark-solid.svg"  alt="" className="w-5 cursor-pointer sm:hidden" onClick={handleMenu} />
                <ul className="space-y-6 sm:flex sm:items-center sm:gap-4 sm:space-y-0 sm:text-sm sm:font-medium sm:text-white">
                    <Link to="/"><li className="mb-6 sm:mb-0 hover:border-b-2 hover:border-cyan-950 w-fit cursor-pointer sm:hover:border-pink-500">Home</li></Link>
                    <li className="hover:border-b-2 hover:border-cyan-950 w-fit cursor-pointer sm:hover:border-pink-500 sm:hidden md:block">What We Do</li>
                    <li className="hover:border-b-2 hover:border-cyan-950 w-fit cursor-pointer sm:hover:border-pink-500">Career</li>
                    <li className="hover:border-b-2 hover:border-cyan-950 w-fit cursor-pointer sm:hover:border-pink-500">Contact Us</li>
                </ul>
                <Link to="/get-involved"><Button text="Get Involved" padding="px-8 py-3" position="mx-auto" /></Link>
            </div>
        </nav>
    )
}