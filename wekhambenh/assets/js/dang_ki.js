document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sign').addEventListener('click', function() {
        var ho = document.getElementById('First name').value.trim();
        var ten = document.getElementById('Last name').value.trim();
        var diaChi = document.getElementById('Address').value.trim();
        var soDienThoai = document.getElementById('Phone number').value.trim();
        var email = document.getElementById('Email address').value.trim();
        var matKhau = document.getElementById('Password').value.trim();

        function kiemTraTen(name) {
            for (var i = 0; i < name.length; i++) {
                var char = name.charAt(i);
                if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
                    return false;
                }
            }
            return true;
        }

        function kiemTraSoDienThoai(phone) {
            for (var i = 0; i < phone.length; i++) {
                if (!(phone.charAt(i) >= '0' && phone.charAt(i) <= '9')) {
                    return false;
                }
            }
            return true;
        }

        function kiemTraEmail(email) {
            var atSymbol = email.indexOf("@");
            if (atSymbol < 1) return false;

            var dot = email.indexOf(".");
            if (dot <= atSymbol + 2) return false;

            if (dot === email.length - 1) return false;

            return true;
        }

        function kiemTraMatKhau(password) {
            var hasLetter = false;
            var hasNumber = false;
            if (password.length < 8) return false;

            for (var i = 0; i < password.length; i++) {
                var char = password.charAt(i);
                if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
                    hasLetter = true;
                } else if (char >= '0' && char <= '9') {
                    hasNumber = true;
                }
            }
            return hasLetter && hasNumber;
        }

        if (ho === "" || ten === "" || diaChi === "" || soDienThoai === "" || email === "" || matKhau === "") {
            alert("Vui lòng điền đầy đủ tất cả các trường.");
        } else if (!kiemTraTen(ho) || !kiemTraTen(ten) || !kiemTraTen(diaChi)) {
            alert("Họ, Tên và Địa chỉ phải là chữ.");
        } else if (!kiemTraSoDienThoai(soDienThoai) || soDienThoai.length !== 10) {
            alert("Số điện thoại phải là số và có đúng 10 chữ số.");
        } else if (!kiemTraEmail(email)) {
            alert("Email không đúng định dạng.");
        } else if (!kiemTraMatKhau(matKhau)) {
            alert("Mật khẩu phải gồm cả chữ và số, và ít nhất 8 ký tự.");
        } else {
            localStorage.setItem('ho', ho);
            localStorage.setItem('ten', ten);
            localStorage.setItem('diaChi', diaChi);
            localStorage.setItem('soDienThoai', soDienThoai);
            localStorage.setItem('emailAddress', email); // Sử dụng cùng khóa với đăng nhập
            localStorage.setItem('password', matKhau); // Sử dụng cùng khóa với đăng nhập

            alert("Đăng ký thành công.");
        }
    });
});
