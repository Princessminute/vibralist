// components/Table.js
import React from "react";
import { Music, HeartCrack, Smile, Trash2 } from "lucide-react";
import "../App.scss";

// 🧱 Encabezado de la tabla
const TableHeader = () => (
  <thead>
    <tr>
      <th>Canción</th>
      <th>Estado de ánimo</th>
      <th>Acción</th>
    </tr>
  </thead>
);

// 🎶 Cuerpo de la tabla
const TableBody = ({ songData, removeSong }) => (
  <tbody>
    {songData.length > 0 ? (
      songData.map((song, index) => (
        <tr key={index}>
          <td>
            <Music size={18} color="#F38BA0" style={{ marginRight: "6px" }} />
            {song.name}
          </td>
          <td>{song.icon}</td>
          <td>
            <button onClick={() => removeSong(index)} className="btn-delete">
              <Trash2 size={18} />
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="3" className="empty">
          No hay canciones
        </td>
      </tr>
    )}
  </tbody>
);

// 🎼 Tabla completa
class Table extends React.Component {
  render() {
    const { songData, removeSong } = this.props;
    return (
      <table className="song-table">
        <TableHeader />
        <TableBody songData={songData} removeSong={removeSong} />
      </table>
    );
  }
}

export default Table;
