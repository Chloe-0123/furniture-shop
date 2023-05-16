import React, { useState }from 'react'
import { DropdownMenu } from './DropdownMenu'

export const Navbar = () => {


  const [isLivingOpen, setIsLivingOpen] =  useState(false)
  const [isDiningOpen, setIsDiningOpen] =  useState(false)
  const [isBedroomOpen, setIsBedroomOpen] =  useState(false)
  const [isServicesOpen, setIsServicesOpen] =  useState(false)

  const handleLiving = () => {
    setIsLivingOpen(!isLivingOpen);
  };
  const handleDining = () => {
    setIsDiningOpen(!isDiningOpen);
  };
  const handleBedroom = () => {
    setIsBedroomOpen(!isBedroomOpen);
  };
  const handleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
    <div className="flex flex-1 w-full justify-center">
      <div className="living relative" onMouseEnter={handleLiving} onMouseLeave={handleLiving}>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
          LIVING
        </button>
      </div>
      <div className="dining" onMouseEnter={handleDining} onMouseLeave={handleDining}>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
          DINING
        </button>
        
      </div>
      <div className="bedroom" onMouseEnter={handleBedroom} onMouseLeave={handleBedroom}>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
          BEDROOM
        </button>
       
      </div>
      <div className="services" onMouseEnter={handleServices} onMouseLeave={handleServices}>
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
          OUR SERVICES
        </button>
        
      </div>
    </div>
    {isLivingOpen && <DropdownMenu options={['teere','q34rq23r','aweffe','awefwef','aefef']}/>} 
    {isDiningOpen && <DropdownMenu options={['teeraefe','q34rqewf23e323r','awef2222fe','awqfefwef','aefeavf']}/>}
    {isBedroomOpen && <DropdownMenu options={['123123123','q3434r','a5466e','aw97f','a2432434f']}/>}
    {isServicesOpen && <DropdownMenu options={['srgwg4t','q323433455r','asgslkjglkr','werf','a']}/>}
</>

  )
  
}