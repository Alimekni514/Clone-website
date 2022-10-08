import React from "react";

function NewsCard({ title, description, bgImage }) {
  return (
    <div 
      style={{
        backgroundPosition:"top left ",
       backgroundRepeat:"no-repeat",
       backgroundSize:" cover",
        color: "white",
        background: `url(${bgImage})`,
        width: "580px",
        height: "300px",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          background: "black",
          maxHeight: "200px",
          opacity: "0.8",
          padding: "10px 20px",
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
