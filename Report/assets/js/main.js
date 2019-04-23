document.getElementById("year").innerHTML = new Date().getFullYear();

function appdrawer(){
    var app = document.getElementsByClassName('app-drawer')[0];
    if (app.classList.contains('closed') == true){
        app.classList.remove('closed');
        app.classList.add('open')
    } else {
        app.classList.remove('open');
        app.classList.add('closed')
    }
};

function appclose(){
    var app = document.getElementsByClassName('app-drawer')[0];
    if (app.classList.contains('open') == true){
        app.classList.remove('open');
        app.classList.add('closed')
    }
};