import React from 'react';
import List from './List.js';
import './app.css';

function App(props) {
  const lists = props.store.lists;
  const allCards = props.store.allCards;
  return (
  <main className='App'>  
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
     {
     lists.map(list =>
        <List 
          key={'list-'+list.id} 
          header={list.header} 
          cards={list.cardIds.map(cardId => allCards[cardId])} 
        />
      )}
    </div>
  </main>
  );
}

export default App;