import Modal from "react-modal";
import { Container } from "./styles";
import closeimg from "../../assets/close.svg";
import { Item } from '../../types/Item'
import React, { useState } from "react";
import axios from 'axios'

Modal.setAppElement("#root"); //acessibilidade

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}



export function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
  const [values, setValues] = useState<Item[]>([]);

  function Onchange(ev: React.ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = ev.target;

    setValues({...values, [name]: value});
  }

  function onSubmit(ev: React.SyntheticEvent){
    // ev.preventDefault();

    axios.post('http://localhost:5000/tasks', values)
      .then((response) => {
      });
  }

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
      <Container onSubmit={onSubmit}>
        <h2>New task</h2>

        <textarea placeholder="Title" id="title" name="title" onChange={Onchange} />
        <textarea placeholder="Description" id="description" name="description" className="description" onChange={Onchange}/>

        <button type="submit">Save</button>
      </Container>
    </Modal>
  );
}
