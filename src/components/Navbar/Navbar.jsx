import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-6`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl md:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
            <Link to="/" className='flex align-middle gap-1'>
                <p className='flex items-center text-[16px] xs:text-2xl'><span className='text-Teal'>Study</span><span className='text-white'>Nation</span></p>
        </Link>
            </div>
          </div>
          <div className="md:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink}/>;
            })}
          </div>

          <div className='flex sm:gap-6 gap-3'>
            {
               !isLoggedIn && <Link to="/login">
                <button className=" py-1.5 px-3 sm:py-3 sm:px-6 font-bold text-sm border border-solid rounded-lg border-gray">Login</button>
                </Link>
            }
             {
                !isLoggedIn && <Link to="/signup">
                <button className=" py-1.5 px-3 sm:py-3 sm:px-6 font-bold text-sm border border-solid rounded-lg border-gray">Sign Up</button>
                </Link>
            }
             {
                isLoggedIn && <Link to="/">
                <button className=" py-1.5 px-3 sm:py-3 sm:px-6 font-bold text-sm border border-solid rounded-lg border-gray" onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }}>Log Out</button>
                </Link>
            }
             {
                 isLoggedIn && <Link to="/dashboard">
                <button className=" py-1.5 px-3 sm:py-3 sm:px-6 font-bold text-sm border border-solid rounded-lg border-gray">Dashboard</button>
                </Link>
            }
        </div>
         
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
