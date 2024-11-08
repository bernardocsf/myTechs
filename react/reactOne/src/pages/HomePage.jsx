// Importa o React para que possamos usar JSX
import React from "react";

// Importa componentes que serão usados na página inicial
import Hero from "../components/Hero";           // Componente para a seção de destaque
import HomeCards from "../components/HomeCards";   // Componente que exibe cartões informativos
import JobListings from "../components/JobListings"; // Componente que lista empregos disponíveis
import ViewAllJobs from "../components/ViewAllJobs"; // Componente para visualizar todos os empregos

// Componente principal da página inicial
const HomePage = () => {
  return (
    <>
      {/* Renderiza a seção de destaque da página */}
      <Hero />

      {/* Renderiza cartões com informações relevantes para os usuários */}
      <HomeCards />

      {/* Renderiza a lista de empregos, passando a prop 'isHome' como true para indicar que está na página inicial */}
      <JobListings isHome={true} />

      {/* Renderiza um componente que permite aos usuários ver todos os empregos disponíveis */}
      <ViewAllJobs />
    </>
  );
};

// Exporta o componente HomePage para que possa ser usado em outras partes do aplicativo
export default HomePage;
