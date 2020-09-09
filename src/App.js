import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import SeasonDisplay from './SeasonDisplay';

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
      return <SeasonDisplay lat={ this.state.lat }/>
    }
    return <div> Loading! </div>
  }
}

export default App;
