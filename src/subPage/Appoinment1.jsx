import React from 'react'
import CONSTRUCTION from '../assets/constructionjpg.jpg'

function Appoinment1() {
    const getInform=()=>{

    }
  return (
    <div className='py-12 flex flex-col justify-center items-center h-screen w-full gap-6 bg-cover bg-no-repeat-repeat' style={{backgroundImage:`url(${CONSTRUCTION})`}} >
        <h1 className='text-4xl font-bold text-white text-center'>Book Your Appoinment Here!</h1>
      <form className='flex flex-col items-center w-[500px] h-[550px] bg-orange-600 py-10 gap-4'>
        
        <input type='text' name='name' placeholder=' Enter Your Name' onChange={getInform} className='w-[400px] h-[30px] border-b-2 border-white text-white font-md text-center  bg-cyan-950' />
        
        <input type='text' name='email' placeholder='Email' onChange={getInform} className='w-[400px] h-[30px] border-b-2 border-white text-white font-md text-center  bg-cyan-950'/>
        
        <input type='number' name='phone' placeholder='Phone NUmber' onChange={getInform} className='w-[400px] h-[30px] border-b-2 border-white text-white font-md text-center  bg-cyan-950'/>
      
        <input type='address' name='name'placeholder=' Address' onChange={getInform}className='w-[400px] h-[30px] border-b-2 border-white text-white font-md text-center   bg-cyan-950 ' />
        
        <input type='date' placeholder='Date' className='w-[400px] h-[30px] border-b-2 border-white text-white font-md text-center  bg-cyan-950' />
        
        <input type='time' placeholder='Time' className='w-[400px] h-[30px] border-b-2 border-white text-white font-md text-center  bg-cyan-950'/>
        <label className='w-[400px] h-[30px] text-white text-center'>Meeting Type</label >
        <select className='w-[400px] h-[30px] border-b-2  border-white font-md text-center  bg-cyan-950' >
            <option></option>
            <option>In-Person</option>
             <option>Site Visit</option>
              <option>Virtual Meeting</option>
        </select>
        
      
        <label className=' text-white text-center'>Service Required</label >
        <select className='w-[400px] h-[30px] border-b-2 border-white font-md text-center  bg-cyan-950'>
            <option></option>
            <option>New Cnstruction</option>
             <option>Interior Design</option>
              <option>Renovation</option>
              <option>Structural Construction</option>
              <option>Other</option>
        </select>
        <button className='bg-gradient-to-r from-cyan-950 to-blue-800 rounded-md px-2 font-bold text-white shadow-md hover:from-cyan-800 hover:to-blue-700 transition duration-300 w-[150px]'>Submit</button>
       
    </form>
    </div>
  )
}

export default Appoinment1
