import React, { useState } from "react";
import NavBar from "../Adds/NavBar";
import { Search } from "react-bootstrap-icons";
import Attendance from "../Adds/Attendance";
import axios from "axios";
import background from "../assets/1.jpg";
const ViewAttendance = () => {
  const [roll, setRoll] = useState("");
  const [courses, setCourses] = useState([]);
  
  const getAttendance = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/bootcamp/studentInfo/${roll}`);
        const arr = response.data.data.courses;
        console.log(arr);
        setCourses(arr);
      } catch (error) {
        console.error('Error:', error);
        
      }
  };
  return (
    <div>
      <NavBar />
      <div className="ml-96 mb-4 mt-[20vh] flex items-center">
        <input onChange={(e)=>{setRoll(e.target.value)}}
          className="bg-blue-200 border rounded-md text-white font-bold text-lg hover:bg-gray-700 w-1/5 mr-3 ml-14 py-2"
        />

        <button
          className="border-2 rounded-lg border-blue-300 border-solid w-1/6 py-2 hover:bg-blue-300"
          onClick={getAttendance}
        >
          Search
        </button>
      </div>
      {courses.length > 0 ? (
        
        <Attendance data={courses}/>
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default ViewAttendance;
