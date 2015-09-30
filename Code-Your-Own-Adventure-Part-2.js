function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

console.log("A bright light shines in your eyes as you open them");
sleep(6000);
console.log("As you look around you don't recognize anything");
sleep(6000);
console.log("Spreading out in all directions is a vast desert");
sleep(6000);
console.log("The only thing in this endless wasteland of sand is an old, destroyed castle");
sleep(6000);
console.log("This... is where you are");
sleep(6000);
console.log("What was your past? How did you get here? You can't remember...");
sleep(6000);
console.log("As you stare off into the endless dunes it hit's you");
sleep(2000);

var greeting = function(name) {
    console.log("Your name was " + name);
};
greeting(prompt("What is your name?"));

console.log("Remembering this small fragment of yourself you think of what to do next");
sleep(8000);
console.log("Far off in the West you see what looks like a speck of green");
sleep(3000);
console.log("When you look down from the tower you see there are a lot of buildings which look to be locked");

var castleStart = prompt("");
