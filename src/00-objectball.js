
function gameObject() {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3, 
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12, 
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4, 
                    shoe: 18, 
                    points: 10, 
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo" : {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7, 
                    steals: 7, 
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop" : {
                    number: 2, 
                    shoe: 14,
                    points: 24, 
                    rebounds: 12,
                    assists: 12, 
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon" : {
                    number: 8, 
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood" : {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        }
    }
return obj;

}
console.log(gameObject());

function homeTeamName () {
    let object = gameObject();
    return object["home"]["teamName"];
}
console.log(homeTeamName());

function numPointsScored (name) {
    let homeAway = "away";
    for (let i=0; i<homePlayerNames().length; i++) {
        if (homePlayerNames()[i] === name) {
            homeAway = "home";
        }
    }


    return gameObject()[homeAway].players[name].points;
    
}
console.log(numPointsScored());

function shoeSize (name) {
    let homeAway = "away";
    for (let i =0; i<homePlayerNames().length; i++) {
        if (homePlayerNames()[i] === name) {
            homeAway = "home";
        }
    }
    return gameObject()[homeAway].players[name].shoe;
    
}
console.log(shoeSize());

function teamColors (team) {
    if (team === "Brooklyn Nets") {
        return gameObject().home.colors;
    } else if (team === "Charlotte Hornets") {
        return gameObject().away.colors;
    }
}
console.log(teamColors("Brooklyn Nets"));

function teamNames () {
    const homeArray = Object.values(gameObject().home);
    const awayArray = Object.values(gameObject().away);
    const newArray = [];
    newArray.push(homeArray[0]);
    newArray.push(awayArray[0]);
    return newArray;
}
console.log(teamNames());



function playerNumbers(team) {
    const homeNumbers = [];
    for (const key in gameObject().home.players) {
        homeNumbers.push(gameObject().home.players[key].number);
    }
    const awayNumbers = [];
    for (const key in gameObject().away.players) {
        awayNumbers.push(gameObject().away.players[key].number);
    }
    if (team === "Brooklyn Nets") {
        return homeNumbers;
    }
    else if (team === "Charlotte Hornets") {
        return awayNumbers;
    }
    
}
console.log(playerNumbers());

function playerStats (name) {
    let statsObject;
    let homeAway = "away";
    for (let i = 0; i < homePlayerNames().length; i ++) {
        if (homePlayerNames()[i] === name) {
            homeAway = "home";
        }
    }
    statsObject = gameObject()[homeAway].players[name];
    
    return statsObject;
}
console.log(playerStats());

function homeShoesArray () {
    const homeShoes = [];
    for (const key in gameObject().home.players) {
        homeShoes.push(gameObject().home.players[key].shoe);
    }
    return homeShoes;
}
console.log(homeShoesArray());

function awayShoesArray () {
    const awayShoes = [];
    for (const key in gameObject().away.players) {
        awayShoes.push(gameObject().away.players[key].shoe);
    }
    return awayShoes;
}
console.log(awayShoesArray());

function biggestHomeShoe () {
    return Math.max(...homeShoesArray());
}
console.log(biggestHomeShoe());

function biggestAwayShoe () {
    return Math.max(...awayShoesArray());
}
console.log(biggestAwayShoe());

function biggestShoe() {
    if (biggestHomeShoe() > biggestAwayShoe()) {
        return biggestHomeShoe();
    } else {
        return biggestAwayShoe();
    }
}
console.log(biggestShoe());

function playerWithBiggestShoe () {
    if (biggestShoe() === biggestHomeShoe()) {
        for (const key in gameObject().home.players) {
            if (gameObject().home.players[key].shoe === biggestShoe()) {
                return key;
            }
        }
    }else if (biggestShoe()=== biggestAwayShoe()) {
        for (const key in gameObject().away.players) {
            if (gameObject().away.players[key].shoe === biggestShoe()) {
                return key;
            }
        }
    

    }
}
console.log(playerWithBiggestShoe());

function bigShoeRebounds() {
    for (const key in gameObject()) {
        return gameObject()[key].players[playerWithBiggestShoe()].rebounds;
    }
}
console.log(bigShoeRebounds());

function homePointsArray() {
    const homePoints = [];
    for (const key in gameObject().home.players) {
        homePoints.push(gameObject().home.players[key].points);
    }
    return homePoints;
}
console.log(homePointsArray());

function awayPointsArray () {
    const awayPoints = [];
    for (const key in gameObject().away.players) {
        awayPoints.push(gameObject().away.players[key].points);
    }
    return awayPoints;
}
console.log(awayPointsArray());

function biggestHomePoints () {
    return Math.max(...homePointsArray());
}
console.log(biggestHomePoints());

function biggestAwayPoints() {
    return Math.max(...awayPointsArray());
}
console.log(biggesetAwayPoints());

function biggestPoints () {
    if (biggestHomePoints() > biggestAwayPoints()) {
        return biggestHomePoints();
    } else {
        return biggestAwayPoints();
    }
}
console.log(biggestPoints());

function mostPointsScored() {
    if (biggestPoints() === biggestHomePoints()) {
        for (const key in gameObject().home.players) {
            if (gameObject().home.players[key].points === biggestPoints()) {
                return key;
            }
        }
    } else if (biggestPoints() === biggestAwayPoints()) {
        for (const key in gameObject().away.players) {
            if (gameObject().away.players[key].points === biggestAwayPoints()) {
                return key;
            }
        }
    }
}
console.log(mostPointsScored());

function totalHomePoints () {
    let total = 0;
    for (let i = 0; i < homePointsArray().length; i++) {
        total = total + homePointsArray()[i];
    }
    return total;
}
console.log(totalHomePoints());

function totalAwayPoints () {
    let sum = 0;
    for (let i =0; i < awayPointsArray().length; i++) {
        sum = sum + awayPointsArray()[i];
    }
    return sum;
}
console.log(totalAwayPoints());

function homePlayerNames () {
    const homeNames = Object.keys(gameObject().home.players);
    return homeNames;
}
console.log(homePlayerNames());

function awayPlayerNames() {
    const awayNames = Object.keys(gameObject().away.players);
    return awayNames;
}
console.log(awayPlayerNames());

function lengthOfHomeName () {
    const homeNameLengthArray =[];
    for (let i = 0; i < homePlayerNames().length; i++) {
        homeNameLengthArray.push(homePlayerNames()[i].length);
    }
    return homeNameLengthArray;
}
console.log(lengthOfHomeName());

function lengthOfAwayName () {
    const awayNameLengthArray = [];
    for (let i =0; i < awayPlayerNames().length; i++) {
        awayNameLengthArray.push(awayPlayerNames()[i].length);
    }
    return awayNameLengthArray;
}
console.log(lengthOfAwayName());

function longestHomeNameLength () {
    return Math.max(...lengthOfHomeName());
}
console.log(longestHomeNameLength());

function longestAwayNameLength() {
    return Math.max(...lengthOfAwayName());
}
console.log(longestAwayNameLength());

function longestNameLength () {
    if (longestHomeNameLength()> longestAwayNameLength()) {
        return longestHomeNameLength();
    } else {
        return longestAwayNameLength();
    }

}
console.log(longestNameLength());

function homePlayerLongestName() {
    for (let i = 0; i < homePlayerNames().length; i ++) {
        if (homePlayerNames()[i].length === longestHomeNameLength()) {
            return homePlayerNames()[i];
        }
    }
}
console.log(homePlayerLongestName());

function awayPlayerLongestName() {
    for (let i = 0; i< awayPlayerNames().length; i++) {
        if (awayPlayerNames()[i].length === longestAwayNameLength()) {
            return awayPlayerNames()[i];
        }
    }
}
console.log(awayPlayerLongestName());

function playerWithLongestName () {
    if (longestNameLength() === longestHomeNameLength()) {
        return homePlayerLongestName();
    } else if (longestNameLength() === longestAwayNameLength()) {
        return awayPlayerLongestName();
    }
}
console.log(playerWithLongestName());

function homeStealsArray () {
    const homeSteals = [];
    for (const key in gameObject().home.players) {
        homeSteals.push(gameObject().home.players[key].steals);
    }
    return homeSteals;
}
console.log(homeStealsArray());

function awayStealsArray() {
    const awaySteals = [];
    for (const key in gameObject().away.players) {
        awaySteals.push(gameObject().away.players[key].steals);
    }
    return awaySteals;
}
console.log(awayStealsArray());

function mostHomeSteals () {
    return Math.max(...homeStealsArray());
}
console.log(mostHomeSteals());

function mostAwaySteals() {
    return Math.max(...awayStealsArray());
}
console.log(mostAwaySteals());

function mostSteals() {
    if (mostHomeSteals() > mostAwaySteals()) {
        return mostHomeSteals();
    } else {
        return mostAwaySteals();
    }
}
console.log(mostSteals());

function homePlayerWithMostSteals () {
    for (const key in gameObject().home.players) {
        if (gameObject().home.players[key].steals === mostHomeSteals()) {
            return key;
        }
    }
}
console.log(homePlayerWithMostSteals());

function awayPlayerWithMostSteals () {
    for (const key in gameObject().away.players) {
        if (gameObject().away.players[key].steals === mostAwaySteals()) {
            return key;
        }
    }
}
console.log(awayPlayerWithMostSteals());



function doesLongNameStealATon () {
    if (mostSteals() === mostHomeSteals() && homePlayerWithMostSteals() === playerWithLongestName()) {
        return true;
    } else if (mostSteals() === mostAwaySteals() && awayPlayerWithMostSteals() === playerWithLongestName()) {
        return true;
    }
}
console.log(doesLongNameStealATon());