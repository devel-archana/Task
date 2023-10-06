import "./App.css";
import Header from "./Component/Header/Header";
import { Routes, Route  } from "react-router-dom";
import Home from "./Component/Home/Home";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import OtpForm from "./Component/ OtpForm/OtpForm";
import Dashboard from "./Component/Dashboard/Dashboard";
import AddTrain from "./Component/AddTrain/AddTrain";
import TrainTable from "./Component/TrainTable/TrainTable";
import Footer from "./Component/Footer/Footer";
import Pagenotfound from "./Component/Pagenotfound/Pagenotfound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/OtpForm" element={<OtpForm />} />
        <Route path="/swal" element={<sweetalert2 />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddTrain" element={<AddTrain />} />
        <Route path="/TrainTable" element={<TrainTable />} />
        <Route path="*" element={<Pagenotfound />} />/
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
