import { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const [started, setStarted] = useState(false);

  const handleGetStarted = () => {
    setStarted(true);
  };

  return (
    <div className="min-h-screen">
      {/* STEP 1: Show Landing Page */}
      {!started && <LandingPage onGetStarted={handleGetStarted} />}

      {/* STEP 2: After clicking "Get Started", show next screen */}
      {started && (
        <div className="flex items-center justify-center h-screen text-white bg-gray-900">
          <h1 className="text-3xl">Emotion Selector Coming Next...</h1>
        </div>
      )}
    </div>
  );
}

export default App;
