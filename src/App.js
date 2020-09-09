import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  state = { lat: null, errorMessage: '' };

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      error => {
        this.setState({ errorMessage: error.message })
      }
    )
    return (
      <div className="App">
        <h1> Latitude : { this.state.lat } </h1>
        <h1> Error    : { this.state.errorMessage } </h1>
      </div>
    );
  }
}

export default App;
