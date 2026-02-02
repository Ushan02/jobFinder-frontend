import React from 'react';

const Sidebar = () => {
  const faculties = [
    { name: "Faculty of Agriculture", link: "https://www.agri.ruh.ac.lk/" },
    { name: "Faculty of Allied Health Sciences", link: "https://www.ahs.ruh.ac.lk/" },
    { name: "Faculty of Engineering", link: "https://www.eng.ruh.ac.lk/" },
    { name: "Faculty of Fisheries and Marine Sciences", link: "https://www.fmst.ruh.ac.lk/" },
    { name: "Faculty of Graduate Studies", link: "https://fgs.ruh.ac.lk/" },
    { name: "Faculty of Humanities & Social Sciences", link: "https://www.hss.ruh.ac.lk/" },
    { name: "Faculty of Management & Finance", link: "https://www.mgt.ruh.ac.lk/" },
    { name: "Faculty of Medicine", link: "https://www.medi.ruh.ac.lk/" },
    { name: "Faculty of Science", link: "https://www.sci.ruh.ac.lk/" },
    { name: "Faculty of Technology", link: "https://www.tec.ruh.ac.lk/" },
  ];

  return (
    <aside className="w-full md:w-1/4">
      
      {/* Container: Removed 'shadow-xl' */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
        
        {/* Header */}
        <h3 className="text-lg font-bold text-gray-800 mb-4 px-2">
          Our Faculties
        </h3>

        {/* List Items */}
        <div className="flex flex-col space-y-1">
          {faculties.map(f => (
            <a
              key={f.name}
              href={f.link}
              target="_blank"
              rel="noopener noreferrer"
              // Removed 'hover:shadow-sm'
              className="group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <span>{f.name}</span>
              
              {/* Arrow Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-blue-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;