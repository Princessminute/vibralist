// components/Form.js
import React, { useState } from "react";
import { Smile, Frown, Music2 } from "lucide-react";
import "../App.scss";

const moodOptions = [
  { label: "Feliz", icon: "feliz" },
  { label: "Tranquilo", icon: "tranquilo" },
  { label: "Triste", icon: "triste" },
];

function Form({ handleSubmit }) {
  const [formData, setFormData] = useState({
    titulo: "",
    artista: "",
    portada: "",
    emocion: "feliz",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.titulo || !formData.artista || !formData.portada) return;
    handleSubmit(formData);
    setFormData({ titulo: "", artista: "", portada: "", emocion: "feliz" });
  };

  return (
    <form className="song-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="titulo"
        placeholder="Título de la canción"
        value={formData.titulo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="artista"
        placeholder="Artista"
        value={formData.artista}
        onChange={handleChange}
      />
      <input
        type="text"
        name="portada"
        placeholder="URL de portada"
        value={formData.portada}
        onChange={handleChange}
      />
      <select name="emocion" value={formData.emocion} onChange={handleChange}>
        {moodOptions.map((opt) => (
          <option key={opt.label} value={opt.icon}>
            {opt.label}
          </option>
        ))}
      </select>
      <button type="submit">Agregar 🎶</button>
    </form>
  );
}

export default Form;
