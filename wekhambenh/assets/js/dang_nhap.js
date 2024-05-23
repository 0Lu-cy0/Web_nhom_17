document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        var email = document.querySelector('.Email').value.trim();
        var password = document.querySelector('.password').value.trim();

        // Lấy dữ liệu từ localStorage
        var storedEmail = localStorage.getItem('emailAddress');
        var storedPassword = localStorage.getItem('password');

        if (email === "" || password === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
        } else if (email === storedEmail && password === storedPassword) {
            alert("Đăng nhập thành công!");
            // Chuyển hướng đến trang khác sau khi đăng nhập thành công
            window.location.href="trang_tong_quan.html"
        } else {
            alert("Email hoặc mật khẩu không chính xác.");
        }
    });
});