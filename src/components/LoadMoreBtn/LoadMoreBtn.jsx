import { useEffect } from "react";
import localStorageCustom from "../../utils/storage";

const LoadMoreBtn = ({ incrementPage, cards }) => {
  useEffect(() => {
    localStorageCustom.save("tweets", cards);
    console.log(cards);
  }, [cards]);

  return <button onClick={() => incrementPage()}>Load more</button>;
};

export default LoadMoreBtn;
