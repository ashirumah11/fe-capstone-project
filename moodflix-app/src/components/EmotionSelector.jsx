import { useState } from "react";
import { emotions } from "../data/emotions";

export default function EmotionSelector({ onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
    if (onSelect) onSelect(id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh", // full viewport height
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>How are you feeling today?</h2>
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Choose your current mood to get personalized movie recommendations
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {emotions.map((emotion) => {
          const Icon = emotion.icon;
          const isSelected = selected === emotion.id;

          return (
            <div
              key={emotion.id}
              onClick={() => handleSelect(emotion.id)}
              style={{
                cursor: "pointer",
                border: isSelected ? "2px solid black" : "1px solid gray",
                padding: "20px",
                borderRadius: "8px",
                minWidth: "120px",
                textAlign: "center",
              }}
            >
              <div>
                <Icon size={32} />
              </div>
              <h3>{emotion.title}</h3>
              <p>{emotion.description}</p>
              {isSelected && <div>✓</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
