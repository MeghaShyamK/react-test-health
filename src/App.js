import { Route, Routes } from "react-router-dom";
import DoctorLogin from "./pages/DoctorLogin";
import HospitalLogin from "./pages/HospitalLogin";
import Login from "./pages/Login";
import UserLogin from "./pages/UserLogin";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user" element={<UserLogin/>}/>
        <Route path="/doctor" element={<DoctorLogin/>}/>
        <Route path="/hospital" element={<HospitalLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
