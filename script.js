//Variables
let homeNumb = document.getElementById("homeNumb");
let guestNumb = document.getElementById("guestNumb");

let homeName = document.getElementById("homeName");
let guestName = document.getElementById("guestName");

let plus1home = document.getElementById("plus1home");
let plus2home = document.getElementById("plus2home");
let plus3home = document.getElementById("plus3home");
let plus1guest = document.getElementById("plus1guest");
let plus2guest = document.getElementById("plus2guest");
let plus3guest = document.getElementById("plus3guest");

let resetBtn = document.getElementById("reset");

let homeCount = 0;
let guestCount = 0;

//Name color change
function winScoreBoard() {
  if (homeCount > guestCount) {
    homeName.style.color = "lime";
  } else {
    homeName.style.color = "#eeeeee";
  }
  if (homeCount < guestCount) {
    guestName.style.color = "lime";
  } else {
    guestName.style.color = "#eeeeee";
  }
}

//Points scored
function pointScored() {
  //Home scoreboard
  plus1home.addEventListener("click", (e) => {
    homeCount += 1;
    homeNumb.textContent = homeCount;
    winScoreBoard();
  });

  plus2home.addEventListener("click", (e) => {
    homeCount += 2;
    homeNumb.textContent = homeCount;
    winScoreBoard();
  });

  plus3home.addEventListener("click", (e) => {
    homeCount += 3;
    homeNumb.textContent = homeCount;
    winScoreBoard();
  });

  //Guest scoreboard
  plus1guest.addEventListener("click", (e) => {
    guestCount += 1;
    guestNumb.textContent = guestCount;
    winScoreBoard();
  });

  plus2guest.addEventListener("click", (e) => {
    guestCount += 2;
    guestNumb.textContent = guestCount;
    winScoreBoard();
  });

  plus3guest.addEventListener("click", (e) => {
    guestCount += 3;
    guestNumb.textContent = guestCount;
    winScoreBoard();
  });
}

// Reset button

resetBtn.addEventListener("click", (e) => {
  homeCount = 0;
  guestCount = 0;
  homeNumb.textContent = homeCount;
  homeName.style.color = "#eeeeee";
  guestNumb.textContent = guestCount;
  guestName.style.color = "#eeeeee";
});

pointScored();
