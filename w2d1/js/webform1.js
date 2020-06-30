window.onload = function () {
    "use script"
    document.getElementById('submit').onclick = function () {
        let username = document.getElementById('emailid').value;
        // regex = new RegExp("E00", "i");
        let regex = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/;
        }

    document.getElementById('submit').onclick = function () {
        let password = document.getElementById('password').value;
        // regex = new RegExp("E00", "i");
        let regex = /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    }
}