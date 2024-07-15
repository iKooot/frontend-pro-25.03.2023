import style, { keyframes } from "styled-components";

const zoomIn = keyframes`
  from {
    transform: scale(100%);
  } to {
    transform: scale(110%);
  }
`;

const _Title = style.h1`
  font-size: 3rem;
  text-align: center;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in;
  
  &:hover {
    color: red;
    animation: ${zoomIn}  0.3s forwards;
  }
`;

export function Title() {
  return <_Title>MIU</_Title>;
}
