// Simple static file server for local use
// The app calls Anthropic API directly from the browser
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Открыть в браузере: http://localhost:${PORT}`);
  console.log(`Для телефона в той же Wi-Fi сети: http://<IP_компьютера>:${PORT}`);
  console.log(`Найти IP: ipconfig (Windows) или ifconfig/ip addr (Linux/Mac)`);
});
