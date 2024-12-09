// The File is used to write the JavaScript code for the application.
$(document).ready(function () {
    // Toggle navbar collapse based on screen width
    function toggleDropdown() {
        if ($(window).width() < 992) {
            $('.navbar-nav').addClass('dropdown-menu');
            $('.navbar-nav').removeClass('navbar-nav');
        } else {
            $('.dropdown-menu').addClass('navbar-nav');
            $('.dropdown-menu').removeClass('dropdown-menu');
        }
    }

    // Initial check
    toggleDropdown();

    // Check screen width on resize
    $(window).resize(function () {
        toggleDropdown();
    });

    // Toggle dropdown menu on click
    $('.navbar-toggler').click(function () {
        $('#navbarNav').slideToggle(); // Smooth dropdown animation
    });

    // Handle form submission
    $('#loginForm').submit(function (event) {
        event.preventDefault(); // Prevent form submission
        const username = $('#username').val();
        const password = $('#password').val();
        if (username === '' || password === '') {
            alert('Please fill out all fields!');
        } else {
            alert('Welcome, ' + username + '!');
        }
    });
});