import React from 'react';

class Game extends React.Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props){
    super(props);


  }

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }

}

export default App;
