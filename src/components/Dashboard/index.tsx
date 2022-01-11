import axios from "axios";
import { Item } from "../../types/Item";
import { useState, useEffect } from "react";
import { Button } from "../Button";
import { Cards } from "../Cards";
import { Container } from "./styles";

export function Dashboard() {
  const [item, seItem] = useState<Item[]>([]);
  var name1 = "To do";
  var name2 = "Closed";

  let exibir = item.map((item, index) => (
    <Cards key={index} item={item} />
  ))

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((response) => {
      seItem(response.data);
    });
  }, []);

  return (
    <Container>
      <h1> Hi there.</h1>
      <div className="buttonActions">
        <Button name={name1} />
        <Button name={name2} />
      </div>

      {item.length > 0 ? exibir : <h1 className="warning">No tasks</h1>}
    </Container>
  );
}
