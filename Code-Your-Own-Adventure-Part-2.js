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
//hi

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
                console.log("You approach the village and a night black fox comes out of the first house");
                sleep(6000);
                console.log("A sharp stick is laying by your foot, you grab it and clench it in your fist");
                sleep(4000);
                function foxBack() {
                    console.log("You charge the fox");
                }
                    sleep(2000);
                    var slayingWood = true;
                    var youHit = Math.floor(Math.random() * 100);
                    var damageThisRound = Math.floor(Math.random() * 5 + 1);
                    var totalDamage = 0;
                    while(slayingWood) {
                        if(youHit > 21) {
                            console.log("You hit the fox and did " + damageThisRound + " damage!");
                            totalDamage += damageThisRound;

                            if(totalDamage >= 4) {
                                console.log("The stick pierces the foxes hide and it lays limp on the dirt floor");
                                slayingWood = false;
                                sleep(6000);
                                console.log("You make a holster for your wooden stick out of a hole in your pants and investigate the building it came out of");
                                sleep(6000);
                                console.log("Inside is the remains of a man, rotting away by time");
                                sleep(6000);
                                console.log("Besides the corpse the stray hut is empty as if whoever lived here had deserted");
                                sleep(6000);
                                console.log("You check the rest of the huts....");
                                sleep(6000);
                                console.log("Their all burnt down to nothing, however in the center of the village you find an old rusty automobile");
                                sleep(6000);
                                console.log("Right as you start to check out the car a loud scream comes echoing out from deep in forest");
                                var oldAutomobile = prompt("What will you do? (Check Car or Go to Scream");
                                switch(oldAutomobile) {
                                    case "Check Car":
                                        console.log("You attempt to hot wire the car");
                                        sleep(6000);
                                        var startingCar = true;
                                        var itStarted = Math.floor(Math.random() * 10);
                                        while(startingCar) {
                                            if(itStarted <= 5) {
                                                console.log("The car comes to life...");
                                                startingCar = false;
                                                sleep(6000);
                                                console.log("The cars gas indicator says the automobile is at half a tank");
                                                sleep(6000);
                                                console.log("............................Continue Here...................................");
                                            }
                                            else {
                                                console.log("The car failed to start...");
                                                sleep(6000);
                                                startingCar = false;
                                                console.log("...........................Continue Here...................................");
                                            }
                                        }
                                        break;
                                }
                            }
                            else {
                                youHit = Math.floor(Math.random() * 2);
                                console.log("..................................Continue Here................................")
                            }
                        }
                        else {
                            console.log("The fox leaps and gets you on the neck");
                            slayingWood = false;
                            sleep(6000);
                            console.log("You fall on the floor and watch as your life slips away");
                            alert("Restarting");
                            foxBack();
                        }
                    }
                break;
            case "Follow Village Path":
                console.log("");
                break;
            default:
                console.log("Finding both the village and path sketchy you head the opposite direction and follow the tree line North");
                sleep(6000);
                console.log("..........................................Continue Here................................");
                break;
        }
        break;
    case "Locked Buildings":
        console.log("You descend the stairs and exit the inner castle into the outer keep");
        backLocked();
        sleep(6000);
        function backLocked() {
            sleep(6000);
            console.log("A building with a stone chimney and black iron anvil draws your attention");
            sleep(6000);
            console.log("You break down the front door and walk in to find a fully equipped armory");
            sleep(6000);
            console.log("Along the wall's you see a Mace and Shield, a pair of Swords, and a War Axe");
            sleep(6000);
            var weaponDamage = [ "Mace and Shield is strong against bulky creatures", "the Swords are strong against giant waves of animals", "War Axe is strongest against giant monsters" ];
            var weaponChoose = prompt("Which weapon will you take? (Mace and Shield, Swords or War Axe");
            switch(weaponChoose) {
                case "Mace and Shield":
                    console.log("Picking up the Mace and Shield you strike the ground with the mace");
                    sleep(6000);
                    console.log("The mace thuds into the ground and looks to be in great shape");
                    sleep(6000);
                    console.log("Your shield appears to be a little rusted but is sturdy enough");
                    sleep(6000);
                    console.log(weaponDamage[0]);
                    sleep(6000);
                    break;
                case "Swords":
                    console.log("Picking up the Swords you swing them around");
                    sleep(6000);
                    console.log("They hiss as you slice through the air");
                    sleep(6000);
                    console.log("The Swords appear to be in perfect condition with only one speck of rust");
                    sleep(6000);
                    console.log(weaponDamage[1]);
                    sleep(6000);
                    break;
                case "War Axe":
                    console.log("Picking up the War Axe you take a swing at the door");
                    sleep(6000);
                    console.log("Despite the marks of rust on the iron of the blade");
                    sleep(6000);
                    console.log("The door splinters into pieces leaving an empty doorway when the door use to be");
                    sleep(6000);
                    console.log(weaponDamage[2]);
                    sleep(6000);
                    break;
                default:
                    console.log("");
                    break;
            }
        }
        break;
    case "Into the Dunes":
        console.log("You leave the castle and wander out into the Dunes without even looking back at the castle");
        sleep(6000);
        console.log("After several hours the scenery has yet to change....");
        sleep(6000);
        console.log("It feels as if days have passed, you collapse onto the soft sand and slowly drift unconscious");
        sleep(6000);
        console.log("...You are barely conscious....There is someone next to you...The endless dunes are gone and a warm tent surrounds you");
        sleep(8000);
        console.log( "'" + name + ", wake up its me!' a voice calls out");
        sleep(6000);
        console.log("Coming back to consciousness you look around and see the warm pillows and rugs covering the huge 10 man tent");
        sleep(6000);
        console.log("To your side is a young female, her hair is a deep red and her face is gentle yet pretty");
        sleep(6000);
        console.log("Who are you?");
        sleep(6000);
        console.log("'Your sister' She responds");
        sleep(6000);
        alert("to be continued");
        break;
    default:
        console.log("Standing around confused you descend to the bottom of the keep");
        sleep(6000);
        console.log("Your interest sparks as you stare at the locked buildings");
        sleep(6000);
        backLocked();
        break;
}
