import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar:React.FC = () => {
return(
    <div className="flex flex-row top-0 justify-center font-sans py-3">
        <nav className="space-x-6 text-lg font-medium"> 
                <Link href="/#"> Home </Link>
                <Link href="/#"> About </Link>
                <Link href="/#"> Academics </Link>
                <Link href="/#"> Faculty </Link>
                <Link href="/#"> Resources </Link>
            <button className="bg-green-900 right-5 fixed rounded-md text-base w-13 p-2 justify-end hover:[bg-green-600] "> 
                <a href="/#" > Enroll </a>
            </button>
        </nav>
    </div>

 )
}

export default Navbar;