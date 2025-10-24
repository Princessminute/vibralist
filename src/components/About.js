import { Heart, Music2, Smile } from "lucide-react";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">
        <Music2 className="icon" size={28} /> Acerca de <span className="brand">VibraList</span>
      </h2>

      <p className="about-text">
        <Smile className="icon-inline" size={20} /> VibraList es una aplicación que te permite
        guardar y clasificar tus canciones favoritas según tu estado de ánimo . 
        <br />
        <br />
        Fue creada con <strong>React</strong> como parte de las experiencias prácticas,
        combinando emoción, diseño y código con mucho{" "}
      </p>
      <div className="home-banner">
        <Heart className="pulse" size={40} color="hotpink" />
      </div>
    </div>
    
  );
}
