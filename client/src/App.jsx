import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import HighSchool from "./pages/HighSchool";
import MiddleSchool from "./pages/MiddleSchool";
import Directory from "./pages/Directory";
import Calendar from "./pages/Calendar";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="mx-auto max-w-7xl">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/high-school" element={<HighSchool />} />  
      <Route path="/middle-school" element={<MiddleSchool />} />  
      <Route path="/directory" element={<Directory />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
