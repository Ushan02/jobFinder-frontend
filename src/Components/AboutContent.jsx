import React from 'react';
import campusImg from '../assets/campus.png'; 

const AboutContent = () => {
  const aboutDetails = {
    title: "University of Ruhuna",
    heroImage: campusImg,
    history: `The University of Ruhuna (UOR) was established by a Special Presidential Decree on 1st September 1978 as Ruhuna University College. It was elevated to a fully-fledged national university on 1st February 1984.

Located in the scenic Southern province, the main campus at Wellamadama, Matara was designed by the world-renowned architect Geoffrey Bawa. It stands as the intellectual heartbeat of the South, currently serving thousands of students across ten faculties.`,
    vision: "To be the prime intellectual thrust of the nation.",
    mission: "To advance knowledge and skills through teaching, research, and services to serve the society."
  };

  return (
    <div className="flex-1">
      
      {/* Header with a modern gradient underline */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block relative">
          About The University
        
        </h2>
      </div>

      {/* Modern Hero Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 mb-10 rounded-3xl overflow-hidden shadow-xl group">
        <img
          src={aboutDetails.heroImage}
          alt="University of Ruhuna"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold p-6 sm:p-8 drop-shadow-lg">
            {aboutDetails.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* History Text - Clean and Readable */}
        <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
          {aboutDetails.history.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Vision & Mission - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* Vision Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
              {/* Eye Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 italic">"{aboutDetails.vision}"</p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 text-cyan-600">
              {/* Target Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 italic">"{aboutDetails.mission}"</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutContent;