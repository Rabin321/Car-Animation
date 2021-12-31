$(document).ready(function(){
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['images/carroff.png','images/carrr.png'];

    //event keypress
    // $(document).on('keypress',function(e){
    //     console.log(e.which);   // to find the key code of key.This will print in console in web.
    // })

     //event keypress
    $(document).on('keypress',function(e){
        if(e.which == 32){ // key code for space.
            $($surface).toggleClass('moveright');
            $($car).toggleClass('suspension');
        }
    })

    //headlights
    $(document).on('keypress',function(e){
        if(e.which == 108){
            if(flag){
                flag = false;
                $img.attr('src',cars[1]);
            }else{
                flag = true;
                $img.attr('src',cars[0]);
            }
        }
       
    })



});