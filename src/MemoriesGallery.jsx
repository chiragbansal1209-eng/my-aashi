
import React, { useState } from "react";
import "./MemoriesGallery.css";

const photos = [
  {
    src: "/images/photo1.jpg",
    caption: "Our Beautiful Beginning ❤️",
  },
  {
    src: "/images/photo2.jpg",
    caption: "A Moment to Remember 🌹",
  },
  {
    src: "/images/photo7.jpg",
    caption: "My Favourite Smile 💗",
  },
  {
    src: "/images/photo4.jpg",
    caption: "Forever Together ❤️",
  },
  {
    src: "/images/photo5.jpg",
    caption: "Little Moments, Big Memories",
  },
  {
    src: "/images/photo6.jpg",
    caption: "You & Me Forever 💕",
  },
  {
    src: "/images/photo8.jpg",
    caption: "Our Beautiful Beginning ❤️",
  },
  {
    src: "/images/photo9.jpg",
    caption: "A Moment to Remember 🌹",
  },
  {
    src: "/images/photo10.jpg",
    caption: "My Favourite Smile 💗",
  },
  {
    src: "/images/photo11.jpg",
    caption: "Forever Together ❤️",
  },
  {
    src: "/images/photo12.jpg",
    caption: "Little Moments, Big Memories",
  },
  {
    src: "/images/photo6.jpg",
    caption: "You & Me Forever 💕",
  }
];

export default function MemoriesGallery() {
  const [selected, setSelected] = useState(null);

  const previousPhoto = () => {
    setSelected((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const nextPhoto = () => {
    setSelected((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-heading">
        <span>♥ OUR SPECIAL MOMENTS ♥</span>
        <h2>Our Memories</h2>
        <p>
          Every picture has a story, and every story
          reminds me of you. ❤️
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelected(index)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
            />

            <div className="gallery-overlay">
              <span>♡</span>
              <p>{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div
          className="lightbox"
          onClick={() => setSelected(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
          >
            ×
          </button>

          <button
            className="lightbox-arrow left"
            onClick={(e) => {
              e.stopPropagation();
              previousPhoto();
            }}
          >
            ❮
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selected].src}
              alt={photos[selected].caption}
            />
            <p>{photos[selected].caption}</p>
            <span>
              {selected + 1} / {photos.length}
            </span>
          </div>

          <button
            className="lightbox-arrow right"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
          >
            ❯
          </button>
        </div>
      )}

    </section>
  );
}
