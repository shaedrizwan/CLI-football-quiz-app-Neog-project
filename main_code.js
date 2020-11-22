var chalk =require("chalk");
var readLineSync = require("readline-sync");

var name = readLineSync.question(chalk.bgMagenta("\n What is your name? \n"));
console.log(chalk.bgYellow.bold("\n Hello "+name+", Welcome to the FOOTBALL QUIZ by RIZWAN"));
console.log("\n");
console.log(chalk.bgMagenta.bold("Rules: "));
console.log(chalk.bgBlue("1. There are a total of 5 questions. All are compulsory."));
console.log(chalk.bgBlue("2. Each right answer will give you 2 points."));
console.log(chalk.bgBlue("3. 1 point will be deducted for each wrong answers."));
console.log("\n");
console.log(chalk.bgMagenta.bold("Leaderboard: "));
console.log(chalk.bgYellow.bold("Name         Points "));
console.log(chalk.bgBlue("Shahid          10 "));
console.log(chalk.bgBlue("Rahul           10 "));
console.log(chalk.bgBlue("Akhsay          10 "));
console.log("\n \n");

function play(q) {
  var totalQuestions = q.length;
  var score = 0;
  for(i=0;i<totalQuestions;i++) {
    console.log(chalk.bold("QUESTION: ",i+1));
    console.log(chalk.bgBlue.bold(q[i].question));
    var ans = readLineSync.question(chalk.bgBlue(q[i].op1+"\n"+q[i].op2+"\n"+q[i].op3+"\n\n"));
  if(ans === q[i].answer) {
    console.log(chalk.green("That's a Right answer!"));
    score+=2;
    console.log("Your score is: "+score);
  }
  else {
    console.log(chalk.red("Oops! Wrong answer"));
    score--;
    console.log("Your score is: "+score);
  }
  console.log("*********** \n \n")
  }
  console.log("Thank you for playing the quiz. Your final score is: "+score);
}


qst =[{
  question: "Who won the English Premier League 2019/20? ",
  answer: "Liverpool",
  op1: "Arsenal",
  op2: "Liverpool",
  op3: "ManUtd"
}, {
  question: "Who won the FIFA World Cup 2018? ",
  answer: "France",
  op1: "Belgium",
  op2: "France",
  op3: "Germany"
}, {
  question: "In which club does Cristiano Ronaldo play? ",
  answer: "Juventus",
  op1: "Juventus",
  op2: "Barcelona",
  op3: "AC Milan"
}, {
  question: "Which country will host the FIFA World Cup 2022? ",
  answer: "Qatar",
  op1: "Qatar",
  op2: "Russia",
  op3: "Spain"
}, {
  question: "which is the only Invincible club in English Premier League? ",
  answer: "Arsenal",
  op1: "Manchester United",
  op2: "Chelsea",
  op3: "Arsenal"
}]

play(qst);