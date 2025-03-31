//Component to display a movie/Comic/Cartoon
//TODO: seperate shows, movies, anime, manga and LNs
/**
 * Could possible seperate them by image type? So like hexagons, cicles, rectangles...
 */

import "../css/ShowCard.css";

function ShowCard({ show }) {
  function onFavoriteClick() {
    alert("mewoing rn");
  }

  return (
    <div className="show-card">
      <div className="show-poster">
        <img src={show.url} alt={show.title} />
        <div className="show-overlay">
          <button className="" favorite-btn onClick={onFavoriteClick}>
            ♡
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
