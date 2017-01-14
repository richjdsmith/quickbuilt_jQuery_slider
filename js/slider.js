sliderInt = 1;
sliderNext = 2;


$(document).ready(function(){
    $("#slider > Img#1").fadeIn(300);
    startSlider();
});

function startSlider () {
    count = $("#slider > img").length;
    loop = setInterval(function(){
        if(sliderNext>count){
            sliderNext = 1;
            sliderInt = 1;
        }

        $("#slider > Img").fadeOut(500);
        $("#slider > Img#" + sliderNext).fadeIn(500);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    },3000);
    
}

function prev () {
    newSlide = sliderInt - 1;
    showSlide(newSlide);
}

function next (){
    newSlide = sliderInt + 1;
    showSlide(newSlide);

}

function stopLoop(){
    window.clearInterval(loop);
}

function showSlide(id) {
        stopLoop ();
        if(id>count){
            id = 1;
        }else if(id<1){
            id = count;
        }

        $("#slider > Img").fadeOut(500);
        $("#slider > Img#" + id).fadeIn(500);

        sliderInt = id;
        sliderNext = id + 1;
        startSlider();

}

$("#slider > Img").hover(
    function(){
        stopLoop();
    },
    function(){
        startSlider();
    });