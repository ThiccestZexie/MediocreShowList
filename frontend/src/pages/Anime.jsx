import { useState, useEffect } from "react";
import { getTopAnime, searchAnime } from "../services/jikan/jikan";
import "../css/Home.css";
import ShowCard from "../components/ShowCard";

function Anime() {
  const [searchQuery, setSearchQuery] = useState(""); //Default value in (),
  const [anime, setAnime] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadTopAnime = async (pageNum) => {
    try {
      setLoading(true);
      const topAnimes = await getTopAnime(pageNum);
      // Append new results to existing anime state
      setAnime((prev) => [...prev, ...topAnimes]);
    } catch (err) {
      console.log(err);
      setError("Failed to load anime...");
    } finally {
      setLoading(false);
    }
  };

  // Load initial anime and new pages when page number increases
  useEffect(() => {
    loadTopAnime(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        {anime.map((item, index) => (
          <ShowCard key={`${item.id}-${index}`} show={item} />
        ))}
      </div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Anime;
