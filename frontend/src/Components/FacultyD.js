import React from "react";
import NavBar from "../Adds/NavBar";
import FacultyA from "../Adds/FacultyA";
import { useState, useEffect } from "react";
import axios from "axios";
const FacultyD = () => {
  const [courses, setCourses] = useState([]);
  const [student, setStudent] = useState([]);
  const [id, setId] = useState("");
  let inputProps;
  const handleSelectChange = (event) => {
    setId(event.target.value);
  };
  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/bootcamp/course/${id}`
      );
      setStudent(response.data.data);
      
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/course");
        setCourses(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <div className=" ml-96 mt-[20vh] flex items-center">
        <label
          htmlFor="large"
          className="block mr-3 text-base font-medium text-gray-900 dark:text-white"
        >
          Select Course
        </label>
        <select
          onChange={(e)=>setId(e.target.value)}
          id="large"
          className="block mr-3 px-4 py-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {courses.map((item, index) => (
            <option value={item._id} key={index}>
              {item.courseName}{" "}
            </option>
          ))}
        </select>
        <button className="border-2 rounded-lg border-blue-300 border-solid w-1/6 hover:bg-blue-300" onClick={fetchStudents}>
        Search
      </button>
      </div>
      
      {student.length > 0 ? (
        
        <FacultyA data={student} course={id} />
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default FacultyD;
