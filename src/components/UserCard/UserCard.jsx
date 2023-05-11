import backgroundCardImage from "../../assets/backgroundCard.png";
import Ellipse from "../../assets/Ellipse.png";
import {
  BackgroundImg,
  BorderLine,
  CardBody,
  CardWrapper,
  EllipseUser,
  FollowersParagraph,
  TweetsParagraph,
  UserImg,
} from "./UserCard.styled";
import FollowButton from "../FollowButton/FollowButton";

const UserCard = ({ cards }) => {
  const createMarkup = (usersData) => {
    const userCards = usersData.map(
      ({ avatar, followers, tweets, name, id }) => {
        return (
          <li key={id}>
            <div>
              <BackgroundImg src={backgroundCardImage} alt="" />
            </div>
            <CardBody>
              <BorderLine></BorderLine>
              <UserImg src={avatar} alt={name} />
              <EllipseUser src={Ellipse} alt="#" />
              <TweetsParagraph>
                <span>Tweets : </span>
                {tweets}
              </TweetsParagraph>
              <FollowersParagraph>
                <span>Followers : </span>
                {followers}
              </FollowersParagraph>
              <FollowButton cards={cards} userId={id} followers={followers} />
            </CardBody>
          </li>
        );
      }
    );

    return <CardWrapper>{userCards}</CardWrapper>;
  };

  return createMarkup(cards);
};

export default UserCard;
