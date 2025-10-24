import React, { useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import Api from "./components/Api";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Heart, Music2, Smile, Frown, Trash2, Edit2 } from "lucide-react";


const renderEmocion = (emocion) => {
  switch (emocion) {
    case "feliz":
      return <Smile color="#FFBCBC" size={22} />;
    case "tranquilo":
      return <Music2 color="#B5EAEA" size={22} />;
    case "triste":
      return <Frown color="#F38BA0" size={22} />;
    default:
      return <Heart color="#EDF6E5" size={22} />;
  }
};

function App() {
  const [songs, setSongs] = useState([]);

  const handleApiLoad = (data) => setSongs(data);
  const addSong = (song) => setSongs([...songs, song]);
  const removeSong = (index) => setSongs(songs.filter((_, i) => i !== index));

  const editSong = (index) => {
    const songToEdit = songs[index];
    const newTitulo = prompt("Nuevo título:", songToEdit.titulo);
    const newArtista = prompt("Nuevo artista:", songToEdit.artista);
    const newEmocion = prompt("Nueva emoción (feliz, tranquilo, triste):", songToEdit.emocion);

    if (newTitulo && newArtista && newEmocion) {
      const updated = [...songs];
      updated[index] = { ...updated[index], titulo: newTitulo, artista: newArtista, emocion: newEmocion };
      setSongs(updated);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/lista"
          element={
            <div className="App">
              <h1 className="titulo">
                VibraList <Heart color="#F38BA0" size={28} style={{ verticalAlign: "middle" }} />
              </h1>
              <Form handleSubmit={addSong} />
              <Api onLoad={handleApiLoad} />
              <div className="table-container">
                <table className="song-table">
                  <thead>
                    <tr>
                      <th>Portada</th>
                      <th>Título</th>
                      <th>Artista</th>
                      <th>Emoción</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {songs.length === 0 && (
                      <tr>
                        <td colSpan="5" className="empty">Cargando canciones...</td>
                      </tr>
                    )}
                    {songs.map((song, index) => (
                      <tr key={index}>
                        <td><img src={song.portada} alt={song.titulo} className="album-cover" /></td>
                        <td>{song.titulo}</td>
                        <td>{song.artista}</td>
                        <td>{renderEmocion(song.emocion)}</td>
                        <td>
                          <button className="btn-edit" onClick={() => editSong(index)}>
                            <Edit2 size={18} />
                          </button>
                          <button className="btn-delete" onClick={() => removeSong(index)}>
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
