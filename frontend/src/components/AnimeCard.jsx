/**
 * Just like ShowCard but uses JIKAN to get the data instead.
 *
 */

import "../css/ShowCard.css";
import { useShowContext } from "../contexts/ShowConext";

function AnimeCard({ anime }) {
  return (
    <div className="show-card">
      <div className="show-poster">
        <img src={anime.image} alt={anime.title} />
        <div className="show-overlay"></div>
        <div className="show-info">
          <h3>{anime.title}</h3>
          <p>{anime.year}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
