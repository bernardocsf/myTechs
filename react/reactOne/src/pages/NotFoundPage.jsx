// Importa o componente Link do React Router para navegação
import { Link } from 'react-router-dom';
// Importa o ícone de aviso do Font Awesome
import { FaExclamationTriangle } from 'react-icons/fa';

// Componente principal da página de erro 404 (Página não encontrada)
const NotFoundPage = () => {
  return (
    // Seção centralizada com flexbox para estilizar a página de erro
    <section className='text-center flex flex-col justify-center items-center h-96'>
      {/* Ícone de aviso */}
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      {/* Título da página de erro */}
      <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
      {/* Mensagem informativa sobre a página não existente */}
      <p className='text-xl mb-5'>This page does not exist</p>
      {/* Link para retornar à página inicial */}
      <Link
        to='/'
        className='text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};

// Exporta o componente NotFoundPage para que possa ser utilizado em outras partes do aplicativo
export default NotFoundPage;
