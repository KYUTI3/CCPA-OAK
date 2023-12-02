import React from "react"

const UpcomingEvents = () => {
return(
    <div className="flex flex-col justify-self-center justify-items-center  text-center w-50">
        <div className="font-extrabold text-xl text-black bg-green-700 text-[22px]">
            Upcoming Events @ CCPA 
        </div>
          <div className="my-4 divide-y-2 divide-black"> 
              <div className="font-bold text-[21px]">
                Nov. 3, 2023
              </div>
                <div className="font-semibold text-[19px] py-2">
                 Example Name -- Celebration
                </div>
                 <div className="text-normal leading-8">
                  Example Description - There is a celebration 
                 </div>
            </div>
    </div>
 )
}

export default UpcomingEvents
