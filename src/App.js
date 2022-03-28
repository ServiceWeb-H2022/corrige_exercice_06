import './App.css';
import React from 'react';
import Titre from './components/Titre';
import Tableau from './components/Tableau';


class App extends React.Component {
  render(){
    
    const livres = [
        {id:1, titre:'Fondation'},
        {id:2, titre:'Les montagnes hallucinées'},
        {id:3, titre:'Blade Runner'}
    ];

    return (
      <div className="App">
      <header className="App-header">
          <h1>MyBooks</h1>
		
          <Titre texteTitre="Liste des livres" />
          <Tableau livres={livres}/>
          
      </header>
    </div>
    );
  }
}

export default (App);