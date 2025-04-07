import AnimeCard from "../components/AnimeCard";
import { useState, useEffect } from "react";
import { getTopAnime, searchAnime } from "../services/jikan/jikan";
import "../css/Home.css";

function Anime() {
  const [searchQuery, setSearchQuery] = useState(""); //Default value in (),
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

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchAnime(searchQuery);
      setAnime(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search anime...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <h1>Top Anime</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for what thy heart desires"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {anime.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default Anime;
