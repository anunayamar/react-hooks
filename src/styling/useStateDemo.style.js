import styled from "styled-components";

export const UseStateThemeContainer = styled.div`
  background: ${(props) => (props.theme === "Green" ? "Green" : "Red")};
  min-height: 100vh;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
