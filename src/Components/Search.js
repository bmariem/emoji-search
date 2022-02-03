import React from "react";

const Search = ({ EmojiData, setEmojiList }) => {
  return (
    <header>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="search"
        placeholder="What emoji are lookein for ?"
        onChange={(event) => {
          setEmojiList(
            EmojiData.filter((emoji) => {
              return emoji.keywords.includes(event.target.value);
            })
          );
        }}
      />
    </header>
  );
};

export default Search;
