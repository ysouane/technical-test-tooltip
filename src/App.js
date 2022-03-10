import React from "react";
import InputForm from './components/InputForm';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello Unkle World !!</h1>
        <h2>Formulaire d'inscription</h2>
      </header>

      <main>
        <form className="App__Form">
          <div className="App__Form__Input">
            <InputForm content="Nom d'utilisateur" />
          </div>
          <div className="App__Form__Input">
            <InputForm content="Adresse complète" />
          </div>
          <div className="App__Form__Input">
            <InputForm content="Mot de passe" />
          </div>
          <div className="App__Form__Input">
            <InputForm content="Email" />
          </div>
        </form>

        <div className="App__Submit">
          <Button content="Envoyer" />
        </div>
      </main>
    </div>
  );
}

export default App;
