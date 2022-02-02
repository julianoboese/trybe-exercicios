import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from './components/Input';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
  };

  handleChange = ({ target }) => {
    switch (target.name) {
      case 'address':
        this.setState({ address: target.value.replace(/[^\w\s]/gi, '') });
        break;
      default:
        this.setState({ [target.name]: target.value });
    }
  };

  handleBlur = ({ target }) => {
    if (Number.isInteger(parseInt(target.value.charAt(0), 10))) {
      this.setState({ [target.name]: '' });
    }
  };

  render() {
    const {
      name, email, cpf, address, city,
    } = this.state;

    const options = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
      'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    return (
      <div className="form-container">
        <form>
          <fieldset>
            <Input labelText="Nome" type="text" name="name" value={name} maxLength="40" onInputChange={this.handleChange} />
            <Input labelText="E-mail" type="text" name="email" value={email} maxLength="50" onInputChange={this.handleChange} />
            <Input labelText="CPF" type="text" name="cpf" value={cpf} maxLength="11" onInputChange={this.handleChange} />
            <Input labelText="Endereço" type="text" name="address" value={address} maxLength="200" onInputChange={this.handleChange} />
            <Input
              labelText="Cidade"
              type="text"
              name="city"
              value={city}
              maxLength="200"
              onInputChange={this.handleChange}
              onInputBlur={this.handleBlur}
            />
            <div className="combobox">
              <Autocomplete
                options={options}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
