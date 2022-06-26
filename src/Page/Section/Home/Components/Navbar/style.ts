import styled from "styled-components";

export const Container = styled.section`
  width: 40rem;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  padding-right: 6rem;
  gap: 2rem;
  color: white;

  & > P {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;

    :hover {
      color: #c7a465;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100rem;
  background-color: green;
  align-items: center;
`;
