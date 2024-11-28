import { useState } from 'react'; // Importa o hook useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser } from '@fortawesome/free-regular-svg-icons'; 

function FormName() {
  // Define um estado local `name` para armazenar o valor do nome digitado pelo usuário.
  const [name, setName] = useState('');

  // Função que lida com mudanças no campo de entrada.
  // É chamada toda vez que o usuário digita algo no campo.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // Atualiza o estado `name` com o valor digitado.
  };

  return (
    <label className="label-input">
     
      <FontAwesomeIcon icon={faUser} className="far fa-user icon-modify" /> 
      
      
      <input 
        id="name" 
        type="text"
        placeholder="Name" 
        value={name} 
        onChange={handleInputChange} // Chama a função `handleInputChange` para atualizar o estado.
      />
    </label>
  );
}

export default FormName; 
