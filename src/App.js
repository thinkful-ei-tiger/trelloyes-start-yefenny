import React from 'react';
import './App.css';

import List from './List';

function App(props) {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {props.store.lists.map((list) => {
          let cards = list.cardIds.map((x) => props.store.allCards[x]);
          return <List key={list.id} header={list.header} cards={cards} />;
        })}
      </div>
    </main>
  );
}

export default App;
