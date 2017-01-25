function signup() {
    console.log("pressed signup button");


}

function login() {
    console.log("pressed login button");


}

function init() {

    var classname = document.getElementsByClassName("day");

    var myFunction = function() {
        // console.log(this);
        // console.log(this.innerHTML);
        console.log('date:' + this.getAttribute("date"));
        var date = this.date;
        var dateSpan = document.createElement('span')
        dateSpan.innerHTML = this.innerHTML;
        dateSpan.className += "active";
        console.log(this.childNodes);

        var button = this.getElementsByClassName('add-button')['button'];

    };

    var addFunction = function() {
        console.log("button pressed");
        var date = this.parentElement.getAttribute("month") + " " + this.parentElement.getAttribute("date");
        console.log("date:" + date);
    }

    for (var i = 0; i < classname.length; i++) {
        // classname[i].addEventListener('click', myFunction, false);
        if (classname[i].getElementsByClassName('add-button')['button']) {
            classname[i].getElementsByClassName('add-button')['button'].addEventListener('click', addFunction, false);
        }
    }


}
