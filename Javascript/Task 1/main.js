var random_number;
var i = 10;

function main() {
    random_number = getRandomArbitrary();
    alert(random_number);
};


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (20 - 10) + 10);
};

function guess() {
    var user_input = document.getElementById("guess").value;
    if (user_input == random_number) {
        document.getElementById("result").innerHTML = "You're right!";
    } else {
        document.getElementById("result").innerHTML = "You're wrong! You have " + i + " guesses left.";
        document.getElementById("guess").value = "";
        i = i-1;
    };
    if (i == -1) {
        document.getElementById("guess").disabled = true;
    };
};