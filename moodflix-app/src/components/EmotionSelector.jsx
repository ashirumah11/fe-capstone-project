import { useState, useEffect } from "react";
import { emotions } from "../data/emotions";
import { Home, Menu, X } from "lucide-react";
import { movies } from "../data/movies";
import MovieList from "./MovieList";


export default function EmotionSelector({ onSelect }) {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
    if (onSelect) onSelect(id);
  };

  const emotionColors = {
    bored: "#f80eaaff",
    happy: "orange",
    sad: "#0f6dc5ff",
    stressed: "#ff6b6b",
    motivated: "#4cd964",
  };
  const emotionMessages = {
  bored: "Great choice! Scroll down to see perfect movies for when you're feeling bored.",
  happy: "Awesome! Check out movies that match your happy mood.",
  sad: "We got you. Discover movies to lift your spirits.",
  stressed: "Take a break! These movies will help you relax.",
  motivated: "Feeling motivated? Here are movies to fuel your energy!",
};


  return (
    <div style={{ width: "100%" }}>

      {/* ---------------- NAVBAR ---------------- */}
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between", // ⭐ UPDATED
          alignItems: "center",
          padding: "14px 20px", // ⭐ UPDATED → added more spacing from walls
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          background: "#ffffff",
          zIndex: 20,
        }}
      >
        {/* ⭐ LEFT — LOGO NOW ON THE LEFT */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
             src="./images/mod_1.jpg"                   // your imported image
             alt="Moodflix Logo"           // accessibility
             style={{
             width: "50px",              // adjust size as needed
             height: "50px",
             objectFit: "contain",       // keeps aspect ratio
             borderRadius: "6px",        // optional if you want rounded corners
                }}
          />

          <h1 style={{ fontSize: "22px", fontWeight: "bold" }}>Moodflix</h1>
        </div>

        {/* ⭐ RIGHT — HOME BUTTON (DESKTOP) */}
        {!isMobile && (
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "#333",
              fontSize: "16px",
              padding: "8px 16px", // ⭐ UPDATED → more padding from edges
              borderRadius: "6px",
              backgroundColor: "#f7f7f7",
              marginRight: "50px", // ⭐ UPDATED → spacing from wall
            }}
          >
            <Home size={20} />
            Home
          </a>
        )}

        {/* ⭐ RIGHT — HAMBURGER (MOBILE ONLY) */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              cursor: "pointer",
              padding: "6px 10px", // ⭐ UPDATED → added padding so it’s not hugging the wall
              marginRight: "6px", // ⭐ UPDATED → spacing from screen edge
              borderRadius: "6px",
              backgroundColor: "#f7f7f7", // ⭐ UPDATED → gives it a button feel
            }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </div>
        )}
      </nav>

      {/* ---------------- MOBILE DROPDOWN ---------------- */}
      {menuOpen && isMobile && (
        <div
          style={{
            background: "#ffffff",
            borderBottom: "1px solid #eee",
            padding: "25px 30px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              fontSize: "16px",
              color: "#333",
              textDecoration: "none",
            }}
          >
            <Home size={20} />
            Home
          </a>
        </div>
      )}

      {/* ---------------- MAIN CONTENT (unchanged) ---------------- */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          How are you feeling today?
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "40px" }}>
          Choose your current mood to get personalized movie recommendations
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {emotions.map((emotion) => {
            const Icon = emotion.icon;
            const isSelected = selected === emotion.id;
            const isHovered = hovered === emotion.id;

            const mainColor = emotionColors[emotion.id];
            const cardColor = isSelected || isHovered ? mainColor : "#ffffff";
            const textColor = isSelected || isHovered ? "#ffffff" : "#000000";

            return (
              <div
                key={emotion.id}
                onClick={() => handleSelect(emotion.id)}
                onMouseEnter={() => setHovered(emotion.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  cursor: "pointer",
                  border: isSelected
                    ? `2px solid ${mainColor}`
                    : "2px solid #f0e5e5ff",
                  padding: "20px",
                  borderRadius: "8px",
                  minWidth: "140px",
                  textAlign: "center",
                  transition:
                    "background-color 0.25s, border 0.25s, transform 0.2s, color 0.2s",
                  backgroundColor: cardColor,
                  transform: isHovered ? "scale(1.03)" : "scale(1)",
                  color: textColor,
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: mainColor,
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <Icon size={30} color="white" />
                </div>

                <h3 style={{ margin: "10px 0 6px", color: textColor }}>
                  {emotion.title}
                </h3>

                <p style={{ fontSize: "14px", opacity: 0.9, color: textColor }}>
                  {emotion.description}
                </p>

               {isSelected && (
                    <div
                      style={{
                          position: "absolute",       // ⭐ position relative to card
                          top: "8px",
                          right: "8px",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",        // ⭐ makes it circular
                          backgroundColor: "#ffffff", // ⭐ can be white or another color
                          border: `2px solid ${mainColor}`, // ⭐ outline matches emotion color
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: "bold",
                          color: mainColor,
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)", // ⭐ subtle shadow
                          zIndex: 10, // ensures it sits on top
                      }}
                    >
                      ✓
                    </div>
                  )}

              </div>
            );
          })}
        </div>
        {/* ---------------- EMOTION MESSAGE ---------------- */}
              {selected && (
                <p
                  style={{
                  marginTop: "30px",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#333",
                  textAlign: "center",
                  maxWidth: "600px",
                  }}
                >
                  {emotionMessages[selected]}
                </p>
              )}
              
        <br />
        <br />
        

        {/* ---------------- SEARCH BAR ---------------- */}
              <div style={{ marginTop: "40px", width: "100%", maxWidth: "500px" }}>
                <input
                  type="text"
                  placeholder="Search for movies by title, genre or cast"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    outline: "none",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#7c3aed";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(124, 58, 237, 0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#ccc";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                  }}
                />
              </div>
              {/* MOVIE LIST SECTION */}
               <MovieList
                movies={movies.filter((m) => m.moods.includes(selected))}
                 />


      </div>
    </div>
  );
}
