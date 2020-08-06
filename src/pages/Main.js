import React, { Component } from "react";

export default class Main extends Component {
  state = {
    ddd: "",
    telefone: "",
  };

  sendMessage = () => {
    console.log(
      `O ddd é ${this.state.ddd} e o número é ${this.state.telefone}`
    );
  };

  render() {
    return (
      <div>
        <input
          placeholder='DDD'
          onInput={(d) => this.setState({ ddd: d.target.value })}
        ></input>
        <input
          placeholder='telefone'
          onInput={(tel) => this.setState({ telefone: tel.target.value })}
        ></input>
        <button onClick={this.sendMessage}>Enviar</button>
      </div>
    );
  }
}
