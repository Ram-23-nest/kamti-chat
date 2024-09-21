document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
