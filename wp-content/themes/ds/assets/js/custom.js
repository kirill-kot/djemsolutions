$(document).ready(function () {
    var frontTopSliderText = new Swiper('#frontTopSliderText', {
        slidesPerView: 1,
        observer: true,
        simulateTouch: false
    });
    var frontTopSliderImg = new Swiper('#frontTopSliderImg', {
        slidesPerView: 1,
        observer: true,
        simulateTouch: false
    });

    var techSliderText = new Swiper('#techSliderText', {
        slidesPerView: 1,
        observer: true,
        loop: true,
        simulateTouch: false
    });
    var techSliderImg = new Swiper('#techSliderImg', {
        slidesPerView: 1,
        observer: true,
        loop: true,
        simulateTouch: false
    });
    var techSliderTextInstance = document.querySelector('#techSliderText').swiper;
    var techSliderImgInstance = document.querySelector('#techSliderImg').swiper;
    $('.controls__right').on('click', function(){
        techSliderTextInstance.slideNext();
        techSliderImgInstance.slideNext();
    });
    $('.controls__left').on('click', function(){
        techSliderTextInstance.slidePrev();
        techSliderImgInstance.slidePrev();
    });

});