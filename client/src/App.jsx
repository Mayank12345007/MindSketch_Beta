import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from './pages/Create'
import Saved from './pages/Saved'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
