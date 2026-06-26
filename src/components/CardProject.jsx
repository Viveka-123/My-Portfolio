import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Image as ImageIcon } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full h-full flex">
      {/* Glow effect behind the card on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200"></div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[102%] hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] hover:border-indigo-500/50 w-full flex flex-col justify-between z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
    
        <div className="relative p-5 md:p-6 z-10 flex flex-col h-full justify-between w-full">
          <div>
            {/* Aspect ratio/sized image container */}
            <div className="relative overflow-hidden rounded-xl h-48 md:h-52 lg:h-56 w-full bg-white flex items-center justify-center border border-white/5 p-4">
              {Img ? (
                <img
                  src={Img}
                  alt={Title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="flex flex-col items-center justify-center text-slate-500 gap-2 absolute inset-0 bg-slate-900/60"
                style={{ display: Img ? 'none' : 'flex' }}
              >
                <ImageIcon className="w-10 h-10 text-slate-700" />
                <span className="text-xs font-light">No Image Available</span>
              </div>
            </div>
            
            {/* Text Information */}
            <div className="mt-4 space-y-3 flex flex-col items-center text-center">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-clip-text text-transparent group-hover:from-indigo-200 group-hover:to-pink-200 transition-colors duration-300">
                {Title}
              </h3>
              
              <p className="text-gray-300/90 text-xs md:text-sm leading-relaxed line-clamp-2">
                {Description}
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="pt-4 flex items-center justify-center gap-4 border-t border-white/5 mt-4 w-full">
            {ProjectLink ? (
              <a
                href={ProjectLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveDemo}
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-xs md:text-sm font-semibold"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-gray-500 text-xs md:text-sm">Demo Not Available</span>
            )}
            
            {id ? (
              <Link
                to={`/project/${id}`}
                onClick={handleDetails}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-indigo-500/10 text-white/90 hover:text-white hover:border-indigo-500/30 border border-transparent transition-all duration-300 hover:scale-105 active:scale-95 text-xs md:text-sm font-medium"
              >
                <span>Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="text-gray-500 text-xs md:text-sm">Details Not Available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;