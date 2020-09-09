import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error    => this.setState({ errorMessage: error.message })
    )
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error : { this.state.errorMessage } </div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude : { this.state.lat } </div>
    }
    return <div> Loading! </div>
  }
}

export default App;
