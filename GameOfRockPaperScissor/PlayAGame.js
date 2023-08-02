let game = {
  

  read() {

    return this.input = prompt("What do you want to choose?", "Enter here");
  },

  number() {

    this.ran = Math.floor(Math.random() * 100);

    this.ans = "";

    if (this.ran >= 0 && this.ran <= 33) return this.ans = "rock";
    else if (this.ran >= 34 && this.ran <= 65) return this.ans = "scissor";
    else return this.ans = "paper";

  },

  result() {

    if (this.input === this.ans) {
      return "Draw";
    } else if (this.input === "rock" && this.ans === "paper") {
      return "You lose";
    } else if (this.input === "rock" && this.ans === "scissor") {
      return "You win";
    } else if (this.input === "paper" && this.ans === "rock") {
      return "You win";
    } else if (this.input === "paper" && this.ans === "scissor") {
      return "You lose";
    } else if (this.input === "scissor" && this.ans === "paper") {
      return "You win";
    } else if (this.input === "scissor" && this.ans === "rock") {
      return "You lose";
    }
  }

};

function Check() {

  
  return `The input is ${game.read()} and the computer choose ${game.number()} and ${game.result()}`;
}

console.log(Check());