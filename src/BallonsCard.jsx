
import React, { useState } from "react";
import "./BallonsCard.css";

const gifts = [
  { name: "Respect", emoji: "👑", color: "#ff6b81" },
  { name: "Loyalty", emoji: "💍", color: "#a78bfa" },
  { name: "Trust", emoji: "🤝", color: "#60a5fa" },
  { name: "Care", emoji: "🧸", color: "#fbbf24" },
  { name: "Love", emoji: "❤️", color: "#fb7185" },
];

export default function BallonsCard() {
  const [popped, setPopped] = useState([]);

  const popBalloon = (index) => {
    if (!popped.includes(index)) {
      setPopped([...popped, index]);
    }
  };

  return (
    <div className="app">
      <div className="hearts">💕 💗 💕</div>

      <h1>Something Special For You ❤️</h1>
      <p className="subtitle">
        Pop all 5 balloons and discover your gifts!
      </p>

      <div className="heart-container">
        {gifts.map((gift, index) => {
          const positions = [
            { top: "0%", left: "25%" },
            { top: "0%", left: "58%" },
            { top: "35%", left: "8%" },
            { top: "35%", left: "75%" },
            { top: "67%", left: "42%" },
          ];

          return (
            <div
              key={gift.name}
              className="balloon-wrapper"
              style={positions[index]}
            >
              {!popped.includes(index) ? (
                <div
                  className="balloon"
                  style={{ "--balloon": gift.color }}
                  onClick={() => popBalloon(index)}
                >
                  🎈
                  <span className="balloon-label">
                    Click Me!
                  </span>
                </div>
              ) : (
                <div className="gift">
                  <div className="pop">✨💥✨</div>
                  <div className="gift-emoji">
                    {gift.emoji}
                  </div>
                  <h3>{gift.name}</h3>
                  <p>
                    You deserve all the {gift.name} in the world!
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="counter">
        {popped.length}/5 Gifts Discovered 🎁
      </p>

      {popped.length === 5 && (
        <div className="final-message">
          <h2>🎉 Surprise! 🎉</h2>
          <h1>You Are Special ❤️</h1>
          <p>
            These 5 gifts are my promise to you forever.
          </p>
        </div>
      )}
    </div>
  );
}
