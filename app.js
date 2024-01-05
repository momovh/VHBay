// File: app.js

const express = require('express');
const mongoose = require('./server/config/configdatabase');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để xử lý JSON và các yêu cầu x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Định tuyến chính
app.get('/', (req, res) => {
  res.send('Chào mừng đến với VHBay!');
});

// Bắt đầu lắng nghe cổng
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
