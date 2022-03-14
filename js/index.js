console.log('Hello');
var burgerButton = document.getElementsByClassName("header_phone")[0];
var burgerMenu = document.getElementsByClassName("header_desktop")[0];
var sliderItem = document.getElementsByClassName("slider_item");
var sliderButtons = document.getElementsByClassName("slider_btn");
burgerButton.addEventListener("touchstart", function () {
    burgerButton.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});
var _loop_1 = function (i) {
    sliderItem[i].addEventListener("mousemove", function () {
        for (var i_1 = 0; i_1 < sliderItem.length; i_1++) {
            if (sliderItem[i_1].classList.contains("activate")) {
                sliderItem[i_1].classList.remove("activate");
                sliderButtons[i_1].classList.remove("activate");
            }
        }
        sliderItem[i].classList.add("activate");
        sliderButtons[i].classList.add("activate");
    });
    sliderButtons[i].addEventListener("click", function () {
        for (var i_2 = 0; i_2 < sliderItem.length; i_2++) {
            if (sliderItem[i_2].classList.contains("activate")) {
                sliderItem[i_2].classList.remove("activate");
                sliderButtons[i_2].classList.remove("activate");
            }
        }
        sliderItem[i].classList.add("activate");
        sliderButtons[i].classList.add("activate");
    });
};
for (var i = 0; i < sliderItem.length; i++) {
    _loop_1(i);
}
