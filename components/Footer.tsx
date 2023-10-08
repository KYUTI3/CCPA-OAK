import Link from "next/link";
import React from "react";
import Image from 'next/image'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import heart from './assets/heart.svg'


const Footer = () => {
return(
    <div className="flex justify-center bg-green-900 text-yellow-600 text-xl font-mono gap-y-8 text-center items-center"> 
     <div className="flex-col">
        <div>
            <Image
            src="/banners/ccpa-banner.jpeg"
            width={85}
            height={85}
            alt="CCPA Banner"/> 
                  <div className="font-extrabold"> Coliseum College Prep Academy </div> 
                    <div className=""> 1390 66th Ave, Oakland, CA 94621 
                     <div className="font-semibold underline underline-offset-4"> Contact Information </div>
                      <div> Fax: <div className="underline-offset-2 decoration-black font-semibold"> (510) 627-9232 </div> 
                        <div> Phone Number: <div className="underline-offset-2 decoration-black font-semibold"> (510) 879-3232 </div> 
                         <div className="items-center gap-x-4 place-self-start"> 
                             {/* <div>
                             <a href='https://www.facebook.com/ccpa.lions'>
                             <Image src={facebook} alt='Facebook'/>
                             </a>
                             </div>
                             <div>
                              <a href='https://www.instagram.com/ccpa_lions/'>
                              <Image src={instagram} alt='Instagram'/>
                              </a>
                             </div>
                             <div>
                              <a href='https://www.donorschoose.org/schools/california/oakland-unified-school-district/coliseum-college-prep-academy/27025'>
                              <Image src={heart} alt='Donate!'/>
                              </a>
                             </div> */}
                              <div className="font-bold place-self-start"> Made with 💚 by <a className="underline underline-offset-2">CCPA Staff</a> & <a className="underline underline-offset-2" href="https://www.buymeacoffee.com/luisc">Luis Cardenas</a> | All Rights Reserved ⓒ 2024</div> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>            
 </div> 
        



 )
} 

export default Footer;