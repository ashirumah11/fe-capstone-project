import { useState } from "react";
import { emotions } from "../data/emotions";

export default function EmotionSelector({ onSelect }) {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
    if (onSelect) onSelect(id);
  };

  // 🎨 Emotion color palette
  const emotionColors = {
    bored: "#f80eaaff",     // purple
    happy: "orange",     // yellow
    sad: "#0f6dc5ff",       // blue
    stressed: "#ff6b6b",  // red
    motivated: "#4cd964", // green
  };

  return (
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

          // FULL background on hover or selected
          const cardColor = isSelected || isHovered ? mainColor : "#ffffff";

          // TEXT becomes white when hovered/selected
          const textColor = isSelected || isHovered ? "#ffffff" : "#000000";

          return (
            <div
              key={emotion.id}
              onClick={() => handleSelect(emotion.id)}
              onMouseEnter={() => setHovered(emotion.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                cursor: "pointer",
                border: isSelected ? `2px solid ${mainColor}` : "solid 2px #f0e5e5ff",
                padding: "20px",
                borderRadius: "8px",
                minWidth: "140px",
                textAlign: "center",
                transition: "background-color 0.25s, border 0.25s, transform 0.2s, color 0.2s",
                backgroundColor: cardColor,
                transform: isHovered ? "scale(1.03)" : "scale(1)",
                color: textColor, // 🌟 text color applied here
              }}
            >
              {/* Icon Box */}
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
                    marginTop: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#ffffff",
                  }}
                >
                  ✓
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
