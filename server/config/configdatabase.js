// File: configdatabase.js

const mongoose = require('mongoose');

// Chuỗi kết nối MongoDB
const mongoUri = 'mongodb+srv://vuhaclab:220291@vhlab.3uqaajy.mongodb.net/';

// Cấu hình kết nối
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Kiểm tra kết nối
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Kết nối đến MongoDB thất bại:'));
db.once('open', () => {
  console.log('Đã kết nối đến MongoDB!');
});

module.exports = mongoose;
