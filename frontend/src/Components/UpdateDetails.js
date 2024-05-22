import React from 'react'
import NavBar from './NavBar'
import { Search } from 'react-bootstrap-icons'
import EntryS from './EntryS'
const UpdateDetails = () => {
  return (
      <div>
          <NavBar />
          <div>
              <div className='flex justify-center'>
                  
                  <label className='mx-2 mt-5'>Name</label>
                  <input className='mt-5 border w-1/6 mb-5 h-1/4 rounded-lg border-blue-300 mx-4' type='text' name='password' ></input>
                  
                  
                  <label className='mt-5 mx-2'>Roll No.</label>
                  <input className='mt-5 border w-1/6 mb-5 h-1/4 rounded-lg border-blue-300 mx-4' type='text' name='password' ></input>
                  <button>
                      <Search className='hover:fill-blue-500' size={25}/>
                  </button>
              </div>
              <EntryS />
              <div className='flex justify-center' >
                  <button className='border border-black bg-black rounded-lg w-1/12 mx-2 my-4 text-white'>
                      Save
                  </button>
                  <button className='border border-black bg-black rounded-lg w-1/12 mx-2 my-4 text-white'>
                      Cancel
                  </button>
              </div>
              
          </div>
    </div>
  )
}

export default UpdateDetails