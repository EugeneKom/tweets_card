import styled from "@emotion/styled";

export const StyledButton = styled.button`
  font-family: "Montserrat";
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  font-weight: 600;

  padding: 14px 56px;

  border: none;

  background-color: ${(props) => (props.follow ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  cursor: pointer;
`;
