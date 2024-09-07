import React from 'react';
import { Link } from 'react-router-dom';
import text from '../data/text';

const LandingPage = () => {
  return (
    
    <div className="min-h-screen bg-[#eeeeee] p-8 dark:bg-[#1a1a1d]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:mt-20">
          <div class="text-center">
            <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight md:mb-4 dark:text-white">Välkommen!</h1>
            <div className="flex flex-col items-center">
              <img src="../Hampus.png" className="rounded-full border-4 border-neutral-500 dark:border-neutral-400 w-64 md:w-80 lg:w-96 mt-5 md:mt-10 mb-5 md:mb-10 transition duration-1000 hover:scale-[1.01]"></img>
            </div>
            <div className="hidden lg:block">
              <h2 class="text-md md:text-xl tracking-tight mb-8 lg:px-16 text-gray-600 dark:text-gray-300">{text.introtext}</h2>
            </div>
            <div className="lg:hidden">
              <h2 class="text-md md:text-xl tracking-tight mb-4 lg:px-16 text-gray-600 dark:text-gray-300">{text.introtexthalv1}</h2>
              <h2 class="text-md md:text-xl tracking-tight mb-8 lg:px-16 text-gray-600 dark:text-gray-300">{text.introtexthalv2}</h2>
            </div>
            <div class="flex flex-col space-y-4 md:flex-row md:justify-center md:space-y-0">
              <Link to="/portfolio" className="bg-neutral-100 font-extrabold tracking-tight border-4 rounded-lg border-y-stone-500 border-x-stone-400 hover:border-y-stone-800 hover:border-x-stone-700 
            hover:text-gray-600 dark:bg-neutral-800 dark:text-neutral-100 dark:border-y-stone-200 dark:border-x-stone-400 hover:dark:border-y-stone-100 hover:dark:border-x-stone-200 py-2 px-4 transition duration-700">Se portfolio</Link>
              <Link to="/info" className="bg-neutral-100 font-extrabold tracking-tight border-4 rounded-lg border-y-stone-400 border-x-stone-500 hover:border-y-stone-700 hover:border-x-stone-800 
            hover:text-gray-600 dark:bg-neutral-800 dark:text-neutral-100 dark:border-y-stone-400 dark:border-x-stone-200 hover:dark:border-y-stone-200 hover:dark:border-x-stone-100 py-2 px-4 md:ms-4 transition duration-700">Mer om mig</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default LandingPage;
