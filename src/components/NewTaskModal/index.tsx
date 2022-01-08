import Modal from "react-modal";
import { Container } from "./styles";
import closeimg from "../../assets/close.svg";

Modal.setAppElement("#root"); //acessibilidade

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeimg} alt="fechar modal" />
      </button>
      <Container>
        <h2>Casdastrar Tarefa</h2>

        <input placeholder="Título da Tarefa" />
        <input placeholder="Descrição da tarefa" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
