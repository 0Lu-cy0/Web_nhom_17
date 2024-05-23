function navigateToPage(page) {
  localStorage.setItem('selectedPage', page);
  window.location.href = page;
}

function loadMenu() {
  var selectedPage = localStorage.getItem('selectedPage');
  if (selectedPage) {
    var selectedFrame = document.querySelector('[onclick="navigateToPage(\'' + selectedPage + '\')"]');
    if (selectedFrame) {
      selectedFrame.classList.add('selected');
    }
  }
}

$(function () {
  $("#left").load("left.html", function () {
    loadMenu();
  });
});
