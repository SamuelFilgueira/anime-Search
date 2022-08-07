import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 20px 20px 20px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
    overflow: auto;
    position: absolute;
    height: min(90vh, 544px);
    left: -110vw;
    top: 152px;
    padding-right: 10px;
    background-color: ${({ theme }) => theme.body};
    box-shadow: rgb(240 46 170 / 30%) 5px 5px, rgb(240 46 170 / 20%) 10px 10px,
      rgb(240 46 170 / 10%) 15px 15px, rgb(240 46 170 / 5%) 20px 20px;

    > h1 {
      padding: 20px;
    }
  }
  .active {
    display: flex;
    flex-direction: column;
    left: 0;
    z-index: 4;
    width: 50%;
    transition: all 0.25s;
    box-shadow: rgb(240 46 170 / 30%) 5px 5px, rgb(240 46 170 / 20%) 10px 10px,
      rgb(240 46 170 / 10%) 15px 15px, rgb(240 46 170 / 5%) 20px 20px;
  }

  @media (min-width: 999px) {
    > div {
      display: flex;
      position: static;
      flex-direction: column;
      padding-bottom: 10px;
    }

    h1,
    a {
      display: flex;
    }

    img {
      display: none;
    }
  }

  @media (max-width: 578px) {
    .active {
      width: 100%;
      justify-content: space-around;
    }

    h1 {
      font-size: 24px;
    }

    a {
      font-size: 16px;
    }
  }
`;

export const Button = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Link = styled.a`
  padding: 10px 12px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  margin: 5px 0 45px 10px;
  transition: all 0.25s;
  

  &:hover {
    background-color: #3b3b3bcc;
    transform: translateX(10px);
    transition: all 0.25s;
    color: white;
  }

  @media (min-width: 999px) {
    margin: 10px;
    
    &:hover {
      background-color: #3b3b3bcc;
      transform: none;
    }
  }
`;
