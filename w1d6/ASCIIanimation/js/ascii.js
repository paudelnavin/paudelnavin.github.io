(function(){

    "use strict"

    window.onload = function(){
        document.getElementById("animation").onchange = getAnimationPage;
        document.getElementById("fontsize").onchange = setAnimationSize;
        document.getElementById("start").onclick = startClickHandler;
        document.getElementById("stop").onclick = stopClickHandler;
    };

    function getAnimationPage(){
        let e = document.getElementById("animation");
        let v = document.getElementById("text-area")
        if(e.value === "Blank"){
            v.innerHTML = BLANK;
        }else if(e.value === "Exercise"){
            v.innerHTML = EXERCISE;
        }else if(e.value === "Juggler"){
            v.innerHTML = JUGGLER;
        }else if(e.value === "Bike"){
            v.innerHTML = BIKE;
        }else if(e.value === "Dive"){
            v.innerHTML = DIVE;
        }
    }

    function setAnimationSize(){
        let e = document.getElementById("fontsize");
        let v = document.getElementById("text-area");
        if(e.value === "Tiny"){
            v.style.fontSize = "7pt";
        }else if(e.value === "Small"){
            v.style.fontSize = "10pt";
        }else if(e.value === "Medium"){
            v.style.fontSize = "12pt";
        }else if(e.value === "Large"){
            v.style.fontSize = "16p";
        }else if(e.value === "ExtraLarge"){
            v.style.fontSize = "24pt";
        }else if(e.value === "XXL"){
            v.style.fontSize = "32pt";
        }
    }

    var x = null;
    var i;

    function startClickHandler(){
        let v = document.getElementById("text-area");
        let arr = v.innerHTML.split("=====");
        console.log(arr);
        let s;
        if(document.getElementById("turbo").checked){
            s = 50;
        }else{
            s = 250;
        }
        x = setInterval(myAnimate, s);

        function myAnimate(){
            if(i === undefined){
                i = 0;
            }else if(i < (arr.length - 1)){
                i = i + 1;
            }else if(i === (arr.length - 1)){
                i = 0;
            }
            v.innerHTML = arr[i];
            document.getElementById("start").disabled = true;
            document.getElementById("animation").disabled = true;
            document.getElementById("stop").disabled = false;
        }
    }

    function stopClickHandler(){
        clearInterval(x);
        getAnimationPage();
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
    }

})();