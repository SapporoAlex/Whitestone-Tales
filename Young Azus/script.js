//Add more location objects. Have functions that change location objects based on incremental variables

//Add



//so far for the basic ver I just need img, text, and options
const topBox = document.getElementById("top-box");
const gameImage = document.getElementById("game-image");

//characters, items etc, will go here eventually

const textBox = document.getElementById("text-box");
const textBoxText = document.getElementById("text-box-text");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");


let gameOver = false;

// things that can be done once
let spokeToMother = 0;
let spokeToFather = 0;
let spokeToSister = 0;
let spokeToNeighboor = 0;
let spokeToGoon1 = 0;
let spokeToGoon2 = 0;
let spokeToWarlock = 0;
let ateBreakfast = 0;

// locations visited
let enteredMainroom = 0;
let enteredFrontGarden = 0;
let enteredRearGarden = 0;
let enteredWoods = 0;
let enteredRiver = 0;
let enteredGate = 0;
let enteredRoad = 0;

//incremental events, reading pages, collecting items, minutes passed, games played etc.
let lookedOutWindow = 0;
let readDiary = 0;
let consideredSleep = 0;
let gamesWithSister = 0;
let beatSister = 0;
let beatenBySister = 0;


class Character {
    constructor(name, alive, image_path, start_loc)
    {
        this.name = name;
        this.alive = alive;
        this.image_path = image_path;
        this.start_loc = start_loc;
    }
}

class Item {
    constructor(name, exists, image_path, start_loc, cur_loc)
    {
        this.name = name;
        this.exists = exists;
        this.image_path = image_path;
        this.start_loc = start_loc;
        this.cur_loc = cur_loc;
    }
}

class Location {
    constructor(name, option1, option2, option3, option4, image_path, text) 
    {
        this.name = name;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.image_path = image_path;
        this.text = text;
    }
}

let bedroom = new Location("Bed Room", "main room", "window", "desk", "bed", "assets/", "You wake up in your family bedroom. The Autumn morning brings a crisp breeze. It looks like your family let you sleep in today. I should get up and make myself useful.");
let mainroom = new Location("Main Room", "mother", "fireplace", "table", "frontyard", "assets/", "You enter the main room of the house. Your mother is cutting vegetables in the kitchen. 'Good morning Azus!' she says. As always she has prepared some breakfast for you, and placed it on the table.");

function winGame() {
    gameOver == true;
}
