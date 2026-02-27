import React, { useState } from 'react'
import Logo from '../ui/Logo'
import { MdLocalPhone, MdLock } from "react-icons/md";
import { IoEye, IoEyeOff, IoMail } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function SignUpContent() {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 md:p-8 p-2 w-full lg:px-30 md:px-16 px-4 py-4">
      <div className="text-center items-center justify-center mb-6">
        <Logo/>
        <h1 className="text-3xl font-bold">Create Your Account</h1>
      </div>

      {/* form */}
      <form>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#3B4758]">
            Email
          </label>

          <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2.5 bg-white transition-all duration-200 focus-within:border-[#337FFF] focus-within:ring-2 focus-within:ring-[#337FFF] focus-within:ring-offset-1">
            <IoMail className="text-xl text-[#616161]" />
            <input
              type="text"
              placeholder="name@gmail.com"
              className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className='mb-4'>
          <label className="block text-sm font-medium mb-1 text-[#3B4758]">
            Phone number
          </label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2.5 bg-white transition-all duration-200 focus-within:border-[#337FFF] focus-within:ring-2 focus-within:ring-[#337FFF] focus-within:ring-offset-1">
            <MdLocalPhone className="text-xl text-[#616161]" />
            <input
              type="text"
              placeholder="8123340690"
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
            <MdLock className="text-[#616161] text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="QWE123#"
              className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transform translate-y-0.5"
            />

            {/* Toggle show password */}
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <IoEye className="text-gray-400 text-2xl" />
              ) : (
                <IoEyeOff className="text-gray-400 text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/*Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#3B4758] mb-1">
            Confirm Password
          </label>

          <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2.5 bg-white transition-all duration-200 focus-within:border-[#337FFF] focus-within:ring-2 focus-within:ring-[#337FFF] focus-within:ring-offset-1">
            <MdLock className="text-[#616161] text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="QWE123#"
              className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm transform translate-y-0.5"
            />

            {/* Toggle show password */}
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <IoEyeOff className="text-gray-400 text-2xl" />
              ) : (
                <IoEye className="text-gray-400 text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-4">
            <input
                type="checkbox"
                id="terms"
                className="mt-1 accent-[#337FFF] w-4 h-4"
            />

            <label for="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-[#337FFF] hover:underline">
                    Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-[#337FFF] hover:underline">
                    Privacy Policy
                </Link>
            </label>
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
          Already have an account?{" "}
          <Link to={"/sign-in"} className="text-[#337FFF] cursor-pointer transition-colors hover:text-[#265FCC]">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}
