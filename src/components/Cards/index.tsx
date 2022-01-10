import { Container, Content } from "./styles";
import { Item } from '../../types/Item';
import rectangle from "../../assets/rectangle.svg";
import moreoptions from "../../assets/options.svg";

type cardProps = {
  item: Item;
}

export function Cards({item}: cardProps) {
  const moment = require('moment');

  return (
    <Container>
      <Content>
        <div className="header">
          <div className="title">
            <img src={rectangle} alt="to do list logo" height={30} width={30} />
            <span>{item.title}</span>
          </div>
          <div className="moreOptions">
            <img
              src={moreoptions}
              alt="to do list logo"
              height={30}
              width={30}
            />
          </div>
        </div>

        <div className="description">
          <span>{item.description}</span>
        </div>

        <div className="footer">
          <span>Created {moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
      </Content>
    </Container>
  );
}
