// Importa o modo "StrictMode" do React, que ajuda a identificar potenciais problemas no código
import { StrictMode } from 'react'

// Importa a função "createRoot" da biblioteca 'react-dom/client'
// que cria o ponto inicial para renderizar o aplicativo React na DOM
import { createRoot } from 'react-dom/client'

// Importa o arquivo CSS global, que será aplicado a todo o aplicativo
import './index.css'

// Importa o componente principal "App" que será renderizado como a raiz da aplicação
import App from './App.jsx'

// Localiza o elemento HTML com o ID "root" e cria o ponto de entrada para a renderização do React
// Em seguida, renderiza o componente "App" dentro do "StrictMode".
// O StrictMode ativa verificações adicionais e avisa sobre práticas de programação não ideais
// ou código obsoleto, mas não afeta a renderização do aplicativo em produção
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
