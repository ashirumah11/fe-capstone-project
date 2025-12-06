// src/components/MovieCard.jsx
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          width: "180px",
          borderRadius: "10px",
          overflow: "hidden",
          background: "#ffffff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          cursor: "pointer",
          transition: "transform 0.2s",
        }}
      >
        <img
          src={movie.poster}
          alt={movie.title}
          style={{ width: "100%", height: "240px", objectFit: "cover" }}
        />

        <div style={{ padding: "12px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "6px" }}>{movie.title}</h3>

          <p style={{ fontSize: "14px", color: "#777" }}>
            ⭐ {movie.rating}
          </p>
        </div>
      </div>
    </Link>
  );
}
