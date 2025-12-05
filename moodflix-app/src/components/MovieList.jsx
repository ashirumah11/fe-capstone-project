// src/components/MovieList.jsx
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        No movies available for this mood yet.
      </p>
    );
  }

  return (
    <div
      style={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
