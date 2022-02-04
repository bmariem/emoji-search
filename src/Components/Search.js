import React from "react";

const Search = ({ EmojiData, setEmojiList }) => {
  const handleSearch = (event) => {
    const newResults = EmojiData.filter((emoji) =>
      emoji.keywords.includes(event.target.value)
    );
    setEmojiList(newResults.slice(0, 20));
  };

  return (
    <header>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="search"
        placeholder="What emoji are lookein for ?"
        onChange={handleSearch}
      />
    </header>
  );
};

export default Search;
