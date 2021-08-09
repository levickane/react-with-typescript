import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'King James',
      url: 'https://i.pinimg.com/originals/6d/26/a2/6d26a28e9269843a0103da816b83457f.jpg',
      age: 36
    },
    {
      name: 'Bobby Hill',
      url: 'https://eatliver.b-cdn.net/wp-content/uploads/2020/08/epic-mullets12.jpg',
      age: 45,
      note: 'He likes to party'
    }
  ]);

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
