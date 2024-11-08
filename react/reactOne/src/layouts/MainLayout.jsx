import React from "react"; // Importa o React
import { Outlet } from " aninhadosreact-router-dom"; // Importa o componente Outlet para renderizar componentes
import { ToastContainer } from "react-toastify"; // Importa o componente ToastContainer para exibir notificações
import 'react-toastify/dist/ReactToastify.css'; // Importa o CSS para estilização do ToastContainer
import Navbar from "../components/Navbar"; // Importa o componente de navegação

// Componente funcional que representa o layout principal da aplicação
const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* Renderiza a barra de navegação */}
      <Outlet /> {/* Renderiza os componentes correspondentes às rotas aninhadas */}
      <ToastContainer /> {/* Renderiza o container para exibir notificações */}
    </>
  );
};

export default MainLayout; // Exporta o componente MainLayout
