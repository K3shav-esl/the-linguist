// import logo from './logo.svg';
import Home from './pages/Home';
import "./styles/main.css"
import './App.css';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
