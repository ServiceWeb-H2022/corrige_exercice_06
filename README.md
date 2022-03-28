# Exercice 06 - Composants et props

## Installation

- Créer un nouveau projet React nommé mybooks (en minuscule).
- Remplacez le code du fichier `App.js` par celui-ci

``````react
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
      
    return (
      <div className="App">
      <header className="App-header">
          <h1>MyBooks</h1>
		
          <h3>Liste des livres</h3>
		
          <table className="BooksTable">
            <thead>
              <tr>
                <th>id</th>
                <th>Titre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fondation</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Les montagnes hallucinÃ©es</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Blade Runner</td>
              </tr>
            </tbody>
          </table>
      </header>
    </div>
    );
  }
}

export default (App);
``````
- Au début de la fonction render() de la classe App, ajoutez le tableau suivant d'objets "livre".

``````react
const books = [
    {id:1, titre:'Fondation'},
    {id:2, titre:'Les montagnes hallucinées'},
	{id:3, titre:'Blade Runner'}
];
``````

- Ajoutez les lignes suivante à la fin du fichier `App.css`  

``````css
.BooksTable th, .BooksTable td {
  text-align: left;
  padding-right: 15px;
}
``````

Maintenant lancer l'application avec la commande `npm start`.

## À faire ensuite

- Créez les composantes suivantes en dans des fichiers séparés situés dans le répertoire `src/components`

- Une composante `Titre` qui va remplacer la balise `<h3>` dans le fichier `App.js`. Elle recevra un paramètre `texte` qui sera le texte à afficher. La composante retournera une balise `<h3>` avec la valeur du paramètre reçu.

- Une composante nommée  `Tableau`. Cette composante va remplacer la balise `<table>` dans le fichier `App.js`. Elle recevra un paramètre `livres` qui est le tableau de livres qu’on a défini plus haut. Elle va retourner le code html pour afficher le tableau.

- Une composante `LigneTableau`. Cette composante va être utilisé dans la composante `Tableau` pour afficher une ligne du tableau. Elle recevra un paramètre `livre` qui représente un objet du tableau livres. Elle va retourner le code html pour afficher un ligne du tableau (une balise `<tr>` et son contenu) avec les valeurs reçues en paramètres.

- Modifiez le fichier `App.js` pour utiliser les composantes créés.


https://serviceweb-h2022.github.io/exercices/06_react_component/
