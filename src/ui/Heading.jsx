import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-size: 3rem;

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      text-align: center;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      text-align: center;
    `}
`;

export default Heading;
