let currentBoxId = "";

// Show confirmation modal
function showModal(boxId, message) {
    currentBoxId = boxId;
    console.log('currentBoxId set to:', currentBoxId);  // Debug
    let modal = document.getElementById('myModal');
    let modalText = document.getElementById('modalText');
    let noButton = document.getElementById('noButtonModal');
    
    modalText.innerHTML = `<div class="custom-text">${message}</div>`;
    modal.style.top = "0";
    modal.classList.add('show');
    
    // Close modal when clicking "No" or close button
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.top = "-100%";
        modal.classList.remove('show');
    }
    noButton.onclick = function () {
        modal.style.top = "-100%";
        modal.classList.remove('show');
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.top = "-100%";
            modal.classList.remove('show');
        }
    }
}

// Remove the appointment card and show success modal
function removeBox() {
    console.log('Attempting to remove box with ID:', currentBoxId);  // Debug
    let box = document.getElementById(currentBoxId);
    if (box) {
        box.parentNode.removeChild(box);
        console.log('Box removed');  // Debug
        let modal = document.getElementById('myModal');
        modal.style.top = "-100%";
        modal.classList.remove('show');
        showSuccessModal('Appointment deleted!');
    } else {
        console.error('Box with ID ' + currentBoxId + ' not found.');
    }
}

// Show success modal
function showSuccessModal(message) {
    let modal = document.getElementById('successModal');
    let modalText = document.getElementById('successModalText');
    
    modalText.innerHTML = `<div class="success-message">${message}</div>`;
    modal.style.top = "0";
    modal.classList.add('show');
    
    let span = document.getElementsByClassName("close")[1];
    span.onclick = function () {
        modal.style.top = "-100%";
        modal.classList.remove('show');
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.top = "-100%";
            modal.classList.remove('show');
        }
    }
}

// Close the success modal
function closeSuccessModal() {
    let modal = document.getElementById('successModal');
    modal.style.top = "-100%";
    modal.classList.remove('show');
}
