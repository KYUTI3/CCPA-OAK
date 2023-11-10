import React from "react";

const UpcomingEvents = () => {
return(
    <div className="flex flex-col justify-self-center justify-items-center border rounded-md">
        <div className="text-ultrabold text-xl text-black bg-green-700">
            Upcoming Events @ CCPA 
        </div>
          <div className="my-2 divide-y-2 divide-black"> 
              <div className="text-bold text-lg">
                Nov. 3, 2023
              </div>
                <div className="text-semibold">
                 Example Name -- Celebration
                </div>
                 <div className="text-normal">
                    Example Description - There is a celebration 
                 </div>
            </div>
    </div>
 )
}


