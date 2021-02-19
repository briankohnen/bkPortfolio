import React, { Component } from 'react';
import Nav from './components/Nav';
import Body from './components/Body';

class App extends Component {

  state = {
    width: ''
  };

  updateWindowSize = () => {
    this.setState({width: window.innerWidth});
  };

  componentDidMount = () => {
    this.setState({width: window.innerWidth});
    window.addEventListener('resize', this.updateWindowSize);
  };


  render () {
    return (
      <>
        <Nav width={this.state.width} />
          <div className="App">
            <Body />
          </div>
      </>
    );
  }
}

export default App;
