import { Container, Content } from "./styles";
import rectangle from "../../assets/rectangle.svg";
import moreoptions from "../../assets/options.svg";

export function Cards() {
  return (
    <Container>
      <Content>
        <div className="header">
          <div className="title">
            <img src={rectangle} alt="to do list logo" height={30} width={30} />
            <span>Create Sign in Validation</span>
          </div>
          <div className="moreOptions">
            <img src={moreoptions} alt="to do list logo" height={30} width={30} />
          </div>
        </div>

        <div className="description">
          <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </span>
        </div>

        <div className="footer">
          <span>
          Created March 30, 2021 1:24pm
          </span>

        </div>
      </Content>
    </Container>
  );
}
