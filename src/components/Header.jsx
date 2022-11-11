import { motion } from "framer-motion";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import Avatar from "../assets/img/avatar.png";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const googleLogin = () => {
    signInWithGoogle();
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
              src={user ? user.user?.photoURL : Avatar}
              alt="userProfile"
              className="w-10 min-w-[40px] shadow-2xl"
              onClick={googleLogin}
            />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </div>
  );
};

export default Header;
