window.onload = function () {
    "use script"
    document.getElementById('decoration').onclick = function(){
        setInterval(onClick, 500);
    }

    function onClick(){
        let computedFontSize = window.getComputedStyle(document.getElementById('text')).fontSize;
        let fontSize = parseInt(computedFontSize);
        document.getElementById('text').style.fontSize=(fontSize+2)+'px';
    }

    document.getElementById('bling').onchange = function(){
        onChange();
    }

    function onChange() {
        if(bling.checked){
            document.getElementById('text').style.color="green";
            document.getElementById('text').style.textDecoration="underline";
            document.getElementById('background').style.backgroundImage=
                "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
        }
        else{
            document.getElementById('text').style.color="black";
            document.getElementById('text').style.textDecoration="none";
            document.body.style.backgroundImage="none";
        }
    }
    document.getElementById('igpay').onclick = function(){
        igpayAtinlay();
    }

    function igpayAtinlay(){
        let str = document.getElementById('text').value;
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let newStr = "";

        if (vowels.indexOf(str[0]) > -1) {
            newStr = str + "-yay";
            text.value = newStr;
        } else {
            let firstMatch = str.match(/[aeiou]/g) || 0;
            let vowel = str.indexOf(firstMatch[0]);
            newStr = str.substring(vowel) + '-'+str.substring(0, vowel) + "ay";
            text.value = newStr;
        }
    }

    document.getElementById("malkovitch").onclick = function() {
        const originalText = text.value;
        let newWord = "";
        let wordsArray = originalText.trim().split(" ");

        for(let i=0; i<wordsArray.length; i++){
            console.log(wordsArray[i]);
            if(wordsArray[i].length>=5){
                newWord += "Malkovitch ";
            }
            else{
                newWord += wordsArray[i]+" ";
            }
            text.value=newWord;
        }
    }
}
