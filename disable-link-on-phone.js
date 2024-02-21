document.addEventListener("DOMContentLoaded", function () {

    var link = document.getElementById("responsivelink-1");
    var popup = document.getElementById("popup");
    var closeButton = document.getElementById("close-btn");
    var overlay =document.getElementById("overlay");

    // Check if the device is a mobile device
    function isMobileDevice() {

        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    // Handle link click event
    link.addEventListener("click", function (event) {
        // Prevent the default action
        event.preventDefault();

        // If it's a mobile device, show the popup
        if (isMobileDevice()) {
            popup.style.display = "block";
            overlay.style.display = "block";
            

        } else {
            // Otherwise, redirect to the target page
            window.location.href = link.getAttribute("href");
        }
    });


    // Close button click event
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });


});