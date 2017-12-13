import React from 'react';
import _ from 'lodash';

const Stars = (props) => {
  return (
    <div className="col-sm-5">
      {
        _.range(props.numberOfStars).map(i => (
          <i key={i} className="fa fa-star"></i>
        ))
      }
    </div>
  );
}

const Button = (props) => {
  let button;
  switch (props.answerIsCorrect) {
    case true:
      button =
      <button
        className="btn-equal btn-success"
        onClick={props.acceptAnswer}
      >
        <i className="fa fa-check"></i>
      </button>
      break;
    case false:
      button =
      <button className="btn-equal btn-danger">
        <i className="fa fa-times"></i>
      </button>
      break;
    default:
      button =
      <button
        className="btn-equal"
        disabled={props.selectedNumbers.length === 0}
        onClick={props.checkAnswer}
      >
        =
      </button>
      break;
  }
  return (
    <div className="col-sm-2">
      {button}
      <button
        className="btn-warning btn-refresh"
        onClick={props.redraw}
        disabled={props.redraws === 0}
      >
        <i className="fa fa-refresh"></i> {props.redraws}
      </button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-sm-5">
      {
        props.selectedNumbers.map((number, i) => (
          <span
            key={i}
            onClick={() => props.unselectNumber(number)}
          >{number}</span>
        ))
      }
    </div>
  );
}

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  };
  return (
    <div className="panel text-center">
      <div>
        {
          Numbers.list.map((number, i) => <span
            key={i}
            className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}
          >{number}</span>)
        }
      </div>
    </div>
  );
}
Numbers.list = _.range(1, 10);

class Game extends React.Component {
  static randomNumber = () => 1 + Math.floor(Math.random() * 9);
  state = {
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5
  };

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState((prevState) => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  };

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars ===
      prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: Game.randomNumber()
    }));
  };

  redraw = () => {
    if (this.state.redraws === 0) { return; }
    this.setState(prevState => ({
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws - 1
    }));
  };

  render() {
    const { selectedNumbers, randomNumberOfStars, answerIsCorrect, usedNumbers, redraws } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <Button
            selectedNumbers={selectedNumbers}
            redraws={redraws}
            checkAnswer={this.checkAnswer}
            answerIsCorrect={answerIsCorrect}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
          />
          <Answer
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber}
          />
        </div>
        <br />
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
          usedNumbers={usedNumbers}
        />
      </div>
    );
  }
}

class App extends React.Component {

  // constructor(props){
    // super(props);


  // }

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }

}

export default App;
