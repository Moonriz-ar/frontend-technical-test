import styled from "styled-components";

export const StyledWrapper = styled.div`
  align-items: flex-end;
  position: relative;
  display: flex;
  height: 20rem;
`;

export const StyledTime = styled.p`
  background-color: ${(props) =>
    props.isDark ? "rgb(31 42 57)" : "rgb(249 250 251)"};
  border-radius: 30px;
  color: ${(props) => (props.isDark ? "rgb(249 250 251)" : "rgb(31 42 57)")};
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  font-size: 2rem;
  font-family: "Yeseva One", cursive;
  min-width: min-content;
  width: 16rem;
  padding: 2rem;
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 16rem;
  top: -10%;
  left: 2%;
  position: absolute;
`;
