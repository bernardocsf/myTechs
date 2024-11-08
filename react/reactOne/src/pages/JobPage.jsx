// Importa o React para que possamos usar JSX
import React from "react";

// Importa hooks e componentes do React Router e outras bibliotecas
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa"; // Ícones do Font Awesome
import { Link } from "react-router-dom"; // Componente de Link do React Router
import { toast } from "react-toastify"; // Biblioteca para notificações

// Componente principal da página de detalhes do trabalho
const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate(); // Hook para navegação programática
  const { id } = useParams(); // Obtém o ID do trabalho a partir da URL
  const job = useLoaderData(); // Obtém os dados do trabalho usando um loader

  // Função para lidar com a exclusão de um trabalho
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");

    if (!confirm) return; // Cancela se o usuário não confirmar

    deleteJob(jobId); // Chama a função para excluir o trabalho

    toast.success("Job deleted successfully"); // Exibe uma notificação de sucesso

    navigate("/jobs"); // Redireciona para a página de listagem de empregos
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-2" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// Função loader para obter os dados do trabalho a partir da API
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`); // Busca os dados do trabalho usando o ID
  const data = await res.json(); // Converte a resposta em JSON
  return data; // Retorna os dados do trabalho
};

// Exporta o componente JobPage e a função jobLoader para que possam ser utilizados em outras partes do aplicativo
export { JobPage as default, jobLoader };
