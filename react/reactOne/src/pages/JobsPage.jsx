// Importa o React para que possamos usar JSX
import React from "react";

// Importa o componente JobListings que exibe a lista de empregos
import JobListings from "../components/JobListings";

// Componente principal da página de empregos
const JobsPage = ({ isHome = false }) => {
  return (
    // Seção da página com estilos aplicados (background azul claro, padding)
    <section className="bg-blue-50 px-4 py-6">
      {/* Renderiza a lista de empregos */}
      <JobListings />
    </section>
  )
};

// Exporta o componente JobsPage para que possa ser utilizado em outras partes do aplicativo
export default JobsPage;
