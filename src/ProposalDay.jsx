import React, { useState, useEffect } from "react";
import "./ProposalDay.css";

const photos = [
  { src: "/images/propose1.jpg", title: "Our Beautiful Beginning ❤️" },
  { src: "/images/propose2.jpg", title: "A Moment to Remember 🌸" },
  { src: "/images/propose1.jpg", title: "Together is My Favourite Place" },
  { src: "/images/propose1.jpg", title: "Forever & Always 💕" },
];

export default function ProposalDay() {
  const [yes, setYes] = useState(false);
  const [music, setMusic] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const [flowers] = useState(() =>
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 5,
      emoji: ["🌹", "🌸", "🌷", "💗", "🌺", "✨"][i % 6],
    }))
  );

  return (
    <main className="proposal">

      {yes && (
        <div className="flower-rain">
          {flowers.map(f => (
            <span
              key={f.id}
              style={{
                left: `${f.left}%`,
                animationDelay: `${f.delay}s`,
                animationDuration: `${f.duration}s`
              }}
            >
              {f.emoji}
            </span>
          ))}
        </div>
      )}

      {/* MUSIC */}
      <audio id="loveMusic" loop>
        <source src="/music/romantic.mp3" type="audio/mpeg" />
      </audio>

      <button
        className="music-btn"
        onClick={() => {
          const audio = document.getElementById("loveMusic");
          if (music) audio.pause();
          else audio.play().catch(() => {});
          setMusic(!music);
        }}
      >
        {music ? "❚❚ Pause Music" : "♫ Play Music"}
      </button>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="rose">🌹</div>

          <p className="overline">A LITTLE SURPRISE FOR YOU</p>

          <h1>
            Dear <span>Aashi Ji</span>
          </h1>

          <div className="gold-line">♡ ───── ✧ ───── ♡</div>

          <h2>Somewhere between hello and forever...</h2>

          <p className="intro">
            You became my favourite person,
            my happiest thought and my most beautiful
            reason to smile.
          </p>

          {!yes ? (
            <div className="question">
              <div className="heart">💗</div>
              <h2>Will you be my forever?</h2>
              <p>
                I want a lifetime of smiles, little adventures,
                silly conversations and beautiful memories with you.
              </p>
              <button className="yes-btn" onClick={() => setYes(true)}>
                YES, FOREVER! ❤️
              </button>
              <small>A question from my heart, just for you.</small>
            </div>
          ) : (
            <div className="success">
              <div className="big-heart">💖</div>
              <h2>SHE SAID YES!</h2>
              <h3>My favourite YES ever!</h3>
              <p>
                Aashi Ji, you just made my world
                a little more beautiful. 🌹
              </p>
              <button
                className="yes-btn"
                onClick={() => document.getElementById("letter").scrollIntoView({ behavior: "smooth" })}
              >
                Open Your Love Letter 💌
              </button>
            </div>
          )}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="story">
        <p className="tag">WHERE IT ALL BEGAN</p>
        <h2>8 September ✨</h2>
        <div className="story-card">
          <div className="story-icon">🍦</div>
          <h3>Our First Meeting</h3>
          <p>
            A simple meeting at the mall, a little conversation
            and ice cream... who knew that one beautiful day
            would become such a special part of my life?
          </p>
          <p className="pink-text">
            And today, I would choose that moment all over again.
          </p>
        </div>
      </section>

      {/* LETTER */}
      <section className="letter-section" id="letter">
        <p className="tag">WORDS FROM MY HEART</p>
        <h2>A Letter For You 💌</h2>

        <div className="letter">
          <div className="letter-flower">🌷</div>
          <h3>My Dearest Aashi's Chirag Bansal,</h3>
          <p>
            Mere Shona  ❤️

Apko pata hai 8th September mere liye normal si date thi normally office jaana, phir papa ka phone aaya ki kisi se Milne jaana hai mei normally aapse aur aapki family se milne aaya. Mujhe nhi pata tha jo chehra mei pehli baar dekh raha voh meri baaki jindagi ban jayega. 

Par schi schii batau aap meri life mei ek aisa insaan yaa saksh yaa meri aashi banke aaye ho jisne sch mei meri life hi change krdi ab mujhe har time apke liye kya kya kar paunga apko khush rkhna apke liye har voh chij Krna jis se aap khush ho jao. Har time yeh reheta hai apke saath aisi life banani hai ki aapke chehre se smile na jaaye.

Vaise toh yaar yeh bahut filmy lagta hai ki ek insaan itni jldi itna special ban jaye. Par believe me aap bahut special ho. Special nhi aap meri aashi ji ho. Yaar mei apko kabhi khona nhi chahta. Acha ek baat bolu yaar aap naraj ho jate ho na mei apko khush krne ke liye sb kuch Krna chahta hu. Par voh baat alag hai kar nhi paata.
 Acha ek promise karoge ab chahe kuch bhi problem Khushi dukh kuch bhi aaye mere saath milke saari problem Khushi dukh mei mera haath pakde rkhoge. Aur iss baat ka promise mei karta hu agar apka haath hai mere haath mei sch mei life change kr dunga aapki. 

Pata abhi mei kya likh raha hu apke liye par mei apne aap ko likh dena chahta hu. 

Haan thoda sa bura hu yeh sab chije krne mei dates yaad rkhne mei ☺️par mei apke ke liye har time mujhe yeh fikr reheti ki aap thik ho kya kar rhe ho.

Aashi apko ek baat batau mujhe na duniyadaari ki koi samaj nhi shayad apko yeh bura bhi Lage mei sabke baare mei nhi sirf apno ke baare mei dil se sochta hu. 

Yaar ek promise aur karoge 🥺 naraj ho jaana ladai kar lena par please baat Krna mat chorna. 

Apko pata hai aashi ji mei pehle bahut akela feel krta tha ki mujhse koi baat nhi krta meri koi fikar ni krta par abhi mujhe aap mile uske baad se mujhe yeh lagna start ho gaya haan koi hai Mera apna. Acha yeh sab likhte huve na mujhe proud bhi ho raha hai aur schii batau halki si aankhe bhi namm hai. 

Mei mtlb itna caring yaa possessive nhi hu par pata nhi kyu jab apki baat aati hai toh aankhe bheeg jaati hai. 

Acha apko laga hoga mujhe 8 ka yaad nhi hoga.


Kuch isme vaise romantic bhi nhi likha kyuki abhi emotional ho rkha hu. 

Chalo yaar abhi 20 ko toh is se bhi bada din hai baaki chije us din bataunga varna copy paste ho jayega.


Acha haan yaar aashi ji itne din mei baat krte krte apko samaj aagya hoga ki I am very bad manane mei par yaa apni lifeline samaj ke maaf kr diya karo. 

Acha yaar isme maine apki taarif nhi ki pata hai kyu kyuki aap mere aashi ji ho aur taarif chij ki hoti hai meri aashi ji ki nhi. 


Yaar schi mei pata nhi YHI pyaar hota hai kya par agar thi hota hai toh jaan aapse pyaar ho gaya hai. 

Bassss yaar ab likhte likhte words khatam ho gye. 

20 ke liye bhi bachane hai na. Acha kuch likhne mei idhar udhar ho gaya ho toh maaf krdena .


Aur Aaj apko bolta hu yaar haan aapse pyaar ho gaya hai ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
          </p>
          
          <div className="signature">
            With all my love,<br />
            <strong>Yours, Mr Bansal ❤️</strong>
          </div>
        </div>

        <div className="letter">
          <div className="letter-flower">🌷</div>
          <h3>My Dearest Mr Bansal,</h3>
          <p>
            Aashi's Chirag ji ❤️

             Suno, 
Pata hai, aaj main aapse woh sab nahi keh paayi jo mere dil mein tha. Aapne mere liye jo surprise plan kiya, jis tarah har cheez ko itna beautiful banaya aur mujhe special feel karwaya, woh mere liye bahut hi precious tha. ❤️❤️❤️❤️❤️
Mujhe sach mein bahut achha laga. Room ki decoration se lekar aapke proposal tak aur phir aapke saath bitaya hua woh quality time, sab kuch ek beautiful memory ban gaya hai.
Main shayad apni khushi words mein express nahi kar paayi, lekin mere chehre ki smile mein meri saari feelings thi. Thank you for making me feel so special. Aaj ka din main hamesha yaad rakhungi. 💞💞💞💞🥰🥰🥰😘😘
Abhi ye sab m samne se nhi bol pati hu...sorry
 Chirag Bansal: 8 September… ek normal sa din tha, but aapse milne ke baad pata nahi kyun itna special ho gaya. ❤️

Aaj ek month ho gaya, aur is ek month mein aap dheere-dheere mere liye kaafi special ban gaye ho. 🥰
Aapse baat karna, aapki little little things notice karna aur aapke saath ye bond… mujhe sach mein bahut achha lagta hai. ❤️

Bas ek baat kehni thi—
I’m really glad that I met you. 🫶✨
Aur haan… shayad mujhe aapki thodi si aadat bhi ho gayi hai. 🙈❤️
 Chirag Bansal: Aaj hamare rishte ko ek mahina ho gaya hai. ❤️
Kabhi socha nahi tha ki kisi ka meri zindagi mein aana mujhe apne aane wale kal ke liye itna excited kar dega. Ab future ke baare mein sochti hoon toh usmein aapke saath bahut saare khoobsurat pal nazar aate hain. 💕
Bas ek hi khwahish hai, waqt badle, halaat badlein, lekin hum dono ka ek-doosre ke liye apnapan kabhi na badle. Aapka saath hi hamare rishte ki sabse khoobsurat baat bana rahe. 🧿

Happy One Month Roka Anniversary

          </p>
          
          <div className="signature">
            With all my love,<br />
            <strong>Yours, Aashi ❤️</strong>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <p className="tag">OUR LITTLE WORLD</p>
        <h2>Beautiful Memories 📸</h2>
        <p className="gallery-intro">
          Every picture tells a story. Every story reminds me of you.
        </p>

        <div className="gallery">
          {photos.map((photo, i) => (
            <div
              className={`photo photo-${i + 1}`}
              key={photo.title}
              onClick={() => setSelected(photo)}
            >
              <img src={photo.src} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO PREVIEW */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)}>×</button>
          <img src={selected.src} alt={selected.title} />
          <p>{selected.title}</p>
        </div>
      )}

      {/* SURPRISE */}
      <section className="surprise">
        <p className="tag">ONE LAST LITTLE SURPRISE</p>
        <h2>There's Something More... 💝</h2>
        {!showSurprise ? (
          <button
            className="yes-btn"
            onClick={() => setShowSurprise(true)}
          >
            Open My Surprise 🌹
          </button>
        ) : (
          <div className="surprise-message">
            <div>💐</div>
            <h3>Aashi Ji,</h3>
            <p>
              You are not just a beautiful chapter
              of my life. You are the person with whom
              I want to write every chapter ahead.
            </p>
            <h2>Always You. Always Us. ❤️</h2>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-heart">♡</div>
        <h2>Chirag <span>&</span> Aashi</h2>
        <p>Two hearts. One beautiful journey.</p>
        <p className="copyright">
          Made with infinite love, just for you.
        </p>
      </footer>

    </main>
  );
}