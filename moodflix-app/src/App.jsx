import { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const [started, setStarted] = useState(false);

  const handleGetStarted = () => {
    setStarted(true);
  };

  return (
    <div className="min-h-screen">
      {!started && <LandingPage onGetStarted={handleGetStarted} />}
      {started && (
        <div className="flex items-center justify-center h-screen text-white bg-gray-900">
          <h1 className="text-3xl">Emotion Selector Coming Next...</h1>
        </div>
      )}
    </div>
  );
}

export default App;
