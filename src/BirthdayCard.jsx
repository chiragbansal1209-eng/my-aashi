
import React, { useState } from "react";
import "./BirthdayCard.css";

export default function BirthdayCard() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="birthday-section" id="birthday">

      <div className="birthday-heading">
        <span>♥ A SPECIAL DAY ♥</span>
        <h2>Save The Date</h2>
        <p>Someone very special was born on...</p>
      </div>

      <div className="birthday-card">

        {!opened ? (
          <div className="card-front">

            <div className="card-decoration">♡</div>

            <span className="birthday-tag">
              A LITTLE SURPRISE FOR YOU
            </span>

            <h1>24th</h1>
            <h2>November</h2>

            <div className="birthday-divider">
              ♥ ♥ ♥
            </div>

            <p>
              A beautiful day deserves
              a beautiful celebration.
            </p>

            <div className="gift-icon">🎁</div>

            <button
              className="birthday-open-btn"
              onClick={() => setOpened(true)}
            >
              Open Your Surprise ♡
            </button>

            <span className="card-bottom">
              Made with lots of love ❤️
            </span>

          </div>
        ) : (
          <div className="card-inside">

            <div className="birthday-sparkle">✨</div>

            <span className="inside-tag">
              TODAY IS ALL ABOUT YOU
            </span>

            <h1>Happy Birthday!</h1>

            <div className="inside-date">
              24 November ❤️
            </div>

            <div className="birthday-cake">🎂</div>

            <p className="birthday-message">
              To the most special person in my life,
              <br /><br />
              May your birthday be filled with endless
              happiness, beautiful surprises, genuine
              smiles and all the love your heart can hold.
              <br /><br />
              You make ordinary moments feel magical.
              I hope this new year of your life brings
              you everything you've ever wished for.
              <br /><br />
              Keep smiling, keep shining and always
              remember how special you are to me.
            </p>

            <h2 className="birthday-signature">
              With all my love,
              <br />
              Yours Forever ❤️
            </h2>

            <button
              className="birthday-open-btn"
              onClick={() => setOpened(false)}
            >
              Close Card ♡
            </button>

          </div>
        )}

      </div>

      <div className="birthday-footer">
        <span>♡</span>
        24.11 — A Day Worth Celebrating
        <span>♡</span>
      </div>

    </section>
  );
}
