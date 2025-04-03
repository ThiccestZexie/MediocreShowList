import { createContext, useState, useContext, useEffect } from "react";

const ShowContext = createContext();

export const useShowContext = () => useContext(ShowContext);

export const ShowProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);
  // Only runs when we set favorites i think
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // One way to add, remove and check favs

  const addToFavorites = (show) => {
    setFavorites((prev) => [...prev, show]);
  };

  const removeFromFavorites = (showId) => {
    setFavorites((prev) => prev.filter((show) => show.id !== showId));
  };

  const isFavorite = (showId) => {
    return favorites.some((show) => show.id === showId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return <ShowContext.Provider value={value}> {children}</ShowContext.Provider>;
};
