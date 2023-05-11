import styled from "@emotion/styled";

export const CardWrapper = styled.ul`
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 65px;
  padding: 0;
  margin: 0;

  list-style-type: none;
  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 288px;
    height: 396px;
    padding: 28px 36px 36px 36px;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
  }
`;

export const UserImg = styled.img`
  position: absolute;
  display: block;
  width: 62px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const EllipseUser = styled.img`
  position: absolute;
  display: block;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BorderLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 8px;
  transform: translate(-50%, -50%);
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const BackgroundImg = styled.img`
  display: block;
  width: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TweetsParagraph = styled.p`
  margin: 0 0 16px 0;
`;

export const FollowersParagraph = styled.p`
  margin: 0 0 26px 0;
`;
