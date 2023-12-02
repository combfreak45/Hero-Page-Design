import React, { useState } from 'react'

const App = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex flex-col bg-[#fef9f6] w-full ">
      <div className="flex flex-row p-3 text-lg border border-black justify-between text-md font-bold">
        <div className="p-4">
          <button>Milton</button>
        </div>
        <div className="flex flex-row gap-[3rem] text-[#6b6b78] hidden lg:flex">
          <button className="hover:underline">Features</button>
          <button className="hover:underline">Testimonials</button>
          <button className="hover:underline">Pricing</button>
          <button className="hover:underline">FAQ</button>
          <button className="hover:underline">Blog</button>
        </div>
        <div className="flex lg:hidden">
          {/* Burger menu for small screens */}
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            ☰
          </button>
        </div>
        <div
          className={`flex flex-col gap-2 lg:flex-row ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <button className="hover:underline">Features</button>
          <button className="hover:underline">Testimonials</button>
          <button className="hover:underline">Pricing</button>
          <button className="hover:underline">FAQ</button>
          <button className="hover:underline">Blog</button>
        </div>
        <div className="flex flex-row gap-1 hidden lg:flex">
          <button className="border rounded-xl p-2 bg-[#f1f2f4] m-2 hover:scale-105 ransition-all duration-500">
            Login
          </button>
          <button className="border rounded-xl p-2 bg-black text-white m-2 hover:scale-105 ransition-all duration-500">
            Get Started
          </button>
        </div>
      </div>

      <div className="pt-[4rem]  px-[10rem] lg:px-[14rem] flex flex-col items-center font-semibold">
        <div className="border rounded-3xl p-2 bg-[#f1f2f4] text-sm lg:text-lg">
          An other way to manage time️
        </div>
        {/* <div className="text-4xl lg:text-8xl font-bold"></div> */}
        <div className="text-4xl lg:text-8xl font-bold pb-10  text-center">
          Your new favorite calendar 🗓️ app
        </div>
        {/* <div className="text-base lg:text-xl">
          Here you should explain how cool your app is. Remember,
        </div> */}
        <div className="text-base lg:text-2xl  text-center">
          Here you should explain how cool your app is.Remember,focus on the
          benefits for your users, not on the features.
        </div>
        <div className="mt-8 border rounded-xl p-4 px-8 bg-black text-white hover:scale-110 transition-all duration-500">
          <button>Get started, its free</button>
        </div>
        <div className="text-xs lg:text-sm font-light">
          Free 14 days trials, no credit card needed
        </div>
      </div>
    </div>
  );
}

export default App
