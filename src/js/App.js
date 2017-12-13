import React from 'react';
import _ from 'lodash';

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  let stars = [];
  for(let i=0; i<numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }
  return (
    <div className="col-sm-5">
      {stars}
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
  const arrayOfNumbers = _.range(1, 10);

  return (
    <div className="panel text-center">
      <div>
        {
          arrayOfNumbers.map((number, i) => <span key={i}>{number}</span>)
        }
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
