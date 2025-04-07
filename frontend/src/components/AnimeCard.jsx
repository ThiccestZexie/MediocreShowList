/**
 * Just like ShowCard but uses JIKAN to get the data instead.
 *
 */

import "../css/ShowCard.css";
import { useShowContext } from "../contexts/ShowConext";

function AnimeCard({ anime }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useShowContext(); // Can take any value from the provider
  const favorite = isFavorite(anime.id);
  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(anime.id);
    else addToFavorites(anime);
  }

  return (
    <div className="show-card">
      <div className="show-poster">
        <img src={anime.image} alt={anime.title} />
        <div className="show-overlay"></div>
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
        >
          ♥
        </button>
        <div className="show-info">
          <h3>{anime.title}</h3>
          <p>{anime.year}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
