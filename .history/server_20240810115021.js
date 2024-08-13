// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 捕获所有其他路由并返回主页面
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
