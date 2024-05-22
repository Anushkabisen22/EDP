// import DemoComponent from "./DemoComponent";
import Signup from "./Components/Signup"
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Entry from "./Components/Entry";
// import NavBar from "./Components/NavBar";
import StudentD from "./Components/StudentD";

// import UpdateDetails from "./Components/UpdateDetails";
import ViewAttendance from "./Components/ViewAttendance";
import Entry from "./Components/Entry";
import FacultyD from "./Components/FacultyD";
// import EntryS from "./Components/EntryS";
// import FaultyA from "./Components/FacultyA";
import Register from "./Components/Register";
function App() {
  return (
    // <div>
    //   <Entry />
    // </div>
    
    <Router>
      <Routes>
           <Route exact path="/" Component={Signup} />
           <Route exact path="/signin" Component={Entry} />
           <Route exact path="/adminD" Component={ViewAttendance} />
        <Route exact path="/studentD" Component={StudentD} />
        <Route exact path="/facultyD" Component={FacultyD} />
        <Route exact path="/Signup" Component={Register} />

      </Routes>
    </Router>
  
  );
}

export default App;
