import React, { Component } from "react";
import "./style.css";

export default class Main extends Component {
  state = {
    ddd: "",
    telephoneNumber: "",
  };

  componentDidMount() {
    document.title = "Easy Message";
  }

  sendMessage = () => {
    window.open(
      `https://api.whatsapp.com/send?1=ptBR&phone=55${this.state.ddd}${this.state.telephoneNumber}`
    );
  };

  render() {
    return (
      <div className='app'>
        <div className='logo'></div>
        <div className='input-area'>
          <input
            className='ddd-input'
            placeholder='DDD'
            maxLength='2'
            onInput={(d) => this.setState({ ddd: d.target.value })}
            autoFocus
          ></input>
          <input
            className='tel-input'
            placeholder='Telefone'
            maxLength='9'
            onInput={(tel) =>
              this.setState({ telephoneNumber: tel.target.value })
            }
          ></input>
        </div>
        <br></br>
        <div className='send'>
          <button onClick={this.sendMessage}>Enviar Mensagem</button>
        </div>
      </div>
    );
  }
}
