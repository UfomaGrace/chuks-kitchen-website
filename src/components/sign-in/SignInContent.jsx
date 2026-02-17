import { useState } from "react";
import { IoEye, IoEyeOff, IoMail } from "react-icons/io5";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdLock } from "react-icons/md";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";

export default function SignInContent() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8 w-full px-30">
      <div className="text-center items-center justify-center mb-6">
        <Logo className="" />
        <h1 className="text-3xl font-bold">Login Your Account</h1>
      </div>
      <form className="">
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#3B4758]">
            Email or phone number
          </label>

          <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2.5 bg-white transition-all duration-200 focus-within:border-[#337FFF] focus-within:ring-2 focus-within:ring-[#337FFF] focus-within:ring-offset-1">
            <IoMail className="text-xl text-[#616161]"/>
            <input
              type="text"
              placeholder="name@gmail.com"
              className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#3B4758] mb-1">
            Password
          </label>

          <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2.5 bg-white transition-all duration-200 focus-within:border-[#337FFF] focus-within:ring-2 focus-within:ring-[#337FFF] focus-within:ring-offset-1">
            <MdLock className="text-[#616161] text-xl"/>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="******"
              className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transform translate-y-0.5"
            />

            {/* Toggle show password */}
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <IoEye className="text-gray-400 text-2xl"/>
              ) : (
                <IoEyeOff className="text-gray-400 text-2xl"/>    
              )}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="text-right mt-2">
          <a href="#" className="text-sm text-[#1E88E5] font-medium transition-colors duration-200 hover:text-[#1565C0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 rounded-sm">
            Forgot Password?
          </a>
        </div>

        {/* Continue button */}
        <Link to={"/app/home"} className="block text-center w-full bg-[#ff7a18] text-white py-3.5 rounded-xl mt-5 font-semibold transition-all duration-200 hover:bg-[#e66d15] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#ff7a18] focus:ring-offset-2 hover:shadow-md tracking-wide">
          Continue
        </Link>

        {/* Divider */}
        <p className="text-center text-[#1F2937] my-4 text-sm">Or continue with</p>

        {/* Google */}
        <button type="button" className="w-full active:scale-[0.98] border border-gray-300 rounded-lg py-3 mb-3 flex items-center justify-center gap-3 bg-white cursor-pointer transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-[#337FFF] focus:ring-offset-2 focus:outline-none hover:shadow-md">
            <FcGoogle className="text-2xl"/> 
            <span className="text-[#3B4758] font-medium">Continue with Google</span>
        </button>

        {/* Apple */}
        <button type="button" className="w-full active:scale-[0.98] border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-3 bg-white cursor-pointer transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-[#337FFF] focus:ring-offset-2 focus:outline-none hover:shadow-md"> 
            <FaApple className="text-xl text-black"/> 
            <span className="text-[#3B4758] font-medium">Continue with Apple</span>  
        </button>

        {/* Create account */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to={"/sign-up"} className="text-[#337FFF] cursor-pointer transition-colors hover:text-[#265FCC]">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
