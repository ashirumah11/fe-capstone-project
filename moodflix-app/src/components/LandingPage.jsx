import { Film, Smile, Zap, Heart, Trophy } from 'lucide-react';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/hero.jpg" alt="Movie theater background" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
              <Film className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold">MoodFlix</h1>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Smile className="text-yellow-400 w-6 h-6" />
            <p className="text-purple-200 text-lg lg:text-xl">Movies That Match Your Mood</p>
            <Zap className="text-yellow-400 w-6 h-6" />
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 font-bold leading-tight">
            Discover Films Based on{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              How You Feel
            </span>
          </h2>
          <p className="text-purple-100 text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
            No more endless scrolling. Tell us your emotion, and we’ll recommend the perfect movie to match your mood.
          </p>
          <button
            onClick={onGetStarted}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                       text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 
                       shadow-lg hover:shadow-2xl inline-flex items-center gap-2"
          >
            <span className="text-lg">Get Started</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>
      {/* --------------------------- */}
{/* SECTION 2 — FEATURES LIST   */}
{/* --------------------------- */}
<section className="relative bg-white/5 backdrop-blur-lg border-t border-white/10 py-16 lg:py-24">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl lg:text-4xl text-center mb-12 font-semibold text-white">
      Features
    </h2>

    {/* Horizontal scroll container */}
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 py-4">

      {/* Feature 1 Card */}
      <div className="snap-start flex-shrink-0 w-80 p-6 rounded-2xl bg-white/10 border border-white/20 
                      hover:bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl mb-2 text-center">Emotion-Powered</h3>
        <p className="text-purple-200 text-center">
          Choose from moods: Bored, Happy, Stressed, Sad, Motivated
        </p>
      </div>

      {/* Feature 2 Card */}
      <div className="snap-start flex-shrink-0 w-80 p-6 rounded-2xl bg-white/10 border border-white/20 
                      hover:bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl mb-2 text-center">Smart Recommendations</h3>
        <p className="text-purple-200 text-center">
          AI-selected movies tuned to your emotional state
        </p>
      </div>

      {/* Feature 3 Card */}
      <div className="snap-start flex-shrink-0 w-80 p-6 rounded-2xl bg-white/10 border border-white/20 
                      hover:bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl mb-2 text-center">Detailed Info</h3>
        <p className="text-purple-200 text-center">
          View cast, ratings, reviews, summaries & more
        </p>
      </div>

    </div>
  </div>
</section>
{/* --------------------------- */}
{/* SECTION 3 — HOW IT WORKS    */}
{/* --------------------------- */}
<section className="relative container mx-auto px-4 py-16 lg:py-24">
  <h2 className="text-3xl lg:text-4xl text-center mb-12 font-semibold text-white">
    How It Works
  </h2>

  {/* Horizontal scroll container */}
  <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 py-4">

    {/* Step 1 Card */}
    <div className="snap-start flex-shrink-0 w-64 p-6 rounded-2xl bg-white/10 border border-white/20 
                    hover:bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        1
      </div>
      <h3 className="text-xl mb-2">Choose Your Mood</h3>
      <p className="text-purple-200">
        Tell us how you feel
      </p>
    </div>

    {/* Step 2 Card */}
    <div className="snap-start flex-shrink-0 w-64 p-6 rounded-2xl bg-white/10 border border-white/20 
                    hover:bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        2
      </div>
      <h3 className="text-xl mb-2">Get Recommendations</h3>
      <p className="text-purple-200">
        AI-powered mood-matching movies
      </p>
    </div>

    {/* Step 3 Card */}
    <div className="snap-start flex-shrink-0 w-64 p-6 rounded-2xl bg-white/10 border border-white/20 
                    hover:bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        3
      </div>
      <h3 className="text-xl mb-2">Start Watching</h3>
      <p className="text-purple-200">
        Enjoy your personalized film
      </p>
    </div>

  </div>
</section>



      {/* Features Section */}
      {/* Use horizontal card layout from previous code */}
      {/* How It Works Section */}
      {/* Use horizontal card layout from previous code */}
    </div>
  );
}
