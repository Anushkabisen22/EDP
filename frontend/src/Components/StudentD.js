import React, { useEffect, useState } from "react";
import NavBar from "../Adds/NavBar";
import { useLocation } from 'react-router-dom';
import axios from "axios";
const StudentD = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rollno = searchParams.get('rollno');
  const [Data, setData] = useState([]);
  const CourseMapping = {
    "662a39398887084785c9c929": "Graph Theory",
    "662a3a1c8887084785c9c931": "Digital Watermarking",
    "662a3a2f8887084785c9c933": "Compier Design",
    "662a3a4a8887084785c9c935": "Image Processing",
    "662a3a658887084785c9c937": "Biomedical",
    "6635fe69669afb696f8b8d2c": "Machine Learning"

};
  const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/bootcamp/studentInfo/${rollno}`);
        const arr = response.data.data.courses;
        console.log(arr);
        setData(arr);
      } catch (error) {
        console.error('Error:', error);
        
      }
    };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-32 ml-32 mr-32">
        <table className="w-full text-2xl text-left rtl:text-right text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover">
          <thead className="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4 text-center">
                Courses
              </th>

              <th scope="col" className="px-6 py-4 text-center">
                Attendance
              </th>
            </tr>
          </thead>
          <tbody>
            

            {Data.map((item, index) => (
               
              <tr
                key={index}
                className="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-2xl px-8 py-4 text-center "
              >
                <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {CourseMapping[item._id]}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.attendance.length}/40
              </th>
                
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentD;
