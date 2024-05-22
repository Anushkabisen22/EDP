import React from "react";
import NavBar from "./NavBar";
const Attendance = ({ data }) => {
  console.log(data);
  const CourseMapping = {
    "662a39398887084785c9c929": "Graph Theory",
    "662a3a1c8887084785c9c931": "Digital Watermarking",
    "662a3a2f8887084785c9c933": "Compier Design",
    "662a3a4a8887084785c9c935": "Image Processing",
    "662a3a658887084785c9c937": "Biomedical",
    "6635fe69669afb696f8b8d2c": "Machine Learning"

};
  return (
    <div className="h-screen overflow-hidden">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-32 mr-32">
        <table class="w-full text-2xl text-left rtl:text-right text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover">
          <thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-4 text-center">
                Courses
              </th>
              <th scope="col" class="px-6 py-4 text-center">
                Attendance
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
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

export default Attendance;
