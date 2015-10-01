function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
console.log(".....Decisions are Case sensitive.....");

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
console.log("As you stare off into the endless dunes it hits you");
sleep(2000);

var greeting = function(name) {
    console.log("Your name was " + name);
};
greeting(prompt("What is your name?"));

console.log("Remembering this small fragment of yourself you think of what to do next");
sleep(8000);
console.log("Far off in the West you see what looks like a speck of green");
sleep(6000);
console.log("When you look down from the top of the keep there are a bunch of buildings around the base which look to be locked and untouched");
sleep(6000);
console.log("Besides this there is only a seemingly endless sand dune in every other direction");

var castleStart = prompt("Where would you like to go? (West, Locked Buildings, Into the Dunes)");
switch(castleStart) {
    case "West":
        console.log("Walking out of the castle you look back and see what looks like a lone man standing on the ramparts");
        sleep(6000);
        console.log("As you walk out towards the speck of green in the distance the lone man vanishes like sand in the wind");
        sleep(6000);
        console.log("It feels as if you've been walking for hours....");
        sleep(6000);
        console.log("What use to be a speck of green is now a dense wall of trees marking the end of the desert");
        sleep(6000);
        console.log("Right on the border between the forest and the desert is a small village of five huts");
        sleep(6000);
        console.log("When you get closer you can see a path running out of the village and plunging into the trees");
        sleep(6000);
        var villageStart = prompt("Where would you like to go? (Investigate the Village, Follow Village Path or Other)");
        switch(villageStart) {
            case "Investigate the Village":
                console.log("");
                break;
            case "Follow Village Path":
                console.log("");
                break;
            default:
                console.log("Finding both the village and path sketchy you head the opposite direction and follow the tree line North");
                sleep(6000);
                console.log("");
                break;
        }
        break;
    case "Locked Buildings":
        console.log("You descend the stairs of and exit the inner castle into the outer keep");
        sleep(6000);
        function backLocked() {
            console.log("A building with a stone chimney and black iron anvil draws your attention");
            sleep(6000);
        }
        break;
    case "Into the Dunes":
        console.log("");
        break;
    default:
        console.log("Standing around confused you descend to the bottom of the keep");
        sleep(6000);
        console.log("Your interest sparks as you stare at the locked buildings");
        sleep(6000);
        backLocked();
        break;
}
