// var fs = require('fs');

// // json file with the data
// var data = fs.readFileSync('db.json');
// var elements = JSON.parse(data);
// const express = require('express');
// const app = express();

// const connect = require('./Config/db');
// const Usercontroller = require('./controllers/usercontroller');
// const { register, login } = require('./controllers/authcontroller');
// app.use(express.json());
// const cors = require('cors');
// let port = process.env.PORT || 5000;
// app.use(
//   cors({
//     origin: 'http://127.0.0.1:5500',
//   })
// );
// app.use('/user', Usercontroller);
// app.post('/register', register);
// app.post('/login', login);

// app.listen(port, async () => {
//   try {
//     console.log('listening on port 5000');
//     await connect();
//   } catch (err) {
//     console.log(err);
//   }
// });

const jsonServer = require("json-server");
const connect = require("./Config/db");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8080;

server.listen(port, async () => {
  await connect();
  console.log(`JSON Server is running on port ${port}`);
});
