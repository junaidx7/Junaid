document.addEventListener("DOMContentLoaded", function () {

    var link1 = document.getElementById("responsivelink-1");
    var link2 = document.getElementById("responsivelink-2");
    var link3 = document.getElementById("responsivelink-3");
    var popup = document.getElementById("popup");
    var closeButton = document.getElementById("close-btn");
    var overlay =document.getElementById("overlay");

    // Check if the device is a mobile device
    function isMobileDevice() {

        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    // Handle link click event
    link1.addEventListener("click", function (event) {
        // Prevent the default action
        event.preventDefault();

        // If it's a mobile device, show the popup
        if (isMobileDevice()) {
            popup.style.display = "block";
            overlay.style.display = "block";
            

        } else {
            // Otherwise, redirect to the target page
            window.location.href = link1.getAttribute("href");
        }
    });

    link2.addEventListener("click", function (event) {
        // Prevent the default action
        event.preventDefault();

        // If it's a mobile device, show the popup
        if (isMobileDevice()) {
            popup.style.display = "block";
            overlay.style.display = "block";
            

        } else {
            // Otherwise, redirect to the target page
            window.location.href = link1.getAttribute("href");
        }
    });

    link3.addEventListener("click", function (event) {
        // Prevent the default action
        event.preventDefault();

        // If it's a mobile device, show the popup
        if (isMobileDevice()) {
            popup.style.display = "block";
            overlay.style.display = "block";
            

        } else {
            // Otherwise, redirect to the target page
            window.location.href = link1.getAttribute("href");
        }
    });


    // Close button click event
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });


});