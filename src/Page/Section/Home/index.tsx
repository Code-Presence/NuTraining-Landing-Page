import {
  Container,
  Wrapper,
  TopWrapper,
  ContentWrapper,
  LeftWrapper,
  RightWrapper,
  Title,
  Text,
} from "./style";
import logo from "../../../Assets/logo-sem-fundo-1.png";
import firstScreen from "../../../Assets/Mocks/first_screen.png";
import { Navbar } from "./Components/Navbar";

function Home(): JSX.Element {
  return (
    <Container id="Home">
      <Wrapper>
        <TopWrapper>
          <img src={logo} />
          <Navbar />
        </TopWrapper>
        <ContentWrapper>
          <LeftWrapper>
            <Title>O mais novo conceito em consultoria Fitness</Title>
            <Text>Treino e dieta na palma da sua mão</Text>
          </LeftWrapper>
          <RightWrapper>
            <img src={firstScreen} />
          </RightWrapper>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
}

export { Home };
