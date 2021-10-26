import { useState, useEffect } from "react";

import emojiList from "../../data/emojiList.json";
import Item from "../Item/Item";
import * as utils from "../../utils/utils";
import Input from "../Input/Input";

const EmojiContainer = (props) => {
  const [query, setQuery] = useState("");
  const [emojis, setEmojies] = useState([]);
  const handleQuery = (event) => setQuery(event.target.value);

  useEffect(() => {
    const newEmojies = utils.sortItems(emojiList).filter((emoji) => {
      if (query === "") {
        return emoji;
      } else if (emoji.title.toLowerCase().includes(query.toLowerCase())) {
        return emoji;
      }
    });
    setEmojies(newEmojies);
  }, [query]);

  return (
    <div>
      <Input text={"search "} handleChange={handleQuery} />

      {/* search items based on title and then show the result with map */}
      {emojis.map((emoji, index) => (
        <Item emoji={emoji} index={index} />
      ))}
    </div>
  );
};
export default EmojiContainer;
