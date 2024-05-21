
  // Xử lý khi nhấn vào nút Đăng xuất
  document.getElementById('logoutButton').addEventListener('click', function() {
      // Xóa thông tin người dùng (nếu có)
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('address');
      localStorage.removeItem('phoneNumber');
      localStorage.removeItem('emailAddress');
      localStorage.removeItem('password');
      localStorage.removeItem('profileImage');

      // Chuyển hướng đến trang Đăng nhập
      window.location.href = 'dang_nhap.html'; // Thay thế 'login.html' bằng đường dẫn thực tế của trang Đăng nhập
  }); 