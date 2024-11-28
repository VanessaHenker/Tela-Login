import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Interface que define as propriedades esperadas pelo componente `FormLogin`.
interface FormLoginProps {
  // Função para atualizar o estado do email no componente pai.
  setEmail: (email: string) => void;
  // Função para atualizar o estado da senha no componente pai.
  setPassword: (password: string) => void;
}

// Componente funcional `FormLogin`, responsável por capturar e validar os campos de email e senha.
const FormLogin: React.FC<FormLoginProps> = ({ setEmail, setPassword }) => {
  // Estado local para indicar se o email é válido ou não.
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  // Estado local para indicar se a senha é válida ou não.
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  // Função para validar o formato do email usando uma expressão regular.
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para verificar o padrão do email.
    return emailRegex.test(email); // Retorna `true` se for válido, `false` caso contrário.
  };

  // Função chamada quando o campo de email perde o foco.
  const handleEmailBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email); // Atualiza o email no estado do componente pai.
    if (email.trim() === "") {
      setEmailValid(null); // Não exibe ícone se o campo estiver vazio.
    } else {
      setEmailValid(validateEmail(email)); // Valida o email e atualiza o estado local.
    }
  };

  // Função chamada quando o campo de senha perde o foco.
  const handlePasswordBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password); // Atualiza a senha no estado do componente pai.
    if (password.trim() === "") {
      setPasswordValid(null); // Não exibe ícone se o campo estiver vazio.
    } else {
      setPasswordValid(password.length >= 6); // Valida se a senha tem ao menos 6 caracteres.
    }
  };

  // Função para renderizar o ícone de validação com base na validade do campo.
  const renderValidationIcon = (isValid: boolean | null) => {
    if (isValid === null) return null; // Não mostra ícone se o campo não foi validado ou está vazio.
    return isValid ? (
      <FontAwesomeIcon icon={faCheck} className="icon-valid" /> // Ícone de check para entrada válida.
    ) : (
      <FontAwesomeIcon icon={faTimes} className="icon-invalid" /> // Ícone de erro para entrada inválida.
    );
  };

  // Renderização dos campos de entrada de email e senha.
  return (
    <>
      <label className="label-input">
        <FontAwesomeIcon icon={faEnvelope} className="icon-modify" /> 
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} // Atualiza o email em tempo real.
          onBlur={handleEmailBlur} // Valida o email quando perde o foco.
        />
        {renderValidationIcon(emailValid)} {/* Renderiza o ícone de validação do email */}
      </label>

      {/* Campo de entrada para senha com ícone e validação */}
      <label className="label-input">
        <FontAwesomeIcon icon={faLock} className="icon-modify" /> {/* Ícone de cadeado */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} // Atualiza a senha em tempo real.
          onBlur={handlePasswordBlur} // Valida a senha quando perde o foco.
        />
        {renderValidationIcon(passwordValid)} {/* Renderiza o ícone de validação da senha */}
      </label>
    </>
  );
};

export default FormLogin; 
