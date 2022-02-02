import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from './components/Input';
import InputCheck from './components/InputCheck';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    type: '',
    resume: '',
    position: '',
    description: '',
    alertShown: false,
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

  handleMouseEnter = () => {
    const { alertShown } = this.state;
    if (!alertShown) {
      alert('Preencha com cuidado esta informação.');
      this.setState({ alertShown: true });
    }
  };

  render() {
    const {
      name, email, cpf, address, city, state, type, resume, position, description,
    } = this.state;

    const options = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
      'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    return (
      <div className="form-container">
        <form>
          <fieldset className="first-section">
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
                inputValue={state}
                onInputChange={(_event, newInputValue) => {
                  this.setState({ state: newInputValue });
                }}
                options={options}
                renderInput={(params) => <TextField {...params} label="Estado" variant="outlined" />}
              />
            </div>
            <p>Tipo</p>
            <InputCheck labelText="Casa" type="radio" name="type" value="house" selected={type} onInputChange={this.handleChange} />
            <InputCheck
              labelText="Apartamento"
              type="radio"
              name="type"
              value="apartment"
              selected={type}
              onInputChange={this.handleChange}
            />
          </fieldset>
          <fieldset className="second-section">
            <Input
              labelText="Resumo do currículo"
              type="text"
              name="resume"
              value={resume}
              maxLength="1000"
              isTextarea
              onInputChange={this.handleChange}
            />
            <Input
              labelText="Cargo"
              type="text"
              name="position"
              value={position}
              maxLength="40"
              isTextarea
              onInputChange={this.handleChange}
              onMouseEnter={this.handleMouseEnter}
            />
            <Input
              labelText="Descrição do cargo"
              type="text"
              name="description"
              value={description}
              maxLength="500"
              onInputChange={this.handleChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
