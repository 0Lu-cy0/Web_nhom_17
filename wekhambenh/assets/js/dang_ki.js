document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sign').addEventListener('click', function() {
        var firstName = document.getElementById('First name').value;
        var lastName = document.getElementById('Last name').value;
        var address = document.getElementById('Address').value;
        var phoneNumber = document.getElementById('Phone number').value;
        var emailAddress = document.getElementById('Email address').value;
        var password = document.getElementById('Password').value;

        if (firstName === "" || lastName === "" || address === "" || phoneNumber === "" || emailAddress === "" || password === "") {
            alert("Vui lòng điền đầy đủ tất cả các trường.");
        } else {
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('address', address);
            localStorage.setItem('phoneNumber', phoneNumber);
            localStorage.setItem('emailAddress', emailAddress);
            localStorage.setItem('password', password);

            alert("Đăng ký thành cônSg.");

        }
    });
    document.querySelector('.profile').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });
});
