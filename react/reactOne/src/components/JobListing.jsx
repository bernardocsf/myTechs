import React from "react"; // Importa a biblioteca React para criação de componentes
import { useState } from "react"; // Importa o hook useState para gerenciar estado
import { FaMapMarker } from "react-icons/fa"; // Importa o ícone de marcador de localização
import { Link } from "react-router-dom"; // Importa o componente Link para navegação entre rotas

const JobListing = ({ job }) => {
  // Cria um estado para controlar a exibição da descrição completa do trabalho
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Define a variável description a partir da propriedade job
  let description = job.description;

  // Se showFullDescription for falso, limita a descrição a 90 caracteres
  if (!showFullDescription) {
    description = description.substring(0, 90) + "..."; // Adiciona reticências
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>
        <button
          //Botão para alternar a exibição da descrição completa
          //Ao clicar, o estado showFullDescription é alternado entre verdadeiro e falso

          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"} {/* Muda o texto do botão */}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />{" "}
            {/* Ícone de localização */}
            {job.location} {/* Localização do trabalho */}
          </div>
          <Link
            // Link para mais detalhes sobre o trabalho
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More {/* Texto do botão de link */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing; // Exporta o componente para uso em outros arquivos
