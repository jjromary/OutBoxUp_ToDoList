import todoList from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTaskModal: () => void;
}

export function Header({ onOpenNewTaskModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={todoList} alt="to do list logo" height={40} width={40} />
          <span>tsks.</span>
        </div>
        <div>
          <button type="button" onClick={onOpenNewTaskModal}>
            New Task
          </button>
        </div>
      </Content>
    </Container>
  );
}
