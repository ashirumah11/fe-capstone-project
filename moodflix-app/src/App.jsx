import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import EmotionSelector from "./components/EmotionSelector";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/emotion-selector" element={<EmotionSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
