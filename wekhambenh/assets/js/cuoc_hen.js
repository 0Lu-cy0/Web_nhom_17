$(document).ready(function() {
    // Show noti-box when clicking on Cancel
    $('.cancel').click(function() {
        $(this).closest('.frame-52').find('.noti-box').show();
    });

    // Show noti-box-2 when clicking on Done
    $('.done').click(function() {
        $(this).closest('.frame-52').find('.noti-box-2').show();
    });

    // Remove appointment-card and show success-box when clicking Yes in noti-box
    $('#yes-btn').click(function() {
        $(this).closest('.frame-52').remove();
        $(this).siblings('.success-box').show();
    });

    // Remove appointment-card and show success-box-2 when clicking Yes in noti-box-2
    $('#yes-btn-2').click(function() {
        $(this).closest('.frame-52').remove();
        $(this).siblings('.success-box-2').show();
    });

    // Hide notification boxes when clicking No or OK
    $('.no, .ok').click(function() {
        $(this).closest('.noti-box, .success-box').hide();
    });

    // Hide notification boxes when clicking the close button (x)
    $('.close').click(function() {
        $(this).closest('.noti-box, .success-box').hide();
    });
});
