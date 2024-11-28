import React, { useState } from 'react'; 
import './style.css';
import Createa from "./componets/Createa";
import Login from "./componets/Login";

// Define o componente funcional principal App, tipado como React.FC (React Function Component).
const App: React.FC = () => {
  // Define o estado `isSignIn`, que alterna entre login e criação de conta.
  const [isSignIn, setIsSignIn] = useState(false);

  // Alterna o estado `isSignIn` quando o botão é clicado.
  const handleButtonClick = () => {
    setIsSignIn(!isSignIn);
  };

  // Função para criar uma conta. Recebe email e senha como parâmetros.
  const handleCreateAccount = (email: string, password: string) => {
    // Recupera usuários armazenados no localStorage (ou um objeto vazio caso não existam).
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    
    // Verifica se o email já está cadastrado.
    if (users[email]) {
      alert("Email já cadastrado!");
      return false;
    }
    
    // Salva o novo usuário no localStorage.
    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Conta criada com sucesso!");
    return true;
  };

  // Função para realizar login. Recebe email e senha como parâmetros.
  const handleLogin = (email: string, password: string) => {
    // Recupera usuários armazenados no localStorage.
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    
    // Verifica se o email e senha correspondem.
    if (users[email] && users[email] === password) {
      alert("Login realizado com sucesso!");
      return true;
    }
    
    // Exibe mensagem de erro se email ou senha estiverem incorretos.
    alert("Email ou senha incorretos!");
    return false;
  };

  // Retorna o JSX do componente.
  return (
    <main className={isSignIn ? 'sign-in-js' : 'sign-up-js'}>
      <div className="conteudo">
        {/* Renderiza o componente Login com as props apropriadas */}
        <Login onButtonClick={handleButtonClick} onLogin={handleLogin} />
        
        {/* Renderiza o componente Createa com as props apropriadas */}
        <Createa onButtonClick={handleButtonClick} onCreateAccount={handleCreateAccount} />
      </div>
    </main>
  );
};

export default App;
