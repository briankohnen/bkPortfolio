import React, { Component } from 'react';
import './App.css';
import NavOverlay from './components/NavOverlay';
import Transitioner from './components/Transitioner';
import Home from './pages/Home';

class App extends Component {

  state = {
    width: '',
    height: '',
    activePage: 'home'
  };

  handleGlobalState = (state, value) => {
    this.setState({ [state]: value });
  };

  updateWindowSize = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  };

  componentDidMount = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
    window.addEventListener('resize', this.updateWindowSize);
  };

  render() {
    return (
        <div className='App'>
          <NavOverlay handleGlobalState={this.handleGlobalState} activePage={this.state.activePage} />
          <Transitioner animation={this.state.activePage} />
          <Home animation={this.state.activePage}  width={this.state.width} height={this.state.height}  />
        </div>
    );
  };
}

export default App;
