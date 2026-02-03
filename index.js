const homePoints = document.getElementById('home-team-points');
const awayPoints = document.getElementById('away-team-points');

const homeOne = document.getElementById('plus-1-home');
const homeTwo = document.getElementById('plus-2-home');
const homeThree = document.getElementById('plus-3-home');

const awayOne = document.getElementById('plus-1-away');
const awayTwo = document.getElementById('plus-2-away');
const awayThree = document.getElementById('plus-3-away');

const newGame = document.getElementById('new-game');

let addHomeNum = parseInt(homePoints.textContent, 0);
let addAwayNum = parseInt(awayPoints.textContent, 0);

const plusOneHome = () => {
    addHomeNum += 1;
    homePoints.textContent = addHomeNum.toString();
}

const plusTwoHome = () => {
    addHomeNum += 2;
    homePoints.textContent = addHomeNum.toString();
}

const plusThreeHome = () => {
    addHomeNum += 3;
    homePoints.textContent = addHomeNum.toString();
}

const plusOneAway = () => {
    addAwayNum += 1;
    awayPoints.textContent = addAwayNum.toString();
}

const plusTwoAway = () => {
    addAwayNum += 2;
    awayPoints.textContent = addAwayNum.toString();
}

const plusThreeAway = () => {
    addAwayNum += 3;
    awayPoints.textContent = addAwayNum.toString();
}

const startNewGame = () => {
    homePoints.textContent = 0;
    awayPoints.textContent = 0;
}