import { Container, TextWrapper } from "./style";
import { Link } from "react-scroll";

function Navbar(): JSX.Element {
  return (
    <Container>
      <TextWrapper>
        <p>
          <Link to="AboutMe" spy={true} smooth={true}>
            Home
          </Link>
        </p>
        <p>
          <Link to="Concept" spy={true} smooth={true}>
            Conceito
          </Link>
        </p>
        <p>
          <Link to="Funcionalities" spy={true} smooth={true}>
            Funcionalidades
          </Link>
        </p>
        <p>
          <Link to="Squad" spy={true} smooth={true}>
            Equipe
          </Link>
        </p>
        <p>
          <Link to="Depositions" spy={true} smooth={true}>
            Depoimentos
          </Link>
        </p>
        <p>
          <Link to="Plans" spy={true} smooth={true}>
            Planos
          </Link>
        </p>
        <p>
          <Link to="Contact" spy={true} smooth={true}>
            Contato
          </Link>
        </p>
      </TextWrapper>
    </Container>
  );
}

export { Navbar };
