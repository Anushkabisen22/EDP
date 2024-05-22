import React from "react";

const EntryS = () => {
  return (
    <div >
      <div className='flex flex-col mt-20 ml-96 '>
        <div>
          <label className="mx-2 ">Semester</label>
            <select className="w-1/5 ml-5 border border-black rounded-md" name="Semester" id="Semester">
            <option></option>
            <option value="1">Sem 1</option>
            <option value="2">Sem 2</option>
            <option value="3">Sem 3</option>
            <option value="4">Sem 4</option>
            <option value="1">Sem 5</option>
            <option value="2">Sem 6</option>
            <option value="3">Sem 7</option>
            <option value="4">Sem 8</option>
          </select>
              </div>
          <div>
          <label className="mx-2">Courses</label>
            <select className="w-1/5 ml-8 my-3 border border-black rounded-md" name="Semester" id="Semester">
            <option></option>
            <option value="btech">BTech.</option>
            <option value="bdes">BDes.</option>
            <option value="mtech">MTech.</option>
            <option value="phd">PHd.</option>
          </select>
              </div>
              <div>
                  <label className="mx-2">
                      Fingerprint
                  </label>
                  <input className="w-1/5 m-2 border border-black rounded-md" type="file" id="fingerprint" name="fingerprint" accept="image/png,image/jpeg" />
              </div>
      </div>
    </div>
  );
};

export default EntryS;
