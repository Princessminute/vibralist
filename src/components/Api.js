// src/components/Api.js
import { useEffect } from "react";

const Api = ({ onLoad }) => {
  useEffect(() => {
    fetch("./data/songs.json") // Desde public/data/songs.json
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar las canciones");
        return res.json();
      })
      .then((data) => onLoad(data))
      .catch((err) => console.error(err));
  }, [onLoad]);

  return null; // Este componente no renderiza nada
};

export default Api;
