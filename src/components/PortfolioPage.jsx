import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import text from '../data/text';
import Badge from '../components/Badge';

const PortfolioPage = () => {
  return (

    <div className="min-h-screen bg-[#eeeeee] p-8 dark:bg-[#1a1a1d]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center md:mt-20 md:mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-white">Portfolio</h1>
        </div>
        <div className="mt-5 md:mt-0">
          <h2 className="text-md md:text-xl tracking-tight text-gray-600 dark:text-gray-300 text-center">{text.projectstext}</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-5 mt-5 md:mt-12 mb-16">
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`}>
              <div key={index} className="flex items-center bg-neutral-200 border-2 border-neutral-300 dark:border-neutral-700 rounded-lg transition duration-300 hover:scale-[1.02] dark:bg-neutral-800 p-6">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-neutral-400 dark:bg-neutral-700 flex-shrink-0 rounded-full flex items-center justify-center">
                  <img src={project.techimg} alt={`${project.name} icon`} className="w-12 h-12 md:w-16 md:h-16 rounded-full "></img>
                </div>
                <div className="ml-4">
                  <h2 className="text-md md:text-2xl font-semibold tracking-tight dark:text-white">{project.name}</h2>
                  <p className="mb-1 dark:text-white">{project.projname}</p>
                  <div className="md:block hidden">
                    <Badge>{project.language}</Badge>
                    <Badge>{project.extra}</Badge>
                    <Badge>{project.ide}</Badge>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

  );
}

export default PortfolioPage;

