import React, { useState } from "react";

// DATA
import EmojiData from "./Assets/data/emojiList.json";

// Components
import Search from "./Components/Search";
import Line from "./Components/Line";
import Footer from "./Components/Footer";

// CSS
import "./App.css";

function App() {
  // STATES
  const [emojiList, setEmojiList] = useState(EmojiData);

  return (
    <div className="container">
      <Search EmojiData={EmojiData} setEmojiList={setEmojiList} />

      {emojiList.map((emoji, index) => {
        return <Line emoji={emoji} key={index} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
