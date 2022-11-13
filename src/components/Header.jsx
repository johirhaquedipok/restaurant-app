import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import Avatar from "../assets/img/avatar.png";
import logo from "../assets/img/logo.png";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/state-provider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const provider = new GoogleAuthProvider();
  const [isMenu, setIsMenu] = useState(false);

  const googleLogin = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(auth, provider);
      console.log(providerData[0]);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
      {/* destop & tablet */}
      <div className="hidden md:flex w-full h-full">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="flex items-center ml-auto gap-8">
          <ul className="flex items-center  gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user?.photoURL : Avatar}
              alt="userProfile"
              className="w-10 min-w-[40px] shadow-2xl rounded-full"
              onClick={googleLogin}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col px-4 py-2 right-0 top-12"
              >
                {user && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base">
                  Log Out <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </div>
  );
};

export default Header;
