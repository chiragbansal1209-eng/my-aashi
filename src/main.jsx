import React from 'react';
import { useState } from "react";
import { createRoot } from 'react-dom/client';
import {
  Heart,
  Home,
  Camera,
  Star,
  ArrowRight,
  ShoppingBag,
  Infinity as InfinityIcon,
  Menu,
  X,
  Sparkles,
  Gift,
  MessageCircleHeart,
  CalendarHeart,
  Stars
} from 'lucide-react';


import './style.css';
import MemoriesGallery from './MemoriesGallery';
import BirthdayCard from './BirthdayCard';
import BallonsCard from './BallonsCard';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedPromise, setSelectedPromise] = React.useState(null);
  const [dareStep, setDareStep] = React.useState(0);

  const nav = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Our Journey', href: '#journey', icon: Heart },
    { label: 'Promises', href: '#promises', icon: Gift },
    { label: 'Memories', href: '#memories', icon: Camera },
    { label: 'Romantic Dare', href: '#dare', icon: Sparkles },
    { label: 'For You', href: '#for-you', icon: Star },
  ];

  const promises = [
    {
      icon: '❤️',
      title: 'I Promise to Always Choose You',
      note: 'Chahe life mein kitni bhi difficulties aayein, main hamesha tumhara saath choose karunga. You will always be my favourite person. I will never stop choosing us.'
    },
    {
      icon: '😊',
      title: 'I Promise to Make You Smile',
      note: 'Tumhari smile meri favourite hai. Main hamesha koshish karunga ki tumhare face par ye smile bani rahe. Your happiness means everything to me.'
    },
    {
      icon: '🥹',
      title: 'I Promise to Understand You',
      note: 'Main tumhari feelings ko samajhne ki hamesha koshish karunga. Tumhari baatein, tumhari khushi aur tumhare emotions mere liye bahut important hain.'
    },
    {
      icon: '💗',
      title: 'I Promise to Stay Loyal',
      note: 'My heart belongs to you. Main hamesha tumhare saath honest, loyal aur genuine rahunga. You can always count on me.'
    },
    {
      icon: '♾️',
      title: 'I Promise You Forever',
      note: 'Aaj, kal aur har aane wale din mein, main tumhare saath naye memories banana chahta hoon. I want to grow with you. Forever yours, Chirag.'
    }
  ];

  const dares = [
    {
      title: 'The First Touch',
      emoji: '🤝',
      description: 'Aashi , Chirag ka haath pakdo aur kuch seconds tak bas ek doosre ka haath pakad kar raho aur ek dusre ki aankho mei dekhte raho jo pehle blink karega voh haar jayega usse saamne vaale ki ek wish poori krni padegi.',
      note: 'A little touch, a thousand feelings.'
    },
    {
      title: 'The Warm Hug',
      emoji: '🫂',
      description: 'Ab ek pyaara sa warm hug do. Ek doosre ko feel karao ki you are always there for each other. Feel each other existence.',
      note: 'Some hugs say everything without words.'
    },
    {
      title: 'A Sweet Forehead Kiss',
      emoji: '😘',
      description: ' forehead kiss do. Make this moment special.',
      note: 'A forehead kiss full of love and care.'
    },
    {
      title: 'The Eye Contact Challenge',
      emoji: '👀',
      description: 'Ek doosre ki aankhon mein 30 seconds tak dekho. No phone, no distractions and no laughing!',
      note: 'Whoever laughs first loses!'
    },
    {
      title: 'The Final Confession',
      emoji: '💌',
      description: 'Ek doosre ko dekho aur bolo: I am so lucky to have you in my life aur hamesha ek dusre ka saath doge. I love you, Aashii!',
      note: 'And finally, one big smile together. ❤️'
    }
  ];

  const [selected, setSelected] = useState(null);
  const journeyData = [
  {
    date: "8 September",
    title: "Our First Meet",
    icon: ShoppingBag,
    emoji: "🍦",
    short: "A mall, an ice cream and a special start...",
    message: "8 september ka din vaise toh bahut normal jaa raha tha phir achanak se ek meeting set hui. Mei thoda late ho gaya, but jab mei vaha paucha ek sundar se pyaari se ladki baithi hui thi. Jiski aankhe kisi ke intazar mei thi. mujhe dekh kar thoda sa smile kiya aur phir hamari life ka sabse beautiful chapter start huva. Or haan Black Currant IceCream, voh tabse meri favourite ho gyi.💕💕💕💕"
  },
  {
    date: "10 September",
    title: "Our First Conversation",
    icon: MessageCircleHeart,
    emoji: "💬",
    short: "When talking to you became my favourite thing...",
    message: "Our first conversations were simple, but slowly they became the best part of my day. Every little message started bringing a big smile to my face. 💕"
  },
  {
    date: "20 September",
    title: "Roka Day 💗",
    icon: Heart,
    emoji: "💗",
    short: "Finally hum ek dusre ke ho gye.",
    message: "Haan mei thoda ghabraya huva bhi tha aur sharma bhi raha tha ki pata nhi kya hoga, but finally hum ek dusre ke ho gye. Finally rokafied. Vaise red saaree mei aap bahut sundar lag rhe the. Phir start hui hamari journey. Thankyou aashi mujhe pasand krne ke liye. And thankyou for being my own radha raani. ❤️"
  },
  {
    date: "8 October",
    title: "One Month Together",
    icon: CalendarHeart,
    emoji: "🌹",
    short: "One month of beautiful memories...",
    message: "One month of smiles, care, laughter and unforgettable moments. And this was only the beginning of our beautiful journey together. 💖"
  },
  {
    date: "20 October",
    title: "Hamari peheli meet",
    icon: Camera,
    emoji: "📸",
    short: "Little moments, big happiness...",
    message: "Sky Cafe, kitne sundar lag rhe the aap schii Us din mujhe aapse dubara pyaar ho gaya tha yaa yeh boldo aur pyaar bdh gaya tha. 🥰"
  },
  {
    date: "25 October",
    title: "Hamari Dusri meet",
    icon: Gift,
    emoji: "🎁",
    short: "Making each other smile...",
    message: "Thankyou for completing my wish. Apka haath pakad ke bhagwan ji se aashirvaad lena ❤️"
  },
  {
    date: "8 November",
    title: "2 Months Together",
    icon: Stars,
    emoji: "✨",
    short: "Growing stronger with every moment...",
    message: "Two months of togetherness, countless smiles and so many beautiful memories. Thank you for being such a special part of my life. I hope our story keeps getting more beautiful. ❤️"
  },
  {
    date: "Forever",
    title: "Our Promise",
    icon: InfinityIcon,
    emoji: "♾️",
    short: "To always stay together through every season...",
    message: "No matter what life brings, I want us to keep choosing each other. More memories, more laughter, more adventures and a lifetime of love. You and me, always and forever. ❤️"
  }
];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* NAVIGATION */}
      <header className="navbar">

        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-hearts">
            <Heart />
            <Heart />
          </span>
          <span>
            My Aashi<span className="brand-heart">♥</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(({ label, href, icon: Icon }, i) => (
            <a
              key={label}
              className={i === 0 ? 'active' : ''}
              href={href}
              onClick={closeMenu}
            >
              <Icon size={17} />
              {label}
            </a>
          ))}

          <a
            className="nav-heart"
            href="#for-you"
            aria-label="For Aashi"
            onClick={closeMenu}
          >
            <Heart fill="currentColor" />
          </a>
        </nav>

      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero" id="home">

          <div className="hero-copy">

            <div className="eyebrow">
              <span>✦</span>
              A little corner of our world
              <span>✦</span>
            </div>

            <h1>
              My <em>Aashi</em>
              <span className="big-heart">♥</span>
            </h1>

            <h2>Two hearts... One beautiful journey...</h2>

            <div className="scribble" aria-hidden="true">
              ♡ ───────── ♡
            </div>

            <p>
              You make my life brighter, my heart happier
              <br className="desktop-break" />
              and my world more beautiful. <span>♥</span>
            </p>

            <a className="primary-btn" href="#journey">
              Our Journey <ArrowRight size={19} />
            </a>

            <div className="hero-note">
              Made with all my love, just for you.
            </div>

          </div>

          <div className="hero-photo-wrap">

            <span className="tape"></span>
            <span className="doodle doodle-one">♡</span>

            <div className="photo-frame">
              <img
                src="/aashi-couple.png"
                alt="Chirag and Aashi together"
              />
            </div>

            <span className="photo-caption">
              My favourite person ✨
            </span>

          </div>

          <div className="rose-decoration" aria-hidden="true">
            🌹
          </div>

          <span className="floating-heart heart-a">♥</span>
          <span className="floating-heart heart-b">♥</span>

        </section>

        {/* JOURNEY SECTION */}
        {/* <section className="journey section" id="journey">

          <div className="section-heading">
            <span></span>
            <Heart fill="currentColor" size={18} />
            <h2>Our Journey</h2>
            <span></span>
          </div>

          <div className="journey-content">

            <div className="timeline">

              <div className="timeline-line"></div>

              <article className="milestone">
                <div className="milestone-icon">
                  <ShoppingBag />
                </div>
                <h3>8 September</h3>
                <h4>Our First Meet</h4>
                <p>
                  A mall, an ice cream
                  <br />
                  and a special start...
                </p>
              </article>

              <article className="milestone">
                <div className="milestone-icon">
                  <Heart />
                </div>
                <h3>8 November</h3>
                <h4>2 Months Together</h4>
                <p>
                  Growing stronger
                  <br />
                  with every moment...
                </p>
              </article>

              <article className="milestone">
                <div className="milestone-icon">
                  <InfinityIcon />
                </div>
                <h3>Forever</h3>
                <h4>Our Promise</h4>
                <p>
                  To always stay together
                  <br />
                  through every season...
                </p>
              </article>

            </div>

            <aside className="you-me">
              <h3>You &amp; Me</h3>
              <div className="love-line">────────♡</div>
              <p>Always &amp; Forever <span>♥</span></p>
            </aside>

          </div>
        </section> */}

        <section className="journey section" id="journey">

      <div className="section-heading">
        <span></span>
        <Heart fill="currentColor" size={18} />
        <h2>Our Journey</h2>
        <span></span>
      </div>

      <p className="journey-subtitle">
        Every little moment has a special place in my heart ❤️
        <br />
        Click on each memory to relive it!
      </p>

      <div className="journey-content">

        <div className="timeline">

          <div className="timeline-line"></div>

          {journeyData.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="milestone"
                key={index}
                onClick={() => setSelected(item)}
              >
                <button
                  className="milestone-icon"
                  aria-label={`Open ${item.title}`}
                  type="button"
                >
                  <Icon />
                </button>

                <h3>{item.date}</h3>
                <h4>{item.title}</h4>

                <p>{item.short}</p>

                <span className="milestone-click">
                  Read Memory ♥
                </span>
              </article>
            );
          })}

        </div>

        <aside className="you-me">
          <h3>You &amp; Me</h3>
          <div className="love-line">────────♡</div>
          <p>Always &amp; Forever <span>♥</span></p>
        </aside>

      </div>

      {selected && (
        <div
          className="journey-popup-overlay"
          onClick={() => setSelected(null)}
        >
          <div
            className="journey-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="journey-popup-close"
              onClick={() => setSelected(null)}
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            <div className="journey-popup-emoji">
              {selected.emoji}
            </div>

            <span className="tiny-label">
              A SPECIAL MEMORY
            </span>

            <h2>{selected.title}</h2>

            <h4>{selected.date}</h4>

            <div className="popup-heart-divider">
              ───── ♥ ─────
            </div>

            <p>{selected.message}</p>

            <div className="journey-popup-signature">
              Made with Love ❤️
            </div>

            <button
              className="primary-btn"
              onClick={() => setSelected(null)}
            >
              Close with Love ♥
            </button>
          </div>
        </div>
      )}

    </section>

    <MemoriesGallery />
    <BirthdayCard />
    <BallonsCard/>


        {/* PROMISE SECTION */}
        <section className="promises section" id="promises">

          <div className="section-heading">
            <span></span>
            <Heart fill="currentColor" size={18} />
            <h2>My 5 Promises to You</h2>
            <span></span>
          </div>

          <p className="promise-subtitle">
            Five little promises, one endless love. ❤️
            <br />
            Click each card to open your surprise.
          </p>

          <div className="promise-grid">

            {promises.map((promise, index) => (
              <button
                className="promise-card"
                key={index}
                onClick={() => setSelectedPromise(promise)}
              >
                <div className="promise-icon">
                  {promise.icon}
                </div>

                <h3>Promise #{index + 1}</h3>

                <p>{promise.title}</p>

                <span>Open My Promise ♥</span>
              </button>
            ))}

          </div>

          {/* PROMISE POPUP */}
          {selectedPromise && (
            <div
              className="popup-overlay"
              onClick={() => setSelectedPromise(null)}
            >
              <div
                className="promise-popup"
                role="dialog"
                aria-modal="true"
                aria-labelledby="promise-title"
                onClick={(e) => e.stopPropagation()}
              >

                <button
                  className="popup-close"
                  aria-label="Close popup"
                  onClick={() => setSelectedPromise(null)}
                >
                  <X />
                </button>

                <div className="popup-emoji">
                  {selectedPromise.icon}
                </div>

                <p className="tiny-label">
                  A PROMISE FROM CHIRAG
                </p>

                <h2 id="promise-title">
                  {selectedPromise.title}
                </h2>

                <p className="promise-note">
                  {selectedPromise.note}
                </p>

                <div className="popup-signature">
                  Forever yours, Chirag ❤️
                </div>

                <button
                  className="primary-btn popup-button"
                  onClick={() => setSelectedPromise(null)}
                >
                  I Love You ♥
                </button>

              </div>
            </div>
          )}

        </section>

        {/* MEMORIES SECTION */}
        <section className="memories section" id="memories">

          <div className="memory-copy">

            <span className="tiny-label">
              MY FAVOURITE CHAPTER
            </span>

            <h2>
              Life is better
              <br />
              with you, Aashi <span>♥</span>
            </h2>

            <div className="underline"></div>

            <p>
              Every little moment with you becomes a memory
              I want to keep forever.
            </p>

            <a href="#dare" className="text-link">
              A little surprise for you
              <ArrowRight size={17} />
            </a>

          </div>

          <div className="heart-photo">
            <img
              src="/aashi-couple.png"
              alt="A cherished memory of Chirag and Aashi"
            />
          </div>

          <span className="floating-heart memory-heart">♥</span>
          <span className="floating-heart memory-heart-two">♡</span>

        </section>

        {/* ROMANTIC DARE SECTION */}
        <section className="dare-section section" id="dare">

          <div className="section-heading">
            <span></span>
            <Sparkles size={19} />
            <h2>A Little Romantic Dare</h2>
            <span></span>
          </div>

          <p className="dare-subtitle">
            Aashi Ji, are you ready for some cute challenges? 💕
          </p>

          <div className="dare-card">

            <div className="dare-top">
              <span>CHIRAG ❤️ AASHI</span>
              <span>
                {dareStep + 1} / {dares.length}
              </span>
            </div>

            <div
              className="dare-progress"
              role="progressbar"
              aria-valuenow={dareStep + 1}
              aria-valuemin={1}
              aria-valuemax={dares.length}
            >
              <div
                className="dare-progress-fill"
                style={{
                  width: `${((dareStep + 1) / dares.length) * 100}%`
                }}
              />
            </div>

            <div className="dare-emoji">
              {dares[dareStep].emoji}
            </div>

            <p className="tiny-label">
              YOUR NEXT CHALLENGE
            </p>

            <h3>{dares[dareStep].title}</h3>

            <p className="dare-description">
              {dares[dareStep].description}
            </p>

            <p className="dare-note">
              {dares[dareStep].note}
              <br />
              Only if both of you feel comfortable. ❤️
            </p>

            {dareStep < dares.length - 1 ? (
              <button
                className="primary-btn dare-button"
                onClick={() => setDareStep(prev => prev + 1)}
              >
                Completed! Next Dare
                <ArrowRight size={18} />
              </button>
            ) : (
              <div className="dare-finished">
                <h3>All Dares Completed! ❤️</h3>
                <p>
                  You two made another beautiful memory!
                </p>
                <button
                  className="primary-btn dare-button"
                  onClick={() => setDareStep(0)}
                >
                  Play Again
                  <Heart size={18} fill="currentColor" />
                </button>
              </div>
            )}

          </div>

        </section>

        {/* FINAL LOVE MESSAGE */}
        <section className="for-you section" id="for-you">

          <div className="final-heart">♥</div>

          <p className="tiny-label">
            TO MY AASHI JI
          </p>

          <h2>
            In every tomorrow,
            <br />
            I choose <em>you.</em>
          </h2>

          <p className="final-message">
            Thank you for being my smile, my peace,
            and my favourite part of every day.
          </p>

          <div className="signature">
            Forever yours, Chirag <span>♥</span>
          </div>

          <a href="#home" className="back-top">
            Back to the beginning ↑
          </a>

        </section>

      </main>

      {/* FOOTER */}
      <footer>
        Made with
        <Heart size={13} fill="currentColor" />
        for Aashi · Always &amp; Forever
      </footer>

    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
