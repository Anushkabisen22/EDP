import React from "react";
import background from '../assets/SIGNUP IMAGE.jpg';
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin');
  }
  
  return (
    <div>

      <div className="h-screen overflow-hidden"> 
        <img src={background} alt="Background" className="w-full h-full object-cover fixed top-0 left-0 z-0" />
        
        <div className="absolute top-0 left-0 flex flex-col justify-center h-full ml-4 z-10" style={{ marginLeft: 'calc(25vh + 200px)' }}>
          
        
          <button onClick={handleClick} type="button" className="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-5xl px-8 py-4 text-center me-2 mb-8">Student</button>
          <button onClick={handleClick} type="button" className="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-5xl px-8 py-4 text-center me-2 mb-8">Professor</button>
          <button onClick={handleClick} type="button" className="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-5xl px-8 py-4 text-center me-2 mb-8">Admin</button>
          
        </div>
        
      </div>  
    
    </div>
  );
};

export default Signup;
