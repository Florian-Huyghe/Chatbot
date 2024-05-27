const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const chatbox = document.getElementById('chatbox');

sendButton.addEventListener('click', sendMessage);


console.log(sendButton)
    function getResponse(input) {
        for (let i = 0; i < pairs.length; i++) {
            const regex = new RegExp(pairs[i][0], 'i');
            const match = input.match(regex);
            if (match) {
                return pairs[i][1](match);
            }
        }
        return "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ?";
    }

    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${className}`;
        messageElement.textContent = message;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addMessage(userMessage, 'user');
            const botResponse = getResponse(userMessage);
            addMessage(botResponse, 'bot');
            userInput.value = '';
        }
    }

    

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });


