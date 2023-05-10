import React from 'react'

export const Header = () => {
  return (
    <>
    <a href="#">Modish Moments</a>
    <div className="navbar">
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">Hover</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-screen">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>

        
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">Hover</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-screen">
          <li><a>Item 3</a></li>
          <li><a>Item 4</a></li>
        </ul>

        
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">Hover</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-screen">
          <li><a>Item 5</a></li>
          <li><a>Item 6</a></li>
        </ul>
      </div>

    </div>
    
    </>
    
  )
}

