const button = document.getElementById("randomButton");
const result = document.getElementById("result");

const things = [
    "🐸 You have been visited by a frog.",
    "💀 You probably shouldn't have pressed that.",
    "🍕 You deserve pizza.",
    "🦆 A duck is judging you.",
    "🚀 You have been launched into space.",
    "🎉 CONGRATULATIONS! You did absolutely nothing.",
    "🧙 You are now legally a wizard.",
    "🌳 You should go touch some grass."
];

button.addEventListener("click", function() {

    const randomNumber = Math.floor(Math.random() * things.length);

    result.textContent = things[randomNumber];

});
