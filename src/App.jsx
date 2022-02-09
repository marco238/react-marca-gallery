import { useEffect, useState } from "react";
import { getImages } from "./services/GalleryService";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SliderWrapper from "./Components/SliderWrapper/SliderWrapper";
import Endview from "./Components/Endview/Endview";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [title, setTitle] = useState(null);
  const [bg, setBg] = useState(null);
  const [images, setImages] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    getImages()
      .then((data) => {
        data.multimedia.pop();
        data.multimedia.push({id: 'lastElement'})
        setTitle(data.titulo);
        setBg(data.multimedia[0].url);
        setImages(data.multimedia);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/slider" element={<SliderWrapper images={images} error={error} />}></Route>
        <Route path="/endview" element={<Endview />}></Route>
        <Route path="/" element={<Home title={title} bg={bg} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
