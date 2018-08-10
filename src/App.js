import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import GuessedWords from "./GuessedWords";
import Congrats from "./congrats";
import { getSecretWord } from "./actions/index";
import Input from "./Input";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
       <h1>Jotto</h1>
        <Congrats success={this.props.success}/>
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    success: state.success,
    guessedWords: state.guessedWords,
    secretWord: state.secretWord
  };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
