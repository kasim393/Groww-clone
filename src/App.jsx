import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Ai from "./pages/ai/Ai";
import Home from "./pages/home/Home";
import MachineLearning from "./pages/machine-learning/MachineLearning";
import Rendering from "./pages/rendering/Rendering";
import VideoTranscoding from "./pages/video-transcoding/VideoTranscoding";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/rendering" element={<Rendering />} />
          <Route path="/video-transcoding" element={<VideoTranscoding />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
