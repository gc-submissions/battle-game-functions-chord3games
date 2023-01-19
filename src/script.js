"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

function chooseOption(opt1, opt2) {
  var randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
}

function attackPlayer(health) {
  return health - randomDamage();
}
const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  return health <= 0;
};
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    var attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Mitch", "Adam", 100, 100);

// GET GRADE FUNCTION
function getGrade(num) {
  if (num >= 90) {
    return "A";
  } else if (num >= 80) {
    return "B";
  } else if (num >= 70) {
    return "C";
  } else if (num >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95));

// PRIORITIZE FUNCTION
function prioritize(urgent, important) {
  if (urgent === true && important === true) {
    return 1;
  } else if (important === true && urgent === false) {
    return 2;
  } else if (urgent === true && important === false) {
    return 3;
  } else {
    return 4;
  }
}

// CALCULATE PAY FUNCTION
function calculateWeeklyPay(wage, hours) {
  if (hours > 40) {
    return wage * 40 + (hours - 40) * (wage * 1.5);
  } else {
    return wage * hours;
  }
}

// SHAPE FUNCTIONS
function getAreaOfCircle(radius) {
  return Math.PI * (radius * radius);
}

function getCircumferenceOfCircle(radius) {
  return 2 * Math.PI * radius;
}

function getAreaOfSquare(side) {
  return side * side;
}

function getAreaOfTriangle(base, height) {
  return (base * height) / 2;
}
