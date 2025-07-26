// import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experirnce";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import ErrorPage from "./components/common/ErrorPage";

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/home' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact' element={<Contact />} />

            {/* Redirect unknown routes */}
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </>
   );
}

export default App;
