import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';

import Home from "./components/pages/Home";
import Courses from "./components/pages/Courses";
import Programs from "./components/pages/Programs";
import Sailing from "./components/pages/Sailing";
import AboutUs from "./components/pages/AboutUs";
import Gallery from "./components/pages/Gallery";
import ContactUs from "./components/pages/ContactUs";
import OtherPrograms from "./components/pages/OtherPrograms";

const {BASE_URL} = import.meta.env;

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={BASE_URL} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="programs" element={<Programs />} />
          <Route path="sailing" element={<Sailing />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="otherPrograms" element={<OtherPrograms />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
