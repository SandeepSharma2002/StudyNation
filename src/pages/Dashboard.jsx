import React from 'react'
import {FaHtml5,FaCss3Alt,FaLaptopCode,FaWordpress,FaPalette,FaAppStoreIos} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
export default function Dashboard() {
  return (
    <div className='section'>
         <section class="relative p-[20px] w-full">
      <div class="flex w-full">
        <h1 className='font-bold text-[20px]'>Skills</h1>
      </div>
      <div class="grid gap-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full mt-[20px]">
        <div class="relative w-full m-[10px] bg-white text-center rounded-2xl p-[10px] " style={{boxShadow:"0 20px 35px rgba(0, 0, 0, 0.3)"}}>
          <FaLaptopCode className='mx-auto mt-[10px] w-full cursor-pointer' fill='rgb(110, 109, 109)'/>
          <h3 className='m-[10px] capitalize'>Web developemt</h3>
          <p className='text-[12px]'>Join Over 1 million Students.</p>
          <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 cursor-pointer hover:bg-orange-400'>Get Started</button>
        </div>
        <div class="relative  w-full m-[10px] bg-white text-center rounded-2xl p-[10px] " style={{boxShadow:"0 20px 35px rgba(0, 0, 0, 0.3)"}}>
          <FaWordpress className='mx-auto mt-[10px] w-full cursor-pointer' fill='rgb(110, 109, 109)'/>
          <h3 className='m-[10px] capitalize'>WordPress</h3>
          <p className='text-[12px]'>Join Over 3 million Students.</p>
          <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 cursor-pointer hover:bg-orange-400'>Get Started</button>
        </div>
        <div class="relative w-full m-[10px] bg-white text-center  rounded-2xl p-[10px] " style={{boxShadow:"0 20px 35px rgba(0, 0, 0, 0.3)"}}>
          <FaPalette className='mx-auto mt-[10px] w-full cursor-pointer' fill='rgb(110, 109, 109)'/>
          <h3 className='m-[10px] capitalize'>graphic design</h3>
          <p className='text-[12px]'>Join Over 2 million Students.</p>
          <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 cursor-pointer hover:bg-orange-400'>Get Started</button>
        </div>
        <div class="relative w-full m-[10px] bg-white text-center rounded-2xl p-[10px] " style={{boxShadow:"0 20px 35px rgba(0, 0, 0, 0.3)"}}>
          <FaAppStoreIos className='mx-auto mt-[10px] w-full cursor-pointer' fill='rgb(110, 109, 109)'/>
          <h3 className='m-[10px] capitalize'>IOS dev</h3>
          <p className='text-[12px]'>Join Over 1 million Students.</p>
          <button className='bg-orange-600 text-white py-2 px-4 rounded-lg mt-4 cursor-pointer hover:bg-orange-400'>Get Started</button>
        </div>
      </div>

      <section class="mt-[20px] capitalize">
        <h1 className='font-bold text-[20px]'>My courses</h1>
        <div class="w-full px-[20px] pt-[10px] pb-[30px] mt-[10px] bg-white rounded-[10px] " style={{boxShadow:"0 20px 35px rgba(0, 0, 0, 0.3)"}}>
          <ul className='grid grid-cols-2 sm:grid-cols-4'>
            <li class="text-[#000] m-[10px] pb-1 border-b-[1px] border-black ">In progress</li>
            <li className='m-[10px] text-gray cursor-pointer'>explore</li>
            <li className='m-[10px] text-gray cursor-pointer'>incoming</li>
            <li className='m-[10px] text-gray cursor-pointer'>finished</li>
          </ul>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
            <div class="w-full p-[10px]  rounded-[10px] bg-[rgb(235,233,233)]" style={{boxShadow:"0 20px 35px rgba(0, 0, 0, 0.2)"}}>
              <h3>HTML</h3>
              <p className='text-[12px] mt-[5px]'>80% - progress</p>
              <button className='bg-black text-white py-[7px] px-[10px] rounded-[10px] mt-[3rem] cursor-pointer hover:opacity-80'>continue</button>
              <FaHtml5 fill='rgb(25,94,54)' size={"7rem"} className='p-0 float-right -mt-5 mr-5 mb-5'/>
            </div>
            <div class="w-full p-[10px] rounded-[10px] bg-[rgb(235,233,233)]" style={{boxShadow:"0 20px 35px rgba(0, 0, 0, 0.2)"}}>
              <h3>CSS</h3>
              <p className='text-[12px] mt-[5px]'>50% - progress</p>
              <button className='bg-black text-white py-[7px] px-[10px] rounded-[10px] mt-[3rem] cursor-pointer hover:opacity-80'>continue</button>
              <FaCss3Alt fill='rgb(104, 179, 35)' size={"7rem"} className='p-0 float-right -mt-5 mr-5 mb-5'/>
            </div>
            <div class="w-full p-[10px] rounded-[10px] bg-[rgb(235,233,233)]" style={{boxShadow:"0 20px 35px rgba(0, 0, 0, 0.2)"}}>
              <h3>JavaScript</h3>
              <p className='text-[12px] mt-[5px]'>30% - progress</p>
              <button className='bg-black text-white py-[7px] px-[10px] rounded-[10px] mt-[3rem] cursor-pointer hover:opacity-80'>continue</button>
              <DiJavascript fill='rgb(28, 98, 179)' size={"7rem"} className='p-0 float-right -mt-5 mr-5 mb-5'/>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
  )
}

