import React from 'react'

const App = () => {
  return (
    <div className=" flex flex-col bg-[#fef9f6] ">
      <div className="flex flex-row p-3 text-lg border border-black justify-between text-md font-bold">
        <div className="p-4">
          <button>Milton</button>
        </div>
        <div className="flex flex-row gap-[3rem] text-[#6b6b78]  ">
          <button className="hover:underline">Features</button>
          <button className="hover:underline">Testimonials</button>
          <button className="hover:underline">Pricing</button>
          <button className="hover:underline">FAQ</button>
          <button className="hover:underline">Blog</button>
        </div>
        <div className="flex flex-row gap-1">
          <button className="border rounded-xl p-2 bg-[#f1f2f4] m-2 hover:scale-105 ransition-all duration-500">
            Login
          </button>
          <button className="border rounded-xl p-2 bg-black text-white m-2 hover:scale-105 ransition-all duration-500">
            Get Started
          </button>
        </div>
      </div>
      <div className="mt-[4rem] flex flex-col items-center font-semibold">
        <div className="border rounded-3xl p-2 bg-[#f1f2f4]">
          An other way to manage time️
        </div>
        <div className="text-8xl font-bold">Your new favorite</div>
        <div className="text-8xl font-bold pb-10">calendar 🗓️ app</div>
        <div className="text-xl">
          Here you should explain how cool your app is.Remember,
        </div>
        <div className="text-xl">
          focus on the benefits for your users, not on the features.
        </div>
        <div className="mt-8 border rounded-xl p-4 bg-black text-white hover:scale-110 transition-all duration-500">
          <button>Get started,its free</button>
        </div>
      </div>
    </div>
  );
}

export default App
