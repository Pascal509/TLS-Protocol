import https from 'https';
import fs from 'fs';
import express from 'express';

const app = express();

// Load TLS key and certificate
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

app.get('/', (req, res) => {
  res.send('Hello, TLS-secured world!');
});

https.createServer(options, app).listen(4430, () => {
  console.log('🔒 HTTPS server running at https://localhost:4430');
});
