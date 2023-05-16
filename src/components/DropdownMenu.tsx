import React from 'react'



type Options = {
    options: Array<string>

}
export const DropdownMenu = ({options} : Options) => {
  return (
    <div className='bg-slate-500 w-screen'>   
        <li>{options[0]}</li>
        <li>{options[1]}</li>
        <li>{options[2]}</li>
        <li>{options[3]}</li>
        <li>{options[4]}</li>


    </div>
       
    
        
 
  )
}

