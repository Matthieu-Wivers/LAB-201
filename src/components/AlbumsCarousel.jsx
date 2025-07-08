import React, { useState } from "react";

const albums = [
  { id: 1, title: "My Love Is Cool", img: "./Images/MyLoveIsCoolCover.jpg", spotifyUrl: "https://open.spotify.com/intl-fr/album/2L82g2rqAlNBcADFzayJBU?si=zxgSVs8cTxywbvTDWYZErA" },
  { id: 2, title: "Vision OF A Life", img: "./Images/VisionOfALifeCover.jpg", spotifyUrl: "https://open.spotify.com/intl-fr/album/7Mn6FjNopuROYZLIN91hhe?si=8wLeDYH-RUSycmuMDA7WVw" },
  { id: 3, title: "Creature Songs", img: "./Images/CreatureSongsCover.jpg", spotifyUrl: "https://https://open.spotify.com/album/7HVdYVFbPoR0ILDyKYXemR?si=dOScyGZbQBGUE4tX4kwhNw.spotify.com/album/..." },
  { id: 4, title: "Blue Lullaby", img: "./Images/BlueLyllabyCover.jpg", spotifyUrl: "https://open.spotify.com/album/2yYVQSvioUyc6LOIruv3Ou?si=TmdLmOA-Rt-2Gcwyik8LUA" },
  { id: 5, title: "Spotify Sessions", img: "./Images/SpotifySessionsCover.jpg", spotifyUrl: "https://open.spotify.com/album/0rpYUAMj7cXOOuNLlKJ1MR?si=-j7OfxLQQtG3GiSAcMWlSw" },
];

export default function AlbumCarousel({id}) {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 5;

    const prev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const next = () => {
        setStartIndex((prev) => Math.min(prev + 1, albums.length - visibleCount));
    };

    return (
        <div id={id} style={{ backgroundColor: "#330a0a", color: "#f0d37f", padding: "1rem", maxWidth: 900, margin: "auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>(Re)découvrez les premiers albums</h2>
        
        <div style={{ display: "flex", alignItems: "center" }}>
            <button onClick={prev} disabled={startIndex === 0} style={navButtonStyle}>{"<"}</button>

            <div style={{ display: "flex", overflow: "hidden", flex: 1, gap: "1rem" }}>
            {albums.slice(startIndex, startIndex + visibleCount).map((album) => (
                <a
                key={album.id}
                href={album.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", display: "block", width: 120, height: 120, borderRadius: 10, overflow: "hidden", boxShadow: "0 0 8px #000" }}
                >
                <img
                    src={album.img}
                    alt={album.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <button
                    style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    borderRadius: "50%",
                    border: "none",
                    padding: 6,
                    cursor: "pointer",
                    }}
                    aria-label={`Play ${album.title}`}
                >
                    ▶
                </button>
                </a>
            ))}
            </div>

            <button onClick={next} disabled={startIndex >= albums.length - visibleCount} style={navButtonStyle}>{">"}</button>
        </div>
        </div>
    );
}

const navButtonStyle = {
    backgroundColor: "#5a2a2a",
    border: "none",
    color: "#f0d37f",
    fontSize: "1.5rem",
    padding: "0.2rem 0.6rem",
    cursor: "pointer",
    userSelect: "none",
    borderRadius: 4,
    margin: "0 0.5rem",
};
