import React from "react";

export default function LandingPage({ onGetStarted }) {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div>
          <h1>MoodFlix</h1>
          <p>Movies That Match Your Mood</p>
          <h2>Discover Films Based on How You Feel</h2>
          <p>
            No more endless scrolling. Tell us your emotion, and we’ll recommend
            the perfect movie to match your mood.
          </p>
          <button onClick={onGetStarted}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2>Features</h2>
        <div>
          <div>
            <h3>Emotion-Powered</h3>
            <p>Choose from moods: Bored, Happy, Stressed, Sad, Motivated</p>
          </div>
          <div>
            <h3>Smart Recommendations</h3>
            <p>AI-selected movies tuned to your emotional state</p>
          </div>
          <div>
            <h3>Detailed Info</h3>
            <p>View cast, ratings, reviews, summaries & more</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section>
        <h2>How It Works</h2>
        <div>
          <div>
            <h3>1. Choose Your Mood</h3>
            <p>Tell us how you feel</p>
          </div>
          <div>
            <h3>2. Get Recommendations</h3>
            <p>AI-powered mood-matching movies</p>
          </div>
          <div>
            <h3>3. Start Watching</h3>
            <p>Enjoy your personalized film</p>
          </div>
        </div>
      </section>
    </div>
  );
}
