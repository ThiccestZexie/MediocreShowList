// src/components/FirestoreTest.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const FirestoreTest = () => {
  const [animeList, setAnimeList] = useState([]);

  const addAnime = async () => {
    try {
      await addDoc(collection(db, "Anime"), {
        id: "naruto-001",
        poster_url: "https://example.com/naruto.jpg",
        release_date: "2002-10-03",
        type: "shounen",
        url: "https://example.com/naruto",
        added_at: new Date().toISOString(),
      });
      alert("Anime added!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getAnime = async () => {
    const querySnapshot = await getDocs(collection(db, "Anime"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAnimeList(data);
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      <h2>Firestore Test</h2>
      <button onClick={addAnime}>Add Anime</button>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.id}>
            <strong>{anime.id}</strong> - {anime.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreTest;
