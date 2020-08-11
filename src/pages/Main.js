import React, { Component } from "react";
import "./style.css";

export default class Main extends Component {
  state = {
    ddd: "",
    telefone: "",
  };

  sendMessage = () => {
    window.open(
      `https://api.whatsapp.com/send?1=ptBR&phone=55${this.state.ddd}${this.state.telefone}`
    );
  };

  render() {
    return (
      <div className='app'>
        <div className='input-area'>
          <input
            className='ddd-input'
            placeholder='DDD'
            onInput={(d) => this.setState({ ddd: d.target.value })}
          ></input>
          <input
            className='tel-input'
            placeholder='Telefone'
            onInput={(tel) => this.setState({ telefone: tel.target.value })}
          ></input>
        </div>
        <br></br>
        <div className='send'>
          <button onClick={this.sendMessage}>Enviar</button>
        </div>
      </div>
    );
  }
}
