//Component to display a movie/Comic/Cartoon
//TODO: seperate shows, movies, anime, manga and LNs
/**
 * Could possible seperate them by image type? So like hexagons, cicles, rectangles...
 */

import "../css/ShowCard.css";
import { useShowContext } from "../contexts/ShowConext";

function ShowCard({ show }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useShowContext(); // Can take any value from the provider
  const favorite = isFavorite(show.id);
  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(show.id);
    else addToFavorites(show);
  }
  return (
    <div className="show-card">
      <div className="show-poster">
        <img src={show.poster_path} alt={show.title} />
        <div className="show-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="show-info">
        <h3>{show.title}</h3>
        <p>{show.release_date}</p>
      </div>
    </div>
  );
}

export default ShowCard;
