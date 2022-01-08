import { Button } from "../Button";
import { Cards } from "../Cards";
import { Container } from "./styles";

export function Dashboard() {
    return(
        <Container>
           
            <h1> Hi there.</h1>
            <div className="buttonActions">
                <Button/>
                <Button/>
            </div>
            <Cards />

        </Container>
    );
}