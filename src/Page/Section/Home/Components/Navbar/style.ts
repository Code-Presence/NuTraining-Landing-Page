import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 100rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  padding-right: 6rem;
  gap: 2rem;
  color: white;
  @media screen and (max-width: 768px) {
    gap: 1rem;
    padding-right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  & > P {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
    :hover {
      color: #5c7b9c;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100rem;
  background-color: green;
  align-items: center;
`;
