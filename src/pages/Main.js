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
    if (
      this.state.ddd.length === 0 &&
      this.state.telephoneNumber.length === 0
    ) {
      window.alert("nao tem numero");
    } else {
      window.open(
        `https://api.whatsapp.com/send?1=ptBR&phone=55${this.state.ddd}${this.state.telephoneNumber}`
      );
    }
  };

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <div className='logo'></div>
          <h1>Easy message</h1>
          <p>
            Mande mensagens no WhatsApp de maneira rápida sem precisar salvar o
            número! <br></br>É preciso apenas que você esteja logado no WhatsApp
            Web para continuar.
          </p>
        </div>
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
