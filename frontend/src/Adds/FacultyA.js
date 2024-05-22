import React, { useEffect, useState } from "react";
import axios from "axios";
const FacultyA = ({ data, course }) => {
  const [Roll, setRoll] = useState("");
  
 
  const saveChange = async () => {
     
    console.log(Roll);
    console.log(course);
    try {
      const response = await axios.put(
        'http://localhost:5000/api/v1/bootcamp/attendance',
        {
          rollnumber: Roll,
          courseId: course
        },
      );
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error);
    } 
  }
  

  
  
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 ml-32 mr-32">
        <table className="w-full text-2xl text-left rtl:text-right text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover">
          <thead className="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4 text-center">
                Name
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                Roll No
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                Attendance
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                Add Attendance
              </th>
            </tr>
          </thead>
          <tbody >
            {data.map((item,index) => (
              <tr
                key={index}
                className="text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-2xl px-8 py-4 text-center "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.rollnumber}</td>
                <td className="px-6 py-4">{item.attendance.length}/50</td>
                <td className="px-6 py-4">
                  <button onClick={(e)=>setRoll(item.rollnumber)}  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      +1
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
        <button className=" border-2 mt-6 rounded-md border-blue-500 border-solid w-1/6 hover:bg-blue-500"  onClick={saveChange} >
        Save
      </button>
      </div>
    </div>
  );
};

export default FacultyA;
