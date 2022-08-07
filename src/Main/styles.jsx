import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: absolute;
  z-index: 999;
  right: 0;
`;

export const Header = styled.header`
    justify-content: center;
    padding: 20px;
    top: 0;
    display: flex;
    align-items: center;

    @media (max-width: 578px){
      > h1 {
        font-size: 24px;
        margin-right: 42px;
      }
    }

`;

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    width: 100%;
    text-align: center;

    @media (max-width: 578px){
      margin-right: 42px;
    }
`;

export const SearchInput = styled.input`
    width: 50%;
    padding: 14px;
    border-radius: 20px; 
    outline: 0;
    color: var(--primary);

    &:focus{
        border: 1px solid dodgerblue;
    }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 1228px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 578px) {
    grid-template-columns: 1fr;

    > h3 {
      padding-right: 54px;
    }
  }
`;