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

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setShows(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load shows...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
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
          {shows.map((show) => (
            //show.title.toLowerCase().startsWith(searchQuery) &&
            <ShowCard show={show} key={show.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
