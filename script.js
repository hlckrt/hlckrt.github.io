const button = document.getElementById("randomButton");
const result = document.getElementById("result");

const things = [
    "opps going kind compliation",
    "acouscous",
    "Mr criddle made this beat! (the crups helped)",
    "new album criddle files dropping soon",
    "mr criddle is the goat",
    "pov i pull up with the crups"
];

button.addEventListener("click", function() {

    const randomNumber = Math.floor(Math.random() * things.length);

    result.textContent = things[randomNumber];

});
