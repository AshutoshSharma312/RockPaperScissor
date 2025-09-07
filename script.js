let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msgp = document.querySelector("#msg");
const uscore = document.querySelector("#userscore");
const comscore = document.querySelector("#computerscore");


const computerchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randid = Math.floor(Math.random() * 3);
    return options[randid];
}
const drawgame = () => {
    console.log("Draw Game");
    msgp.style.color = "#E98A15"
    msgp.innerText = "Game Draw! , Play Again!";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("You Win ");
        userscore++;
        uscore.innerText = userscore;
        msgp.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msgp.style.color = "#53DD6C";
    } else {
        console.log("You Lose");
        computerscore++;
        comscore.innerText = computerscore;
        msgp.innerText = `You LOse! Computer ${compchoice} beats Yours ${userchoice}`;
        msgp.style.color = "#E84855";
    }
}

const playgame = (userchoice) => {
    console.log("User choice: ", userchoice);
    const compchoice = computerchoice();
    console.log("computer choice: ", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
