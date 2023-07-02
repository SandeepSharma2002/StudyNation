import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const[showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const[accountType, setaccountType] = useState("student");

    const [formData,setFormData] = useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        }
    )
    function changeHandler(event) {
        setFormData((prevval) => ({
          ...prevval,
          [event.target.name]:event.target.value,
        }));
      }
      function submitHandler(event){
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created")

        const finalData = {
          ...formData,
          accountType
        }
       console.log(finalData);
        navigate("/dashboard");
      }
  return (
    <div>
        <div className='flex p-1 gap-x-1 mt-3 rounded-full max-w-max '>
            <button className={`${accountType === "student" ? ("bg-white text-black"):(" bg-transparent text-gray")} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setaccountType("student")}>Student</button>
            <button className={`${accountType === "instructor" ?("bg-white text-black"):(" bg-transparent text-gray")}  py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setaccountType("instructor")}>Instructor</button>
        </div>
        <form onSubmit={submitHandler}  className="flex flex-col w-full gap-y-3 mt-3">
            <div className='flex gap-x-3'>
            <label className="w-full">
                <p className="text-sm leading-7 text-gray mb-1">First Name<sup className="text-[#e83c3c] text-[1rem]">*</sup></p>
                <input type="text"
                className="rounded-[0.5rem] text-gray w-full p-[8px]" 
                required
                name='firstName'
                value={formData.firstName}
                onChange={changeHandler}
                placeholder='Enter First Name'/>
            </label>
            <label  className="w-full">
                <p className="text-sm leading-7 text-gray mb-1">Last Name<sup className="text-[#e83c3c] text-[1rem]">*</sup></p>
                <input type="text" 
                required
                className="rounded-[0.5rem] text-gray w-full p-[8px]"
                name='lastName'
                value={formData.lastName}
                onChange={changeHandler}
                placeholder='Enter Last Name'/>
            </label>
            </div>
            <label  className="w-full">
                <p className="text-sm leading-7 text-gray mb-1">Email Address<sup className="text-[#e83c3c] text-[1rem]">*</sup></p>
                <input type="email" 
                required
                className="rounded-[0.5rem] text-gray w-full p-[8px]"
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email ID'/>
            </label>
        
        <div className='flex gap-x-3'>
        <label  className="relative w-full">
        <p className="text-sm leading-7 text-gray mb-1">
          Create Password<sup className="text-[#e83c3c] text-[1rem]">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          className="rounded-[0.5rem] text-gray w-full p-[8px]"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Password"
          required
        />
        <span onClick={()=> setShowPassword((prev) => !prev)} className="absolute top-[38px] right-3 cursor-pointer">
          {!showPassword ? <AiOutlineEye  fontSize={24} fill="#AFB2BF" /> : <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF" />}
        </span>
      </label>
      <label  className="relative w-full">
        <p className="text-sm leading-7 text-gray mb-1">
          Confirm Password<sup className="text-[#e83c3c] text-[1rem]">*</sup>
        </p>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          className="rounded-[0.5rem] text-gray w-full p-[8px]"
          value={formData.confirmPassword}
          onChange={changeHandler}
          placeholder="Password"
          required
        />
        <span onClick={()=>setShowConfirmPassword((val)=> !val)} className="absolute top-[38px] right-3 cursor-pointer">
          {!showConfirmPassword ? <AiOutlineEye  fontSize={24} fill="#AFB2BF"/> : <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF" />}
        </span>
      </label>
        </div>
        <button className=" py-1.5 px-3 sm:py-3 sm:px-6 font-bold text-sm border border-solid rounded-lg border-gray w-full">Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm;