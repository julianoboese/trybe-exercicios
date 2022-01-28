import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <input type="text" maxLength="40" style={{ textTransform: 'uppercase' }} required />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
