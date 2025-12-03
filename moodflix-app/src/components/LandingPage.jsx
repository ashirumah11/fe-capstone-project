// src/components/LandingPage.jsx
import { Film, Heart, Sparkles, ArrowRight } from "lucide-react";


export default function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image Overlay */}
       <div className="absolute inset-0 opacity-30">
        <img
            src="/images/hero.jpg"
            alt="Movie theater background"
            className="w-full h-full object-cover"
        />
        </div>


        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                <Film className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h1 className="text-white text-4xl lg:text-5xl">MoodFlix</h1>
            </div>

            {/* Tagline */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <p className="text-purple-200 text-lg lg:text-xl">
                Movies That Match Your Mood
              </p>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>

            {/* Main Headline */}
            <h2 className="text-white text-4xl lg:text-6xl mb-6 leading-tight">
              Discover Films Based on{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                How You Feel
              </span>
            </h2>

            {/* Description */}
            <p className="text-purple-100 text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
              No more endless scrolling. Tell us your emotion, and we'll
              recommend the perfect movie to match or improve your mood.
              Psychology meets entertainment.
            </p>

            {/* CTA Button */}
            <button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl inline-flex items-center gap-2"
            >
              <span className="text-lg">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-white/5 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl mb-3">Emotion-Powered</h3>
              <p className="text-purple-200">
                Select from 5 moods: Bored, Happy, Stressed, Sad, or Motivated
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl mb-3">Smart Recommendations</h3>
              <p className="text-purple-200">
                Curated films tailored to enhance or complement your emotional
                state
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl mb-3">Detailed Info</h3>
              <p className="text-purple-200">
                Get full movie details, cast, ratings, and more to make informed
                choices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <h2 className="text-white text-3xl lg:text-4xl text-center mb-12">
          How It Works
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              1
            </div>
            <h3 className="text-white text-xl mb-2">Choose Your Mood</h3>
            <p className="text-purple-200">Select how you're feeling right now</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              2
            </div>
            <h3 className="text-white text-xl mb-2">Get Recommendations</h3>
            <p className="text-purple-200">
              See movies matched to your emotion
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              3
            </div>
            <h3 className="text-white text-xl mb-2">Start Watching</h3>
            <p className="text-purple-200">
              Enjoy the perfect film for your mood
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
