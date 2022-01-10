import { Button } from "../Button";
import { Cards } from "../Cards";
import { Container } from "./styles";

export function Dashboard() {
  var name1 = "To do";
  var name2 = "Closed";

  return (
    <Container>
      <h1> Hi there.</h1>
      <div className="buttonActions">
        <Button name={name1} />
        <Button name={name2} />
      </div>
      <Cards />
    </Container>
  );
}
