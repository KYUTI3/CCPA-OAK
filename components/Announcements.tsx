import React from "react";

const Announcements = () => {
return(
    <div className="flex flex-col justify-center justify-self-center justify-items-center text-center w-82">
        <div className="font-extrabold text-[22px] text-white bg-yellow-500">
            Important Announcements @ CCPA 
        </div>
            <div className="divide-y-2 my-2 "> 
              <div className="font-semibold text-[21px]">
                Example Header 
              </div>
                <div className="text-normal py-1">
                 Example Description -- This is only an example and should not be proofread.
                </div>
                 <div className="font-semibold text-[21px]">
                Example Header 
                </div>
                 <div className="text-[15px]">
                 Example Description -- This is only an example and should not be proofread.
                </div>
            </div>
    </div>
 )
}

export default Announcements
