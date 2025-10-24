import { Music2, Heart, Smile } from "lucide-react";

export default function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">
        <Music2 className="icon" size={28} /> Bienvenida a <span className="brand">VibraList</span>
      </h2>

      <p className="home-text">
        <Smile className="icon-inline" size={20} /> Organiza tus canciones según cómo te sientes, 
        deja que la música acompañe cada emoción 
      </p>

      <div className="home-banner">
        <Heart className="pulse" size={40} color="hotpink" />
      </div>
    </div>
  );
}
