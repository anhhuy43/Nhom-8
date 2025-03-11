const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Cấu hình thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Định tuyến trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
