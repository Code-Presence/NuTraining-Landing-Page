import { Container, TextWrapper } from "./style";
import { Link } from "react-scroll";

function Navbar(): JSX.Element {
  return (
    <Container>
      <TextWrapper>
        <p>
          <Link to="AboutMe" spy={true} smooth={true}>
            About me
          </Link>
        </p>
        <p>
          <Link to="Experience" spy={true} smooth={true}>
            Experience
          </Link>
        </p>
        <p>
          <Link to="Skills" spy={true} smooth={true}>
            Skills
          </Link>
        </p>
        <p>
          <Link to="Portfolio" spy={true} smooth={true}>
            Portfolio
          </Link>
        </p>
        <p>
          <Link to="Contact" spy={true} smooth={true}>
            Contact
          </Link>
        </p>
      </TextWrapper>
    </Container>
  );
}

export { Navbar };
