import ShowCard from "../components/ShowCard";
import { useState } from "react"; // HOOK
import "../css/Home.css";
/**
 * TODO: Implement fuzzy search
 * Contains the entire homepage components and more.
 */
function Home() {
  const [searchQuery, setSearchQuery] = useState(""); //Default value in (),
  // When the state changes the enire component is rerenderd
  const shows = [
    {
      id: 1,
      title: "Mushoku Tensei - Jobless Reincarnation vol 1",
      release_date: "2016",
    },
    {
      id: 2,
      title: "Mushoku Tensei - Jobless Reincarnation vol 2",
      release_date: "2016",
    },
    {
      id: 3,
      title: "Mushoku Tensei - Jobless Reincarnation vol 3",
      release_date: "2016",
    },
    {
      id: 4,
      title: "Mushoku Tensei - Jobless Reincarnation vol 4",
      release_date: "2016",
    },
    {
      id: 5,
      title: "Mushoku Tensei - Jobless Reincarnation vol 5",
      release_date: "2016",
    },
    {
      id: 6,
      title: "Mushoku Tensei - Jobless Reincarnation vol 6",
      release_date: "2016",
    },
    {
      id: 7,
      title: "Mushoku Tensei - Jobless Reincarnation vol 7",
      release_date: "2016",
    },
    {
      id: 8,
      title: "Mushoku Tensei - Jobless Reincarnation vol 8",
      release_date: "2016",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
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
      <div className="movies-grid">
        {shows.map((show) => (
          //show.title.toLowerCase().startsWith(searchQuery) &&
          <ShowCard show={show} key={show.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
