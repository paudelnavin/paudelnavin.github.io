window.onload = function () {
    "use script"
    document.getElementById('submit').onclick = function validate() {
        let username = document.getElementById('email').value;
        // regex = new RegExp("E00", "i");
        let regex = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

            if(regex.test(username)){
                document.getElementById('blush1').innerHTML="Valid";
                document.getElementById('blush1').style.color="green";
                document.getElementById('blush1').style.visibility="visible";
            }else{
                document.getElementById('blush1').innerHTML="Invalid";
                document.getElementById('blush1').style.color="red";
                document.getElementById('blush1').style.visibility="visible";
            }
        }

    document.getElementById('submit').onclick = function validate() {
        let username = document.getElementById('password').value;
        // regex = new RegExp("E00", "i");
        let regex = /^[a-zA-Z0-9].{10,}$/;

        if(regex.test(username)){
            document.getElementById('blush2').innerHTML="Valid";
            document.getElementById('blush2').style.color="green";
            document.getElementById('blush2').style.visibility="visible";
        }else{
            document.getElementById('blush2').innerHTML="Invalid";
            document.getElementById('blush2').style.color="red";
            document.getElementById('blush2').style.visibility="visible";
        }
    }
}