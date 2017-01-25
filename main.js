function signup() {
    console.log("pressed signup button");


}

function login() {
    console.log("pressed login button");


}

function init() {

    var classname = document.getElementsByClassName("day");

    var myFunction = function () {
        console.log(this);
        // var attribute = this.getAttribute("data-myattribute");
        // alert(attribute);
    };

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', myFunction, false);
    }

}
