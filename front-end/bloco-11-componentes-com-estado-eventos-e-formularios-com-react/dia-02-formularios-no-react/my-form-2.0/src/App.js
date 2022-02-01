import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
  };

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <input type="text" maxLength="40" style={{ textTransform: 'uppercase' }} required />
            <input type="text" maxLength="50" required />
            <input type="text" maxLength="11" required />
            <input type="text" maxLength="200" onChange required />
            <input type="text" maxLength="28" onBlur required />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
