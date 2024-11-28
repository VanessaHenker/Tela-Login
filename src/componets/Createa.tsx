import React, { useState } from 'react';
import IconSocial from './IconSocial';
import FormLogin from './FormLogin';
import FormName from './FromName';

// Interface que define as propriedades esperadas pelo componente `Createa`.
interface CreateaProps {
  // Função para ser executada ao clicar no botão "Sign up".
  onButtonClick: () => void;
  // Função para lidar com a criação de conta, recebendo email e senha como parâmetros e retornando um booleano.
  onCreateAccount: (email: string, password: string) => boolean;
}

// Componente funcional `Createa` que utiliza as propriedades da interface `CreateaProps`.
const Createa: React.FC<CreateaProps> = ({ onButtonClick, onCreateAccount }) => {
  // Define estados locais para armazenar o email e a senha inseridos pelo usuário.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para lidar com o envio do formulário de criação de conta.
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página ao submeter o formulário.
    onCreateAccount(email, password); // Chama a função `onCreateAccount` recebida via props com email e senha.
  };

  // Renderização do componente.
  return (
    <div className="content conteudo-principal-secundario">
      <section className="conteudo-coluna-principal">
        <h2 className="conteudo-titulo titulo-primario">Hello, Friend</h2>
        <p className="conteudo-subtitulo descricao-primaria">Enter your personal details</p>
        <p className="conteudo-subtitulo descricao-primaria">and start journey with us</p>
        <button className="btn button-primario" onClick={onButtonClick}>
          Sign up
        </button>
      </section>

      <section className="conteudo-coluna-secundario">
        <h2 className="conteudo-titulo titulo-secundario">Create an account</h2>
        <IconSocial />
        <p className="conteudo-subtitulo descricao-secundaria">
          or use your email for registration
        </p>
        
        <form className="conteudo-principal-form" onSubmit={handleCreateAccount}>
          <FormName /> 
          <FormLogin setEmail={setEmail} setPassword={setPassword} /> 
          <button className="btn button-secundario" type="submit">
            Sign up
          </button>
        </form>
      </section>
    </div>
  );
};

export default Createa;
