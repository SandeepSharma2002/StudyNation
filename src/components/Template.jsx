import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import bgImg from "../assets/bgImg.jpg";
import {FcGoogle} from "react-icons/fc"

const Template = ({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn
}) => {
  return (
    <div className="flex section gap-x-12 justify-between gap-y-0">
      <div className="w-11/12 max-w-[450px] mx-auto">
        <h1 className="text-black font-semibold text-[1.5rem] leading-[2.375rem]">{title}</h1>
        <p className="flex flex-col">
          <span className="text-sm leading-7 text-gray">{desc1}</span>
          <span className="text-Teal italic">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex flex-row w-full items-center mt-3 mb-5 gap-x-2">
          <div className="h-[1px] w-full bg-gray"></div>
          <p className="text-gray font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-gray"></div>
        </div>
        <button className=" py-1.5 px-3 sm:py-3 sm:px-6 font-bold text-sm border border-solid rounded-lg border-gray flex w-full items-center gap-3 justify-center">
          <FcGoogle/>
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="border-[3px] border-solid border-Teal rounded-lg h-fit md:flex hidden">
        {/* <img src={bgImg} alt="" width={558} height={504} loading="lazy" className="" /> */}
        <img src={image} alt="" width={558} height={490} loading="lazy" className="p-4"/>
      </div>
    </div>
  );
}

export default Template