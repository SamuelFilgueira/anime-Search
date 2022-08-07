import styled from "styled-components";

export const Container = styled.div``;

export const CardImg = styled.img`
  width: 211px;
  height: 300px;
  border-radius: 10px;
  transition: 0.4s;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgb(240 46 170 / 25%) 1px 0px 13px 9px,
      rgb(240 46 170 / 22%) 0px 10px 10px;
  }
`;
