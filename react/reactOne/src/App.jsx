// Importa os módulos e componentes necessários do React Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Importa os layouts e as páginas que serão usadas no roteamento da aplicação
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

// Componente principal da aplicação
const App = () => {

  // Função para adicionar um novo trabalho (job) à API
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob), // Converte o novo trabalho para JSON para envio
    });
    return;
  };

  // Função para deletar um trabalho (job) da API com base no ID fornecido
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Função para atualizar as informações de um trabalho existente
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job), // Envia o trabalho atualizado como JSON
    });
    return;
  };

  // Configuração do roteador, onde definimos as rotas e suas páginas correspondentes
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Define a rota base, que utiliza o layout principal (MainLayout)
      <Route path="/" element={<MainLayout />}>
        {/* Página inicial */}
        <Route index element={<HomePage />} />
        
        {/* Página de listagem de trabalhos */}
        <Route path="/jobs" element={<JobsPage />} />
        
        {/* Página para adicionar um novo trabalho, passando a função de submissão como props */}
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        
        {/* Página para editar um trabalho, passando a função de atualização e carregamento */}
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob}/>}
          loader={jobLoader} // Carrega os dados do trabalho para edição
        />
        
        {/* Página de visualização de detalhes do trabalho, com opção de deletar */}
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader} // Carrega os dados do trabalho específico
        />
        
        {/* Página de erro 404 para rotas não encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  // Retorna o provedor do roteador, que controla o roteamento da aplicação
  return <RouterProvider router={router} />;
};

// Exporta o componente App como o ponto principal da aplicação
export default App;
