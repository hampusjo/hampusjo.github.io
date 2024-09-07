import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import Badge from '../components/Badge';
import { MdKeyboardArrowLeft } from "react-icons/md";

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);

  const getImageClasses = () => {
    if (project.images.length === 1) {
      return "w-11/12 lg:w-4/6";
    } else if (project.images.length === 2) {
      return "w-11/12 lg:w-4/6";
    } else {
      return "w-11/12 lg:w-5/12";
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#eeeeee] p-8 dark:bg-[#1a1a1d]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mt-32 mb-14">
            <h1 className="text-4xl md:text-6xl text-center font-extrabold tracking-tight mb-4 dark:text-white">Projektet hittades inte...</h1>
          </div>
        </div>
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-[#eeeeee] p-8 dark:bg-[#1a1a1d]">
      <div className="container mx-auto">
        <Link to="/portfolio"><MdKeyboardArrowLeft className="dark:text-white text-5xl font-semibold hover:text-slate-500 dark:hover:text-slate-400 transition-colors duration-0 mt-10 hidden lg:block" /></Link>
        <div className="flex flex-col items-center justify-center md:mt-5 mb-16">
          <h1 className="text-4xl md:text-6xl text-center font-extrabold tracking-tight mb-4 md:mb-6 dark:text-white">{project.name}</h1>
          <div className="flex">
            <Badge>{project.language}</Badge>
            <Badge>{project.extra}</Badge>
            <Badge>{project.ide}</Badge>
          </div>
          <div className="bg-neutral-200 border-2 border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 rounded-2xl shadow mt-5 md:mt-14">
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 tracking-tight text-gray-800 dark:text-gray-100">{project.projname}</h2>
              <p className="text-md md:text-lg tracking-tighter md:tracking-tight text-gray-600 dark:text-gray-300">{project.descriptionhalv1}</p>
              <p className="text-md md:text-lg tracking-tighter md:tracking-tight text-gray-600 dark:text-gray-300 mt-3">{project.descriptionhalv2}</p>
            </div>
            <div className="flex flex-wrap justify-center mt-2 md:mt-6 mb-10">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className={`${getImageClasses()} mb-8 mx-4 shadow-md rounded transition-transform transform duration-500 hover:scale-[1.005] cursor-pointer`}
                  onClick={() => openModal(image)}
                ></img>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-30" onClick={closeModal}>
          <div className="relative transform transition-transform duration-300 ease-out scale-0 opacity-0" style={{ animation: "fadeIn 0.3s forwards, scaleUp 0.3s forwards" }}>
            <img src={selectedImage} alt="Enlarged project" className="max-w-full max-h-full rounded"></img>
          </div>
        </div>
      )}
    </div>
    
  );
}

export default ProjectPage;