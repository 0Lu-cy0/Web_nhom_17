function showDiv(id) {
    var divs = document.getElementsByClassName('frame37');
    var menuItems = document.getElementsByClassName('frame33')[0].children;

    // Hide all divs
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    // Remove active class from all menu items
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }

    // Show the selected div
    document.getElementById(id).style.display = 'block';

    // Add active class to the clicked menu item
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].getAttribute('onclick') === "showDiv('" + id + "')") {
            menuItems[i].classList.add('active');
        }
    }
}