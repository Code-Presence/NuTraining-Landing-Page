import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #141215;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  min-width: 1280px;
  height: 100%;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 10%;

  display: flex;

  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 25rem;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 42px;
  font-family: "Ubuntu";
`;
export const Text = styled.p`
  color: white;
  font-size: 32px;
  font-family: "Ubuntu";
`;
