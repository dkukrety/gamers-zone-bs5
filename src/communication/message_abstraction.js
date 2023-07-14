class Message {
    constructor(sender, recipient, content) {
        this.sender = sender;
        this.recipient = recipient;
        this.content = content;
        this.timestamp = new Date();
    }

    send() {
        // Code to send the message
        console.log(`Message sent from ${this.sender} to ${this.recipient}`);
    }

    display() {
        // Code to display the message content
        console.log(`[${this.timestamp.toLocaleString()}] ${this.sender}: ${this.content}`);
    }
}

class Messenger {
    constructor() {
        this.messages = [];
    }

    composeMessage(sender, recipient, content) {
        const message = new Message(sender, recipient, content);
        this.messages.push(message);
        return message;
    }

    getUnreadMessages() {
        // Code to retrieve unread messages
        return this.messages.filter(message => !message.read);
    }

    markAsRead(message) {
        // Code to mark a message as read
        message.read = true;
        console.log(`Message from ${message.sender} marked as read.`);
    }
}

// Abstraction in action
const messenger = new Messenger();

const message1 = messenger.composeMessage('Lakshmikant', 'Harsha', 'Hello, how are you?');
const message2 = messenger.composeMessage('Harsha', 'Lakshmikant', 'Im doing great!');

message1.send();
message2.send();

message1.display();

const unreadMessages = messenger.getUnreadMessages();
console.log(`You have ${unreadMessages.length} unread messages.`);
