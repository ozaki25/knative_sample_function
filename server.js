const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const port = process.env.PORT || 8888;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.post('/', (req, res) => {
  const { value } = req.body;
  console.log(value);
  const command = `curl http://localhost:32380/ -H 'Host: fighters.default.example.com' -H 'Content-Type: text/plain' -w '\n' -d ${value}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`[ERROR] ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    return res.send(stdout);
  });
});

app.listen(port, () => {
  console.log(`app start listening on port ${port}`);
});
