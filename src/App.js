import React from "react";
import Tooltip from "./components/Tooltip";
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
            <Tooltip
              content="Veuillez renseigner votre nom et prénom"
              position="left"
              minWidth="300px"
              minHeight="40px"
              maxWidht="400px"
              maxHeight="50px"
              wrap={false}
              isActive>
              <InputForm content="Nom d'utilisateur" />
            </Tooltip>
          </div>

          <div className="App__Form__Input">
            <Tooltip content="Veuillez renseigner l'adresse complète" wrap={false} position="left" isActive>
              <InputForm content="Adresse postal" />
            </Tooltip>
          </div>

          <div className="App__Form__Input">
            <Tooltip content="Au minimum 8 caractère avec 1 majuscule et 1 caractère spécial" wrap={true} position="left" isActive>
              <InputForm content="Mot de passe" />
            </Tooltip>
          </div>

          <div className="App__Form__Input">
            <Tooltip content="Exemple@gmail.com" wrap={false} position="left" isActive>
              <InputForm content="Email" />
            </Tooltip>
          </div>

          <div className="App__Form__Submit">
            <Tooltip content="Veuillez saisir tous les champs avant" wrap={false} position="left" isActive>
              <Button content="S'inscrire" />
            </Tooltip>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
