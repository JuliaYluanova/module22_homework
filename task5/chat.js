const chatWindow = document.getElementById("chatWindow");
const messageInput = document.getElementById("messageInput");
const ws = new WebSocket("wss://echo-ws-service.herokuapp.com/");

// функция для добавления сообщения в окно чата
function addMessageToChat(message) {
  const messageNode = document.createElement("div");
  messageNode.textContent = message;
  chatWindow.appendChild(messageNode);
}

// обработчик события открытия соединения WebSocket
ws.addEventListener("open", () => {
  console.log("Соединение установлено");
});

// обработчик события получения сообщения от сервера
ws.addEventListener("message", (event) => {
  console.log("Получено сообщение от сервера:", event.data);
  addMessageToChat("Сервер: " + event.data);
});

// функция для отправки сообщения на сервер
function sendMessage() {
  const message = messageInput.value;
  if (message) {
    ws.send(message);
    addMessageToChat("Вы: " + message);
    messageInput.value = "";
  }
}

// функция для отправки гео-локации на сервер
function sendLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        addMessageToChat(`Гео-локация: ${url}`);
        ws.send(url);
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}