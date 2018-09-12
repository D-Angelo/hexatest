
document.addEventListener("DOMContentLoaded", function() {
    var slider= new Siema({
        selector: '.slides',
        duration: 400,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onChange: function(){
            return  setActiveDot()
        }
    });

    var sliderValues= [{
        caption: "Для спальни",
        value: "50"},
        {
            caption: "Для гостиной",
            value: "70"
        },
        {
            caption: "Для гостиной",
            value: "60"
        },
        {
            caption: "Для кухни",
            value: "40"
        },
        {
            caption: "Для кухни",
            value: "60"
        },
        {
            caption: "Для спальни",
            value: "80"}

    ];
    function setActiveDot () {
        var i=slider.currentSlide;
        var prevDot = document.querySelector(".slider__dot.active");
        prevDot.classList.remove("active");
        var activeDot = document.getElementsByClassName("slider__dot");
        activeDot[i].classList.add("active");
        sliderTitle.innerHTML= sliderValues[i].caption;
        sliderPrice.innerHTML = sliderValues[i].value;
    }
    var sliderTitle = document.getElementsByClassName("slider-descr__text")[0];
    var sliderPrice = document.getElementsByClassName("slider-price__number")[0];
    const prev = document.querySelector('.slider__prev');
    const next = document.querySelector('.slider__next');
    prev.addEventListener('click', function(){return slider.prev()});
    next.addEventListener('click',function(){return slider.next()});
    var sliderControls = document.getElementById("slider-controls");
    for (var i = 0; i < slider.innerElements.length; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.add("slider__dot");
        btn.addEventListener('click', function me(){
            slider.goTo(this.textContent)});
        sliderControls.insertBefore(btn,next);
    }
    var dotActive = document.getElementsByClassName('slider__dot')[0];
    dotActive.classList.add("active");
    setInterval(function(){return slider.next()}, 2000);
resizeBg();
slider.resizeHandler();

});
window.addEventListener("resize", resizeBg, false);

function resizeBg() {
    var wrapperHeight = document.getElementsByClassName("wrapper")[0].offsetHeight-10+"px";
    var slideImg =document.querySelectorAll(".slides img");
    for (var i=0; i<slideImg.length; i++){
        slideImg[i].style.height = wrapperHeight;
    }
}





