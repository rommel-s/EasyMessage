document.getElementById("app").innerHTML = `
<header>
<img src="./public/images/logo.png" alt="EasyMessage" srcset="./public/images/logo.svg" id="logo">
<p class='instructions'>
  Insira DDD e telefone, e será enviado um “Olá!” para o WhatsApp do destinatário, sem a necessidade de salvar o número na lista de contatos.
</p>
</header>

<section>
<label id="ddd-input">
  <input type="number" id="ddd-number" maxlength="2" placeholder=" " />
  <p>DDD</p>
</label>

<label id="phone-input">
  <input type="number" id="phone-number" maxlength="9" placeholder=" " />
  <p>Telefone</p>
</label>
</section>

<div class="btn-container">
<button class="btn send-btn" id="send-btn">Enviar Mensagem</button>
<button class="btn reload-btn" id="reload-btn">Enviar para outro número</button>
</div>

<div class='modal' id="error-notification">
<div class="modal-content">
  <p id="modal-text">Favor, insira número e DDD válidos</p>
  <button class="btn send-btn" id="modal-button">Ok</button>
</div>
</div> 
`;