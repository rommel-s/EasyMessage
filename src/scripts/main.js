const ddd = document.getElementById("ddd-number");
const telephoneNumber = document.getElementById("phone-number");
const sendBtn = document.querySelector("#send-btn");
const reloadBtn = document.querySelector("#reload-btn");

sendBtn.addEventListener("click", () => {
  sendMessage();
});

reloadBtn.addEventListener("click", () => {
  reload();
});

function sendMessage() {
  if (
    (ddd.value.length === 0 && telephoneNumber.value.length === 0) ||
    ddd.value.length > 2 ||
    telephoneNumber.value.length > 9
  ) {
    showErrorNotification();
  } else {
    window.open(
      `https://api.whatsapp.com/send?1=ptBR&phone=55${ddd.value}${telephoneNumber.value}&text=Ol%C3%A1!`
    );
  }
}

function reload() {
  document.location.reload(true);
}

//Modal notification
const errorNotification = document.getElementById("error-notification");
const modalButton = document.getElementById("modal-button");

function showErrorNotification() {
  errorNotification.style.display = "block";
  modalButton.addEventListener("click", () => {
    errorNotification.style.display = "none";
    // document.location.reload(true);
  });
}
