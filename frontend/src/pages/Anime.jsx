import AnimeCard from "../components/AnimeCard";
import { useState, useEffect } from "react";
import { getTopAnime } from "../services/jikan/jikan";
import "../css/Home.css";

function Anime() {
  const [anime, setAnime] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTopAnime = async () => {
      try {
        const topAnimes = await getTopAnime();
        setAnime(topAnimes);
      } catch (err) {
        console.log(err);
        setError("Failed to load anime...");
      } finally {
        setLoading(false);
      }
    };

    loadTopAnime();
  }, []);

  return (
    <div className="home">
      <h1>Top Anime</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="movies-grid">
        {anime.map((anime) => (
          <AnimeCard key={anime.url} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default Anime;
