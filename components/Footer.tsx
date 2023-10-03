import Link from "next/link";
import React from "react";
import Image from 'next/image'

const Footer = () => {
    return(
    <div className="flex justify-center bg-green-900 text-yellow-600"> 
     <div className="flex-col">
            <div>
                <Image
                    src="/banners/ccpa-banner.jpeg"
                    width={100}
                    height={100}
                    alt="CCPA Banner"/> 
                    <div className="text-bold"> Coliseum College Prepratory Academy 
                        <div className=""> 1390 66th Ave, Oakland, CA 94621 
                         <div className="underline-offset-4"> Contact Information 

                </div>
             </div>            
           </div> 
        </div>
    </div>
</div>



 )
} 

export default Footer;