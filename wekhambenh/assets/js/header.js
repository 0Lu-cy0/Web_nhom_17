$(function(){
  $("#header").load("header.html"); 
});

function logout() {
  alert('You have been logged out.');
  localStorage.removeItem('selectedPage'); // Xóa trạng thái đã chọn khi đăng xuất
  window.location.href = 'dang_nhap.html'; // Chuyển hướng đến trang đăng nhập
}
