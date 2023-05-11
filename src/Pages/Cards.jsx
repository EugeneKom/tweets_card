import { Link } from "react-router-dom";
import UserCard from "../components/UserCard/UserCard";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import { useCallback, useEffect, useState } from "react";
import localStorageCustom from "../utils/storage";
import { getTweets } from "../api/fetchUser";

const Cards = () => {
  const [page, setPage] = useState(() => {
    return localStorageCustom.load("pageCount") || 1;
  });
  const [cards, setCards] = useState(() => {
    const savedCards = localStorageCustom.load("tweets");
    return savedCards || [];
  });

  const loadMoreCards = useCallback(
    (currentPage) => {
      getTweets(currentPage)
        .then((data) => {
          setPage((prev) => prev + 1);
          localStorageCustom.save("pageCount", currentPage + 1);
          setCards((prevCards) => {
            return [...prevCards, ...data];
          });
        })
        .catch((error) => console.error(error));
    },
    [setPage, setCards]
  );

  useEffect(() => {
    if (cards.length === 0 && page === 1) {
      loadMoreCards(page);
    }
  }, [cards.length, loadMoreCards, page]);

  const incrementPage = () => {
    loadMoreCards(page);
  };

  return (
    <>
      <h2>Cards</h2>
      <div>
        <UserCard page={page} cards={cards} />
      </div>
      <LoadMoreBtn cards={cards} incrementPage={incrementPage} />
      <Link to="/">to home page</Link>
    </>
  );
};

export default Cards;
