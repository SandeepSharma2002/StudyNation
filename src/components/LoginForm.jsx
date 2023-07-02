import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const[showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevval) => ({
      ...prevval,
      [event.target.name]: event.target.value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log(formData);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-sm leading-7 text-gray mb-1">
          Email Address <sup className="text-[#e83c3c] text-[1rem]">*</sup>
        </p>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Address"
          required
          className="rounded-[0.5rem] text-gray w-full p-[8px]"
        />
      </label>
      <label className="w-full relative">
        <p className="text-sm leading-7 text-gray mb-1">
          Password <sup className="text-[#e83c3c] text-[1rem]">*</sup>
        </p>
        <input
          type={showPassword ? ("text") : ("password")}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          required
          className="rounded-[0.5rem] text-gray w-full p-[8px]"
        />
        <span onClick={()=>setShowPassword((val) => !val)} className="absolute top-[38px] right-3 cursor-pointer">
          {showPassword ? <AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye  fontSize={24} fill="#AFB2BF" />}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-Teal ml-auto max-w-max">Forgot Password</p>
        </Link>
      </label>
      <button className=" py-1.5 px-3 sm:py-3 sm:px-6 font-bold text-sm border border-solid rounded-lg border-gray">Sign In</button>
    </form>
  );
}

export default LoginForm;