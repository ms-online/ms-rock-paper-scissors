// 获取dom节点
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer: 0
};

// play game
function play(e) {
  // 显示重新开始按钮
  restart.style.display = "inline-block";
  // 获取玩家的选择
  const playerChoice = e.target.id;
  // 获得电脑的选择
  const computerChoice = getComputerChoice();

  //   console.log(playerChoice, computerChoice);
  // 决定胜负
  const winner = getWinner(playerChoice, computerChoice);
  console.log(playerChoice, computerChoice, winner);
  showWinner(winner, computerChoice);
}

// getComputerChoice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.33) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

//  getWinner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

// show winner
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreboard.player++;
    result.innerHTML = `
        <h1 class="text-win">恭喜你，你赢了</h1>
        <p>电脑的选择为</p>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        `;
  } else if (winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">抱歉，你输了</h1>
    <p>电脑的选择为</p>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    `;
  } else {
    result.innerHTML = `
    <h1>双方平局</h1>
    <p>电脑的选择为</p>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    `;
  }
  //   显示分数
  score.innerHTML = `
<p>玩家：${scoreboard.player}</p>
<p>电脑：${scoreboard.computer}</p>
`;

  // 显示modal
  modal.style.display = "block";
}

// clearModal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
// restartGame
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>玩家：0</p>
    <p>电脑：0</p>
    `;
}
// 事件监听
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
