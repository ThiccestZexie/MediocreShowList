import "../css/Favorites.css";
import { useShowContext } from "../contexts/ShowConext";
import ShowCard from "../components/ShowCard";

function Favorites() {
  const { favorites } = useShowContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites :D</h2>
        <div className="movies-grid">
          {favorites.map((show) => (
            //show.title.toLowerCase().startsWith(searchQuery) &&
            <ShowCard show={show} key={show.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty ">
      <h2>No Favorite Shows Yet</h2>
      <p>Add them and they'll appear there :D</p>
    </div>
  );
}

export default Favorites;
