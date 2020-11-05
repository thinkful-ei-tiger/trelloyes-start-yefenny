import React from 'react';
import './App.css';

import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: this.props.store
    };
  }
  newRandomCard = () => {
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum'
    };
  };

  omitCard = (obj, keyToOmit) => {
    let { [keyToOmit]: _, ...rest } = obj;
    return rest;
  };

  filterList = (cardId) => {
    const newList = this.state.store.lists.map((list) => {
      list.cardIds = list.cardIds.filter((id) => id !== cardId);
      return list;
    });
    return newList;
  };

  deleteCard = (id) => {
    const list = this.filterList(id);
    const cards = this.omitCard(this.state.store.allCards, id);

    this.setState({
      store: {
        lists: list,
        allCards: cards
      }
    });
  };

  getList = (listId, cardId) => {
    let newList = [];
    let newItem = {};
    this.state.store.lists.map((item, index) => {
      if (item.id === listId) {
        newItem = item;
      } else newList.push(item);
    });
    newItem.cardIds = [...newItem.cardIds, cardId];
    newList.push(newItem);
    newList.sort((first, second) => {
      if (first.id < second.id) return -1;
      else return 1;
    });
    return newList;
  };

  addRandomCard = (listId) => {
    const newCard = this.newRandomCard();
    const name = newCard.id;
    const newList = this.getList(listId, name);

    this.setState((prevState) => ({
      store: {
        allCards: {
          ...prevState.store.allCards,
          [name]: newCard
        },
        lists: newList
      }
    }));
  };

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map((list) => {
            let cards = list.cardIds.map((x) => this.state.store.allCards[x]);
            return (
              <List
                key={list.id}
                id={list.id}
                header={list.header}
                cards={cards}
                deleteCard={this.deleteCard}
                addRandomCard={this.addRandomCard}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;
