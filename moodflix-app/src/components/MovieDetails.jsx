import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch movie details from TMDB
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_KEY&append_to_response=credits`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "40px", fontSize: "18px" }}>
        Loading...
      </p>
    );

  if (!movie)
    return (
      <p style={{ textAlign: "center", marginTop: "40px", fontSize: "18px" }}>
        Movie not found.
      </p>
    );

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>

      {/* Poster + Info Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: "250px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />

        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
            {movie.title}
          </h1>

          <p style={{ color: "#555", marginBottom: "20px" }}>
            {movie.release_date}
          </p>

          {/* Description */}
          <h2 style={{ fontSize: "22px", marginBottom: "6px" }}>
            Description
          </h2>
          <p style={{ color: "#444", lineHeight: "1.6" }}>{movie.overview}</p>

          {/* Genres */}
          <div style={{ marginTop: "20px" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "6px" }}>Genres</h2>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {movie.genres?.map((g) => (
                <span
                  key={g.id}
                  style={{
                    padding: "6px 14px",
                    background: "#eee",
                    borderRadius: "20px",
                    fontSize: "14px",
                  }}
                >
                  {g.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "16px" }}>Cast</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "20px",
          }}
        >
          {movie.credits?.cast?.slice(0, 12).map((actor) => (
            <div key={actor.id} style={{ textAlign: "center" }}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={actor.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <p style={{ marginTop: "8px", fontWeight: "600" }}>
                {actor.name}
              </p>
              <p style={{ fontSize: "14px", color: "#666" }}>
                {actor.character}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Details */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
          Extra Details
        </h2>

        <ul style={{ paddingLeft: "20px", color: "#444", lineHeight: "1.8" }}>
          <li>Runtime: {movie.runtime} mins</li>
          <li>Language: {movie.original_language?.toUpperCase()}</li>
          <li>Rating: {movie.vote_average}</li>
          <li>Popularity: {movie.popularity}</li>
        </ul>
      </div>
    </div>
  );
}
