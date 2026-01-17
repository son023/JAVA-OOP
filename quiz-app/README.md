# OOP Java Quiz Application

Ứng dụng trắc nghiệm OOP Java với giao diện đẹp, hiện đại được xây dựng bằng React + Vite.

## ✨ Tính năng

- 🎯 20 câu hỏi trắc nghiệm về OOP Java
- ✅ Hiển thị đáp án đúng/sai ngay lập tức
- 📊 Theo dõi điểm số real-time
- 🎨 Giao diện đẹp, modern với animations
- 📱 Responsive design - hoạt động tốt trên mọi thiết bị
- 🔄 Xem lại tất cả câu trả lời sau khi hoàn thành
- 💡 Hiển thị code examples với syntax highlighting

## 🚀 Cài đặt

### Yêu cầu
- Node.js (version 14 hoặc cao hơn)
- npm hoặc yarn

### Các bước cài đặt

1. Di chuyển vào thư mục quiz-app:
```bash
cd quiz-app
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng ở chế độ development:
```bash
npm run dev
```

4. Mở trình duyệt và truy cập:
```
http://localhost:5173
```

## 📦 Build cho production

```bash
npm run build
```

Sau khi build xong, các file sẽ được tạo trong thư mục `dist/`.

## 🎮 Cách sử dụng

1. Đọc câu hỏi và code example (nếu có)
2. Chọn một trong 4 đáp án (A, B, C, D)
3. Xem ngay kết quả đúng/sai
4. Nhấn "Next" để chuyển sang câu tiếp theo
5. Nhấn "Previous" để quay lại câu trước
6. Sau khi hoàn thành, xem tổng điểm và review lại các câu trả lời

## 🔧 Tùy chỉnh

### Thêm câu hỏi mới

Chỉnh sửa file `src/questions.js` và thêm câu hỏi theo format:

```javascript
{
  question: "Câu hỏi của bạn?",
  options: {
    A: "Đáp án A",
    B: "Đáp án B",
    C: "Đáp án C",
    D: "Đáp án D"
  },
  correctAnswer: "A", // Đáp án đúng
  code: `// Code example (có thể để null nếu không có)
class Example {
  void method() {
    System.out.println("Hello");
  }
}`
}
```

### Thay đổi màu sắc

Chỉnh sửa file `src/App.css` để thay đổi theme màu sắc theo ý bạn.

## 📄 Cấu trúc thư mục

```
quiz-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── questions.js
└── README.md
```

## 🎨 Công nghệ sử dụng

- React 18
- Vite
- CSS3 (với Flexbox, Grid, Animations)
- JavaScript ES6+

## 📝 License

MIT License - Tự do sử dụng cho mục đích học tập và thương mại.

## 💡 Tips

- Bạn có thể import toàn bộ 200 câu hỏi từ file markdown vào `questions.js`
- Có thể thêm tính năng shuffle câu hỏi
- Có thể thêm timer cho mỗi câu hỏi
- Có thể lưu kết quả vào localStorage

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Feel free to open issues hoặc pull requests.

---

**Chúc bạn học tốt OOP Java! 🚀**

