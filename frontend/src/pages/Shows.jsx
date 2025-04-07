import ShowCard from "../components/ShowCard";
import { useEffect, useState } from "react"; // HOOK
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
/**
 * TODO: Implement fuzzy search
 * Contains the entire homepage components and more.
 */
function Home() {
  // When the state changes the enire component is rerenderd
  //const shows = getPopularMovies();

  const [searchQuery, setSearchQuery] = useState(""); //Default value in (),
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   const loadPopularMovies = async () => {
  //     try {
  //       const popularMovies = await getPopularMovies(page);
  //       setShows((prev) =>
  //         page === 1 ? popularMovies : [...prev, ...popularMovies]
  //       );
  //     } catch (err) {
  //       console.log(err);
  //       setError("Failed to load shows...");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadPopularMovies();
  // }, [page]);

  const loadPopularMovies = async (pageNum) => {
    try {
      setLoading(true);
      const popularMovies = await getPopularMovies(pageNum);
      // Append new results to existing shows state
      setShows((prev) => [...prev, ...popularMovies]);
    } catch (err) {
      console.log(err);
      setError("Failed to load shows...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPopularMovies(page);
  }, [page]);

  // Infinite scroll
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
    // Remove empty string search
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setShows(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }

    // setSearchQuery(""); Include if you want
  };
  return (
    <div className="home">
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

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {shows.map((item, index) => (
            //show.title.toLowerCase().startsWith(searchQuery) &&
            <ShowCard key={`${item.id}-${index}`} show={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
