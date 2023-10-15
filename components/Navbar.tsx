import React from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar:React.FC = () => {

return(
    <div className="flex flex-row top-0 justify-center font-sans py-3">
        <nav className="fixed flex-row space-x-6 text-lg font-medium"> 
                <a className="hover:text-yellow-600"> 
                  <Link href="/#"> Home </Link>
                </a>
               <a className="hover:text-yellow-600">  
                 <Link href="/#"> About </Link>
               </a>
              <a className="hover:text-yellow-600"> 
                 <Link href="/#"> Academics </Link>
              </a>  
               <a className="hover:text-yellow-600"> 
                 <Link href="/#"> Faculty </Link>
               </a>
               <a className="hover:text-yellow-600"> 
                 <Link href="/#"> Resources </Link>
               </a>
            <button className="bg-green-800 right-5 fixed rounded-md text-base w-13 p-2 justify-end hover:text-yellow-600 "> 
                <a href="/#" > Enroll </a>
            </button>
        </nav>
    </div>

 )
}

export default Navbar;