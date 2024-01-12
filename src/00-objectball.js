const homeTeamName = "Brooklyn Nets";
const awayTeamName = "Charlotte Hornets";
const homeTeamColors = ["Black", "White"];
const awayTeamColors = ["Turquoise", "Purple"];

const homeTeamPlayers = {
    "Alan Anderson": {
        "number":0,
        "shoe":16,
        "points":22,
        "rebounds":12,
        "assists":12,
        "steals":3,
        "blocks":1,
        "slamDunks":1,
    },
    "Reggie Evans": {
        "number":30,
        "shoe":14,
        "points":12,
        "rebounds":12,
        "assists":12,
        "steals":12,
        "blocks":12,
        "slamDunks":7,
    },
    "Brook Lopez": {
        "number":11,
        "shoe":17,
        "points":17,
        "rebounds":19,
        "assists":10,
        "steals":3,
        "blocks":1,
        "slamDunks":15,
    },
    "Mason Plumlee": {
        "number":1,
        "shoe":19,
        "points":26,
        "rebounds":12,
        "assists":6,
        "steals":3,
        "blocks":8,
        "slamDunks":5,
    },
    "Jason Terry": {
        "number":31,
        "shoe":15,
        "points":19,
        "rebounds":2,
        "assists":2,
        "steals":4,
        "blocks":11,
        "slamDunks":1,
    }
};

const awayTeamPlayers = {
    "Jeff Adrian": {
        "number":4,
        "shoe":18,
        "points":10,
        "rebounds":1,
        "assists":1,
        "steals":2,
        "blocks":7,
        "slamDunks":2,
    },
    "Bismak Biyombo": {
        "number":0,
        "shoe":16,
        "points":12,
        "rebounds":4,
        "assists":7,
        "steals":7,
        "blocks":15,
        "slamDunks":10,
    },
    "Desagna Diop": {
        "number":2,
        "shoe":14,
        "points":24,
        "rebounds":12,
        "assists":12,
        "steals":4,
        "blocks":5,
        "slamDunks":5,
    },
    "Ben Gordon": {
        "number":8,
        "shoe":15,
        "points":33,
        "rebounds":3,
        "assists":2,
        "steals":1,
        "blocks":1,
        "slamDunks":0,
    },
    "Brendan Haywood": {
        "number":33,
        "shoe":15,
        "points":6,
        "rebounds":12,
        "assists":12,
        "steals":22,
        "blocks":5,
        "slamDunks":12,
    }
};

function gameObject() {
    return {
        home: {
            teamName: homeTeamName,
            colors: homeTeamColors,
            players: homeTeamPlayers,
    },
        away: {
            teamName: awayTeamName,
            colors: awayTeamColors,
            players: awayTeamPlayers,
        }
    }
};

function numPointsScored(playerName) {
    let g = gameObject();
    for (let item in g){
    return (g[item][`players`][`${playerName}`][`points`]);
    }
};

function shoeSize(playerName) {
    let g = gameObject();
    for (let item in g){
    return (g[item][`players`][`${playerName}`][`shoe`]);
    }
};

function teamColors(team) {
    let g = gameObject();
    for (let item in g) {
    if ((g[item][`teamName`]) === (`${team}`))
    return (g[item][`colors`]);
    }
};

function teamNames() {
    let g = gameObject();
    let teamsArray = [];
    for (let item in g) {
        teamsArray.push(g[item][`teamName`])
    };
    return teamsArray;
};

function playerNumbers(team) {
    let g = gameObject();
    let numbersArray = [];
    for (let item in g) {
        if (g[item][`teamName`] === team) {
            let players = g[item][`players`];
            for (let player in players) {
                numbersArray.push(players[player][`number`]);      
            }
        }
    }
    return numbersArray;
};

function playerStats(playerName) {
    let g = gameObject();
    for (let item in g) {
    return (g[item][`players`][`${playerName}`]);
    }
};

function bigShoeRebounds() {
    let g = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (let teamKey in g) {
        let team = g[teamKey]
        for (let playerKey in team[`players`]) {
            let player = team[`players`][playerKey]
            if (player.shoe > largestShoeSize) {
                    largestShoeSize = player.shoe;
                    rebounds = player.rebounds;
            }
        }
    }
    return rebounds;
};

function mostPointsScored() {
    let g = gameObject();
    let highScore = 0;
    let mvp = ``;
    for (let teamKey in g) {
        let team = g[teamKey]
        for (let playerKey in team[`players`]) {
            let player = team[`players`][playerKey]
            if (player.points > highScore) {
                        highScore = player.points;
                        mvp = playerKey;
            }
        }
    }
return mvp;
};
    
function winningTeam() {
    let g = gameObject();
    let awayScore = 0;
    let homeScore = 0;
        for (let playerKey in g[`away`][`players`]) {
            let points = g[`away`][`players`][playerKey][`points`];
            awayScore += points;
        };
        for (let playerKey in g[`home`][`players`]) {
            let points = g[`home`][`players`][playerKey][`points`];
            homeScore += points;
        };
    if (awayScore > homeScore)
    return g[`away`][`teamName`];
    else if (homeScore > awayScore)
    return g[`home`][`teamName`];
    else return `tie`;
};

function playerWithLongestName() {
    let g = gameObject();
    let nameLength = 0;
    let longestName = ``;
    for (let teamKey in g) {
        let team = g[teamKey]
        for (let playerKey in team[`players`]) {
            if (playerKey.length > nameLength) {
                    nameLength = playerKey.length;
                    longestName = playerKey;
            }
        }
    }
return longestName;
};

function doesLongNameStealATon() {
    let g = gameObject();
    let nameLength = 0;
    let longestName = ``;
    let steals = 0;
    let mostSteals = ``;
    for (let teamKey in g) {
        let team = g[teamKey]
        for (let playerKey in team[`players`]) {
            if (playerKey.length > nameLength) {
                nameLength = playerKey.length;
                longestName = playerKey;
            };               
            let player = team[`players`][playerKey]
            if (player.steals > steals) {
                    steals = player.steals;
                    mostSteals = playerKey;
            }
        }
    }    
if (longestName === mostSteals) {
return true}
else {return false}
};