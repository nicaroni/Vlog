import React from "react";

export default function VlogPage() {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "✨ My First Vlog ✨", date: "2025-08-01" },
    { id: "zp8-BhMCnTA", title: "Hohi", date: "2025-08-10" },
  ];

  return (
    <div className="vlog-page">
      <header className="header">
        <h1>💖 V-Logg 💖</h1>
        <p>Welcome to my vlogche</p>
      </header>

      <main className="videos">
        {videos.map((v) => (
          <div className="video-card" key={v.id}>
            <h3>{v.title}</h3>
            <small>{v.date}</small>
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>Made with 💖 using React + Vite</p>
      </footer>
    </div>
  );
}
