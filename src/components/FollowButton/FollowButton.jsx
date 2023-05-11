import { useEffect, useState } from "react";
import { StyledButton } from "./FollowButton.styled";
import { addFollower } from "../../api/fetchUser";
import localStorageCustom from "../../utils/storage";

const FollowButton = ({ userId, followers, cards }) => {
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    localStorageCustom.save("tweets", cards);
    const updateTweets = localStorageCustom.load("tweets").map((user) => {
      if (!user.hasOwnProperty("isFollowing")) {
        return { ...user, isFollowing: false };
      }
      return user;
    });
    localStorageCustom.save("tweets", updateTweets);

    const user = updateTweets.find((card) => card.id === userId);
    const isFollowing = user && user.isFollowing;
    setFollow(isFollowing);
  }, [cards, userId]);

  const findFollowingUserIndex = () => {
    const userIndex = localStorageCustom.load("tweets").findIndex((index) => {
      return index.id.includes(userId);
    });
    return userIndex;
  };

  const handleChangeFollow = () => {
    const userIndex = findFollowingUserIndex();
    const tweetsStorage = localStorageCustom.load("tweets");

    if (!follow) {
      setFollow(true);
      tweetsStorage[userIndex].isFollowing = true;
      addFollower(userId, +followers + 1);
    } else if (follow) {
      tweetsStorage[userIndex].isFollowing = false;
      setFollow(false);
      addFollower(userId, followers);
    }
    localStorageCustom.save("tweets", tweetsStorage);
  };

  return (
    <StyledButton follow={follow} onClick={() => handleChangeFollow()}>
      {follow ? "following" : "follow"}
    </StyledButton>
  );
};

export default FollowButton;
