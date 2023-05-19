import React from 'react'

export const MainPage = () => {
  return (
    
    <>
    <div className="mainPage">
        <div className="slide1">
            <a href="#" className="mainPic block h-screen bg-[url('img/mainPage.jpg')] bg-cover"></a>
            <div className="mainPageText absolute top-64 left-16 flex flex-col gap-4">
                <h2 className='text-5xl'>New Arrivals</h2>
                <h6>SHOP COLLECTION</h6>
            </div>
        </div>
       <div className="slide2">
            <h2>Design-driven luxury for the modern home—handcrafted to the highest standards by our North Carolina artisans.</h2>
       </div>
       
    </div>
        
   

    
    </>
  )
}

