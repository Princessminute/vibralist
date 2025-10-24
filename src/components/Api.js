// components/Api.js
import { useEffect } from "react";

const Api = ({ onLoad }) => {
  useEffect(() => {
    fetch("/data/songs.json")
      .then((res) => res.json())
      .then((data) => onLoad(data))
      .catch((err) => console.error("Error loading songs:", err));
  }, [onLoad]);

  return null; // No renderiza nada
};

export default Api;
