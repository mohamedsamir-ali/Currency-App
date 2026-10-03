document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const downloadButtons = document.querySelectorAll(
        'a[href="./app-release.apk"]'
    );

    downloadButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("CurrencyApp APK download started");
        });
    });

});