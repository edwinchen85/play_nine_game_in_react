import React from 'react';

const Stars = (props) => {
  return (
    <div className="col-sm-5">
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
  );
}

const Button = (props) => {
  return (
    <div className="col-sm-2">
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-sm-5">
      ...
    </div>
  );
}

const Numbers = (props) => {
  return (
    <div className="panel text-center">
      <div>
        <span>1</span>
        <span className="selected">2</span>
        <span className="used">3</span>
      </div>
    </div>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
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
