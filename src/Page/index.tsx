import { Concept } from "./Section/Concept";
import { Contact } from "./Section/Contact";
import { Depositions } from "./Section/Depositions";
import { Funcionalities } from "./Section/Funcionalities";
import { Home } from "./Section/Home";
import { Plans } from "./Section/Plans";
import { Squad } from "./Section/Squad";
import { Container } from "./style";

function FullPage(): JSX.Element {
  return (
    <Container>
      <Home />
      <Concept />
      <Funcionalities />
      <Squad />
      <Depositions />
      <Plans />
      <Contact />
    </Container>
  );
}
export { FullPage };
