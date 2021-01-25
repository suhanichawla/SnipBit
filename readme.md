
# SnipBit

SnipBit is a web application for web developers to share and save their code snippets. It allows use to save their HTML,CSS and JS codes in form of snippets in their account. The web app allows you to collaborate on code snippets with other developers in real time.

## Prerequisites

- Node.js
- Npm
- MongoDB

## Get started

Clone the repository.
There are two folders- client and server.

#### Start the server

Go to server directory. Create a .env file and add the following variables\
SECRET_KEY - This will be the key used to sign and verify the jwt token\
MONGODB_URI - This will be your mongoDB connection URL. Enter MongoDB atlas or localhost url.\

Open a terminal, go to server directory and run the following commands

```
npm install
node index.js
```
#### Start the client

Open another terminal, go to client directory and run the following commands
```
npm install
npm start
```
Go to localhost:3000 to see the website in action.

## Tech stack
1. Frontend: ReactJS
2. Backend: NodeJS
3. Database: MongoDB

## Screenshots
<span text-align="center">
<img src="/assets/home.png" width="300px" height="150px">
</span>
<br>
<span>
<img src="/assets/auth.png" width="300px" height="150px">
<img src="/assets/homepage.png" width="300px" height="150px">
</span>
<br>
<span>
<img src="/assets/editor.png" width="300px" height="150px">
<img src="/assets/colab.png" width="300px" height="150px">
</span>


