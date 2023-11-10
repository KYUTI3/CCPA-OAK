import React from "react";

const Announcements = () => {
return(
    <div className="flex flex-col justify-self-center justify-items-center">
        <div className="text-bold text-xl text-white bg-amber-400">
            Important Announcements @ CCPA 
        </div>
            <div className="border rounded-md"> 
              <div className="text-semibold text-lg">
                Example Header 
              </div>
                <div className="text-normal">
                 Example Description -- This is only an example and should not be proofread.
                </div>
                 <div className="text-semibold text-lg">
                Example Header 
                </div>
                 <div className="text-normal">
                 Example Description -- This is only an example and should not be proofread.
                </div>
            </div>
    </div>
 )
}

export default Announcements
