import React, { useState } from 'react';
import IconSocial from './IconSocial';
import FormLogin from './FormLogin';

// Interface definindo as propriedades esperadas pelo componente `Login`.
interface LoginProps {
  // Função para ser executada ao clicar no botão "Sign in".
  onButtonClick: () => void;
  // Função para lidar com o login, recebendo o email e a senha como parâmetros e retornando um booleano.
  onLogin: (email: string, password: string) => boolean;
}

// Componente funcional `Login` que utiliza as propriedades da interface `LoginProps`.
const Login: React.FC<LoginProps> = ({ onButtonClick, onLogin }) => {
  // Define estados locais para armazenar o email e a senha inseridos pelo usuário.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para lidar com o envio do formulário de login.
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página ao submeter o formulário.
    onLogin(email, password); // Chama a função `onLogin` recebida via props, passando o email e a senha.
  };

  // Renderização do componente.
  return (
    <div className="content conteudo-principal">
      <section className="conteudo-coluna-principal">
        <h2 className="conteudo-titulo titulo-primario">Welcome back!</h2>
        <p className="conteudo-subtitulo descricao-primaria">
          To keep with your personal info
        </p>
        <p className="conteudo-subtitulo descricao-primaria">
          Please login with personal info
        </p>
        <button className="btn button-primario" onClick={onButtonClick}>
          Sign in
        </button>
      </section>

      <section className="conteudo-coluna-secundario">
        <h2 className="conteudo-titulo titulo-secundario">Sign in to developer</h2>
        <IconSocial /> 
        <p className="conteudo-subtitulo descricao-secundaria">
          or use your email account
        </p>

        <form className="conteudo-principal-form" onSubmit={handleLogin}>
          <FormLogin setEmail={setEmail} setPassword={setPassword} />
          <a className="password">forgot your password?</a>
          <button className="btn button-secundario" type="submit">
            Sign in
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login; 
