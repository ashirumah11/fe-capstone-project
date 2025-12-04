import { Film, Smile, Zap, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/emotion-selector"); // navigate to EmotionSelector page
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

    <section
      // Background image on the section itself
      style={{
        backgroundImage: "url('/images/hero_1.jpg ')", // adjust path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // fills viewport so centering works
        position: "relative",
      }}
    >
      {/* Purple overlay covering whole section */}
          <div
            style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(74, 6, 129, 0.35)", // light purple with transparency
            zIndex: 1,
            }}
          />


      {/* Content container: centered both vertically and horizontally */}
      <div
        style={{
          position: "relative", // sits above the overlay
          zIndex: 2,
          height: "100%", // important: allow flex centering to use full section height
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // horizontal centering
          justifyContent: "center", // vertical centering
          textAlign: "center",
          padding: "1.5rem",
          boxSizing: "border-box",
        }}
      >
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <br />
          
          <Film size={48} color="#fff" />
          <h1
            style={{
              color: "#ffffff",
              fontSize: 48,
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.05,
              textShadow: "0 4px 18px rgba(0,0,0,0.6)",
            }}
          >
            MoodFlix
          </h1>
        </div>

        {/* Sub-heading row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <Smile size={28} color="#ffcc00" />
          <p style={{ color: "#ffffff", fontSize: 18, margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}>
            Movies That Match Your Mood
          </p>
          <Zap size={28} color="#ffcc00" />
          <br />
        </div>
        <br />
        <br />
        <br />

        {/* Main heading */}
        <h2
          style={{
            color: "#ffffff",
            fontSize: 46,
            fontWeight: 600,
            margin: "0 0 18px 0",
            maxWidth: 900,
            lineHeight: 1.15,
            textShadow: "0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          Discover Films Based on{" "}
          <span style={{ color: "#f7f200ff" /* light purple */ }}>How You Feel</span>
        </h2>
        <br />
        <br />
        <br />

        {/* Paragraph */}
        <p
          style={{
            color: "#ffffff",
            opacity: 0.95,
            maxWidth: 700,
            margin: "0 0 28px 0",
            fontSize: 26,
            lineHeight: 1.6,
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}
        >
          No more endless scrolling. Tell us your emotion, and we’ll recommend the perfect movie to match your mood.
        </p>
        <br />
        <br />
        <br />
        <br />

        {/* CTA button */}
        <button
            onClick={handleGetStarted}
        
          style={{
            backgroundColor: "#e04098ff",
            color: "#fff",
            padding: "14px 34px",
            borderRadius: 9999,
            border: "none",
            fontSize: 30,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 6px 22px #e04098ff",
            transition: "transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.backgroundColor = "#e04098ff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.backgroundColor = "#e04098ff";
          }}
        >
          Get Started
        </button>
      </div>
    </section>

      {/* Features Section */}
<section
  style={{
    padding: "60px 20px",
    backgroundColor: "rgba(145, 46, 226, 0.88)", // light purple overlay
  }}
>
  
  <h2
    style={{
      textAlign: "center",
      fontSize: "36px",
      fontWeight: 700,
      marginBottom: "40px",
      color: "#ffffff",
    }}
  >
    Features
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    {[
      {
        title: "Emotion-Powered",
        description:
          "Choose from moods: Bored, Happy, Stressed, Sad, Motivated",
        icon: <Smile size={48} color="#0d3fe0ff" />,
      },
      {
        title: "Smart Recommendations",
        description: "AI-selected movies tuned to your emotional state",
        icon: <Zap size={48} color="#f59e0b" />,
      },
      {
        title: "Detailed Info",
        description: "View cast, ratings, reviews, summaries & more",
        icon: <Trophy size={48} color="#10b981" />,
      },
    ].map((feature, index) => (
      <div
        key={index}
        style={{
          border: "1px solid #ddddddff",
          borderRadius: "12px",
          padding: "24px",
          transition: "all 0.3s ease",
          cursor: "pointer",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 12px 24px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div style={{ marginBottom: "16px" }}>{feature.icon}</div>
        <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</section>
      {/* How It Works Section */}
       <section
  style={{
    position: "relative",
    padding: "60px 20px",
    backgroundColor: "rgba(74, 6, 129, 0.35)", // light purple overlay for the section
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: 36, fontWeight: 600, color: "#350707ff", marginBottom: 40 }}>
    How It Works
  </h2>

  <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
    {/* Step 1 */}
    <div
      style={{
        backgroundColor: "rgba(236, 179, 21, 0.85)",
        padding: 30,
        borderRadius: 20, 
        width: 250,
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(124, 58, 237, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
       {/* Rounded Number Circle */}
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "#5a3403ff",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 700,
          margin: "0 auto 12px auto",
        }}
      >
        1
      </div>
      <h3 style={{ fontSize: 22, color: "#rgba(236, 179, 21, 0.85)", marginBottom: 12 }}> Choose Your Mood</h3>
      <p style={{ color: "#ffffff", opacity: 0.9 }}>Tell us how you feel</p>
    </div>

    {/* Step 2 */}
    <div
      style={{
        backgroundColor: "rgba(98, 155, 247, 0.55)",
        padding: 30,
        borderRadius: 20,
        width: 250,
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(98, 155, 247, 0.55)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
       <div
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "#3b82f6",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 700,
          margin: "0 auto 12px auto",
        }}
      >
        2
      </div>
      <h3 style={{ fontSize: 22, color: "#122544ff", marginBottom: 12 }}> Get Recommendations</h3>
      <p style={{ color: "#ffffff", opacity: 0.9 }}>AI-powered mood-matching movies</p>
    </div>

    {/* Step 3 */}
    <div
      style={{
        backgroundColor: "rgba(16, 185, 129, 0.3)",
        padding: 30,
        borderRadius: 20,
        width: 250,
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(16, 185, 129, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "#10b981",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 700,
          margin: "0 auto 12px auto",
        }}
      >
        3
      </div>
      <h3 style={{ fontSize: 22, color: "#074933ff", marginBottom: 12 }}>Start Watching</h3>
      <p style={{ color: "#ffffff", opacity: 0.9 }}>Enjoy your personalized film</p>
    </div>
  </div>
</section>

    </div>
  );
}
