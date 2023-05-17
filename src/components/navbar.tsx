import React, { useState } from 'react';
import { DropdownMenu } from './DropdownMenu';

export const Navbar = () => {
  const [isLivingOpen, setIsLivingOpen] = useState(false);
  const [isDiningOpen, setIsDiningOpen] = useState(false);
  const [isBedroomOpen, setIsBedroomOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleLiving = () => {
    setIsLivingOpen(!isLivingOpen);
  };

  /*const handleLivingLeave = () => {
    setIsLivingOpen(false);
  };*/

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
        <div
          className="living"
          onMouseEnter={handleLiving}
          onMouseLeave={handleLiving}
        >
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"> LIVING </button>
          {isLivingOpen && (
            <div
              className="livingDropdown"
              onMouseEnter={handleLiving}
              onMouseLeave={handleLiving}
            >
              <DropdownMenu
                options={['Shop All', 'Sofas', 'Tables', 'New Arrivals', 'livingroom1.png', 'livingroom2.png']}
              />
            </div>
          )}
        </div>

        <div
          className="dining"
          onMouseEnter={handleDining}
          onMouseLeave={handleDining}
        >
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"> DINING </button>
          {isDiningOpen && (
            <div
              className="diningDropdown"
              onMouseEnter={handleDining}
              onMouseLeave={handleDining}
            >
              <DropdownMenu
                options={['teeraefe', 'q34rqewf23e323r', 'awef2222fe', 'awqfefwef', 'aefeavf']}
              />
            </div>
          )}
        </div>

        <div
          className="bedroom"
          onMouseEnter={handleBedroom}
          onMouseLeave={handleBedroom}
        >
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"> BEDROOM </button>
          {isBedroomOpen && (
            <div
              className="bedroomDropdown"
              onMouseEnter={handleBedroom}
              onMouseLeave={handleBedroom}
            >
              <DropdownMenu
                options={['123123123', 'q3434r', 'a5466e', 'aw97f', 'a2432434f']}
              />
            </div>
          )}
        </div>

        <div
          className="services"
          onMouseEnter={handleServices}
          onMouseLeave={handleServices}
        >
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
OUR SERVICES
</button>
{isServicesOpen && (
<div
           className="servicesDropdown"
           onMouseEnter={handleServices}
           onMouseLeave={handleServices}
         >
        <DropdownMenu
        options={['srgwg4t', 'q323433455r', 'asgslkjglkr', 'werf', 'a']}
        />
        </div>
        )}
        </div>
        </div>
        </>
        );
};
