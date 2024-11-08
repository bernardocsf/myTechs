import React from 'react' 

// Definição do componente Card
const Card = ({children, bg = 'bg-gray-100'}) => {
  return (
    // Utiliza a prop 'bg' para definir a cor de fundo, com um valor padrão de 'bg-gray-100'
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {/* Renderiza os elementos filhos passados para o componente */}
        {children}
    </div>
  )
}

// Exporta o componente Card para uso em outros arquivos
export default Card
