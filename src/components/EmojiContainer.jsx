import { useState } from "react";

import emojiList from "../data/emojiList.json";
import Item from "./item/Item";
import * as utils from "../utils/utils";
import Input from "./input/Input";

const EmojiContainer = (props) => {
  const [query, setQuery] = useState("");
  const handleQuery = (event) => setQuery(event.target.value);

  return (
    <div>
      <Input text={"search "} handleQuery={handleQuery} />

      {/* search items based on title and then show the result with map */}
      {utils
        .sortItems(emojiList)
        .filter((emoji) => {
          if (query === "") {
            return emoji;
          } else if (emoji.title.toLowerCase().includes(query.toLowerCase())) {
            return emoji;
          }
        })
        .map((emoji, index) => (
          <Item emoji={emoji} index={index} />
        ))}
    </div>
  );
};
export default EmojiContainer;
