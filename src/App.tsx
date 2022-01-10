import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTaskModal } from "./components/NewTaskModal";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";


export function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }
  return (
    <>
      <Header  onOpenNewTaskModal={handleOpenNewTaskModal}/>
      <Dashboard />
      <NewTaskModal 
        isOpen={isNewTaskModalOpen} 
        onRequestClose={handleCloseNewTaskModal}
      />
      <Footer />
      <GlobalStyle />
    </>
  );
}