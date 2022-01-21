import React from 'react';
import './App.css';

function Task(value) {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>{tasks.map((task) => Task(task))}</ul>
        </header>
      </div>
    );
  }
}

export default App;
