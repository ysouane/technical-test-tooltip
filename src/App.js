import React from "react";
import Tooltip from "./components/Tooltip";
import InputForm from "./components/InputForm";
import Button from "./components/Button";
import UnkleLogo from "./components/Assets/unkle_logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src={UnkleLogo}
          alt="Unkle logo"
          className="App_logo"
          width="400px"
          height="200px" />

        <h1>Formulaire d'inscription</h1>
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
              isActive>
              <InputForm content="Nom d'utilisateur" inputType="text" />
            </Tooltip>
          </div>

          <div className="App__Form__Input">
            <Tooltip
              content="Veuillez renseigner l'adresse complète"
              position="top"
              isActive>
              <InputForm content="Adresse postal" inputType="text" />
            </Tooltip>
          </div>

          <div className="App__Form__Input">
            <Tooltip
              content="Au minimum 8 caractère avec une majuscule et un caractère spécial"
              position="right"
              wrap
              isActive>
              <InputForm content="Mot de passe" inputType="text" />
            </Tooltip>
          </div>

          <div className="App__Form__Input">
            <Tooltip
              content="Attention de bien respecter la casse"
              position="left"
              isActive>
              <InputForm content="Confirmer le mot de passe" inputType="text" />
            </Tooltip>
          </div>

          <div className="App__Form__Input">
            <Tooltip content="Exemple@gmail.com" position="left" isActive>
              <InputForm content="Email" inputType="email" />
            </Tooltip>
          </div>

          <div className="App__Form__Submit">
            <Tooltip
              content="Veuillez saisir tous les champs avant de valider"
              position="bottom"
              isActive>
              <Button content="S'inscrire" buttonType="submit" />
            </Tooltip>
          </div>
        </form>

        <div className="App__TermsAndConditions">
          <Tooltip
            content="Affiche les conditions générales sur une autre page"
            position="bottom"
            isActive>
            <a href="https://www.unkle.fr/cgu" target="_blank" rel="noreferrer">Conditions générales</a>
          </Tooltip>
        </div>
      </main>
    </div>
  );
}

export default App;
