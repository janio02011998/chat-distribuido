# Chat Distributed System

This project is a distributed chat system implemented in JavaScript using various packages. It allows users to connect to a centralized server and communicate with each other in real-time.

## Features

- **Real-time Messaging**: Instantaneous messaging between multiple users connected to the server.
- **Distributed Architecture**: The system is designed to handle multiple users concurrently across different devices.
- **Bonjour Service Discovery**: Utilizes Bonjour for service discovery, enabling easy communication between devices on the network.
- **Cross-Origin Resource Sharing (CORS)**: CORS support ensures secure communication between the client and the server.
- **WebSocket Communication**: WebSocket protocol is used for bidirectional communication between the server and clients.
- **Express.js for Server-side Handling**: Express.js framework is used for handling HTTP requests and routing.
- **EJS for Server-side Templating**: EJS templating engine is used for generating HTML content on the server.
- **Nodemon for Development**: Nodemon is used for automatically restarting the server during development, making the development process smoother.

## Installation

To run the chat system locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/janio02011998/chat-distribuido.git
    ```

2. Navigate to the project directory:

    ```bash
    cd chat
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open a web browser and navigate to `http://localhost:3000` to access the chat interface.

3. Enter a username and start chatting with other connected users.

## Dependencies

- [Bonjour](https://www.npmjs.com/package/bonjour): ^3.5.0
- [CORS](https://www.npmjs.com/package/cors): ^2.8.5
- [EJS](https://www.npmjs.com/package/ejs): ^3.1.5
- [Express](https://www.npmjs.com/package/express): ^4.17.1
- [HTTP](https://www.npmjs.com/package/http): 0.0.1-security
- [Nodemon](https://www.npmjs.com/package/nodemon): ^2.0.6
- [Socket.io](https://www.npmjs.com/package/socket.io): ^3.0.3
- [URL](https://www.npmjs.com/package/url): ^0.11.0
- [Websocket](https://www.npmjs.com/package/websocket): ^1.0.32
- [WS](https://www.npmjs.com/package/ws): ^7.4.0

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the authors and contributors of the dependencies used in this project.
