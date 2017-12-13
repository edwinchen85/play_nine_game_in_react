import React from 'react';

const Stars = (props) => {
  return (
    <div>
      ...
    </div>
  );
}

const Button = (props) => {
  return (
    <div>
      ...
    </div>
  );
}

const Answer = (props) => {
  return (
    <div>
      ...
    </div>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
        <Stars />
        <Button />
        <Answer />
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
