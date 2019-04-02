import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  }

  addCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={ this.addCount }>+</button>
        <div>{ this.state.count }</div>
      </div>
    );
  }
}

export default App;
