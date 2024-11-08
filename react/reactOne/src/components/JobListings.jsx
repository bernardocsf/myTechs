import React from "react"; // Importa a biblioteca React para criação de componentes
import { useState, useEffect } from "react"; // Importa os hooks useState e useEffect
import JobListing from "./JobListing"; // Importa o componente JobListing para exibir cada listagem de trabalho
import Spinner from "./Spinner"; // Importa o componente Spinner para exibir um carregador

const JobListings = ({ isHome = false }) => {
  // Estado para armazenar as listagens de trabalho
  const [jobs, setJobs] = useState([]);
  // Estado para controlar se os dados estão sendo carregados
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função assíncrona para buscar os trabalhos da API
    const fetchJobs = async () => {
      // Define a URL da API dependendo se está na página inicial
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl); // Faz a requisição à API
        const data = await res.json(); // Converte a resposta para JSON
        setJobs(data); // Armazena os dados no estado
      } catch (error) { // Captura erros na requisição
        console.log("Error fetching data", error); // Exibe erro no console
      } finally {
        setLoading(false); // Atualiza o estado de loading para false após a requisição
      }
    };

    fetchJobs(); // Chama a função para buscar os trabalhos
  }, []); // O array vazio [] significa que o efeito é executado apenas uma vez, após o componente ser montado

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"} {/* Título dinâmico baseado na propriedade isHome */}
        </h2>

        {loading ? ( // Condicional para exibir o carregador ou as listagens de trabalho
          <Spinner loading={loading} /> // Exibe o componente Spinner enquanto os dados estão sendo carregados
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => ( // Mapeia as listagens de trabalho e renderiza um JobListing para cada um
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings; // Exporta o componente para uso em outros arquivos
