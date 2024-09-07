import React from 'react';
import { MdEmail, MdOutlineNumbers, MdPerson, MdOutlineLocationOn } from "react-icons/md";
import text from '../data/text';

const InfoPage = () => {
  return (

    <div className="min-h-screen bg-[#eeeeee] p-8 dark:bg-[#1a1a1d]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center md:mt-20 md:mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-white">Om mig</h1>
        </div>

        <div className="mt-5 md:mt-0 mb-5 md:mb-12 hidden lg:block">
          <h2 className="text-md md:text-xl text-gray-600 dark:text-gray-300 text-center tracking-tight">{text.introtext}</h2>
        </div>
        <div className="mt-5 md:mt-0 mb-5 md:mb-12 lg:hidden">
          <h2 className="text-md md:text-xl text-gray-600 dark:text-gray-300 text-center tracking-tight">{text.introtexthalv1}</h2>
          <h2 className="text-md md:text-xl mt-4 text-gray-600 dark:text-gray-300 text-center tracking-tight">{text.introtexthalv2}</h2>
        </div>

        <div className="space-y-4">
          <div className="md:flex md:space-x-4">
            <div className="p-4 bg-neutral-200 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 w-full dark:bg-neutral-800">
              <h2 className="text-xl md:text-3xl font-semibold dark:text-white">Kontaktuppgifter</h2>
              <p className="mt-2 flex flex-row text-gray-600 dark:text-gray-300 transition-colors duration-500"> <MdPerson className="mt-[0.21rem] mr-2 text-gray-600 dark:text-gray-300 transition-colors duration-0"/>Hampus Johansson</p>
              <p className="mt-1 flex flex-row text-gray-600 dark:text-gray-300 transition-colors duration-500"> <MdOutlineLocationOn className="mt-[0.21rem] mr-2 text-gray-600 dark:text-gray-300 transition-colors duration-0"/>Örebro, Sverige</p>
              <p className="mt-1 flex flex-row text-gray-600 dark:text-gray-300 transition-colors duration-500"> <MdEmail className="mt-[0.22rem] mr-2 text-gray-600 dark:text-gray-300 transition-colors duration-0"/><a className="transition-colors duration-0" href="mailto:johanssonhampus98@gmail.com">johanssonhampus98@gmail.com</a></p>
              <p className="mt-1 flex flex-row text-gray-600 dark:text-gray-300 transition-colors duration-500"> <MdOutlineNumbers className="mt-[0.21rem] mr-2 text-gray-600 dark:text-gray-300 transition-colors duration-0"/>076-185 90 69</p>
            </div>

            <div className="p-4 bg-neutral-200 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 w-full dark:bg-neutral-800 mt-4 md:mt-0">
              <h2 className="text-xl md:text-3xl font-semibold dark:text-white">Utbildning</h2>

              <h2 className="mt-2 text-lg md:text-2xl dark:text-white">Högskolenivå</h2>
              <p className="text-gray-600 dark:text-gray-300 tracking-tight">Systemvetenskapliga programmet - Örebro universitet, handelshögskolan.</p>
              <p className="text-gray-600 dark:text-gray-300 tracking-tight">Filosofie kandidatexamen i Informatik, 180 hp.</p>

              <h2 className="mt-2 text-lg md:text-2xl dark:text-white">Gymnasienivå</h2>
              <p className="text-gray-600 dark:text-gray-300 tracking-tight">Samhällsvetenskapsprogrammet - Karolinska gymnasiet.</p>
            </div>
          </div>

          <div className="p-4 bg-neutral-200 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800">
            <h2 className="text-xl md:text-3xl font-semibold dark:text-white">Kunskap och erfarenhet</h2>

            <h2 className="mt-2 text-lg md:text-2xl dark:text-white">Programmeringsspråk och ramverk</h2>
            <p className="text-gray-600 dark:text-gray-300">• Erfarenhet av C#, Java och Python.</p>
            <p className="text-gray-600 dark:text-gray-300">• HTML/CSS/JavaScript, React, Blazor. CSS-biblioteken Bootstrap och Tailwind.</p>
            <p className="text-gray-600 dark:text-gray-300">• Databashantering med SQL. Erfarenhet av LINQ-frågor.</p>

            <h2 className="mt-2 text-lg md:text-2xl dark:text-white">Utvecklingsmiljöer</h2>
            <p className="text-gray-600 dark:text-gray-300">• Microsoft Visual Studio, Microsoft Visual Studio Code.</p>
            <p className="text-gray-600 dark:text-gray-300">• Apache Netbeans.</p>
            <p className="text-gray-600 dark:text-gray-300">• SQL Server.</p>

            <h2 className="mt-2 text-lg md:text-2xl dark:text-white">Arbetssätt</h2>
            <p className="text-gray-600 dark:text-gray-300">• Erfarenhet av arbete med agila metoder, både Scrum och Extreme Programming (XP). Har använt verktygen Jira och Scrumwise.</p>
            <p className="text-gray-600 dark:text-gray-300">• Modellering med UML. Lucidchart.</p>

            <h2 className="mt-2 text-lg md:text-2xl dark:text-white">Versionshantering</h2>
            <p className="text-gray-600 dark:text-gray-300">Erfarenhet av Git.</p>

            <h2 className="mt-2 text-lg md:text-2xl dark:text-white">Bildbehandling och design</h2>
            <p className="text-gray-600 dark:text-gray-300">Photoshop, Paint.NET, Canva och Figma.</p>

            <h2 className="mt-2 text-lg md:text-2xl dark:text-white">Övrigt</h2>
            <p className="text-gray-600 dark:text-gray-300">Mycket god vana i Windows-Officepaketet.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default InfoPage;
