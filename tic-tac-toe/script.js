// First - board

function createBoard() {
    let board = new Array(9); 

    const placeMarker = (position, marker) => {
        if (board[position] === undefined) {
            board[position] = marker;
        } else {
            console.log("HERE WILL BE THE FUNCTION TO INPUT THE THING AGAIN")
        }
    }

    const checkForWin = () => {
        if (board[0] !== undefined && board[0]===board[1] && board[1]===board[2]
            || board[3] !== undefined && board[3]===board[4] && board[4]===board[5]
            || board[6] !== undefined && board[6]===board[7] && board[7]===board[8]
            || board[0] !== undefined && board[0]===board[3] && board[3]===board[6]
            || board[1] !== undefined && board[1]===board[4] && board[4]===board[7]
            || board[2] !== undefined && board[2]===board[5] && board[5]===board[8]
            || board[0] !== undefined && board[0]===board[4] && board[4]===board[8]
            || board[2] !== undefined && board[2]===board[4] && board[4]===board[6]
        ) {
            return true;
        }
        else return false;
    };

    const checkForDraw = () => {
        if (!board.includes(undefined)) {
            return true;
        }
    }

    const resetBoard = () => {
        board = new Array(9);
    }

    // can be deleted later
    const getBoard = () => board;

    return { placeMarker, checkForWin, checkForDraw, resetBoard, getBoard };
}

// for chreating players

function createPlayer(name, marker) {
    return { name, marker };
    // should it not also have this palyer's points? like in return return { name, marker, points = 0 };?
}

// for game manageement 

const gameController = (() => {
    let board = createBoard();
    let firstPlayer;
    let secondPlayer;
    let firstPlayerTurn = true;
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let draws = 0;
    let gameOver = false;
    let turnDiv = document.getElementsByClassName("current-turn")[0];
    let resetButton = document.querySelector(".reset-button button");

    const startGame = () => {
        let name = prompt("What's the first player's name?")
        firstPlayer = createPlayer(name, "X")
        name = prompt("What's the second player's name?")
        secondPlayer = createPlayer(name, "O")
        turnDiv.textContent = `${firstPlayer.name}'s turn`;
    }

    const resetGame = () => {
    board.resetBoard();
    gameOver = false;
    firstPlayerTurn = !firstPlayerTurn;
    if (firstPlayerTurn) {
        turnDiv.classList.remove("player-two-turn");
        turnDiv.classList.add("player-one-turn");
        turnDiv.textContent = `${firstPlayer.name}'s turn`;
    } else {
        turnDiv.classList.remove("player-one-turn");
        turnDiv.classList.add("player-two-turn");
        turnDiv.textContent = `${secondPlayer.name}'s turn`;
    }
}

    const changeTurn = () => {
        firstPlayerTurn = !firstPlayerTurn;
        if (firstPlayerTurn) {
            turnDiv.classList.remove("player-two-turn");
            turnDiv.classList.add("player-one-turn");
            turnDiv.textContent = `${firstPlayer.name}'s turn`;
        } else {
            turnDiv.classList.remove("player-one-turn");
            turnDiv.classList.add("player-two-turn");
            turnDiv.textContent = `${secondPlayer.name}'s turn`;
        }
    }

    const playTurn = (position) => {
        if (gameOver) return;
        board.placeMarker(position, firstPlayerTurn ? "X" : "O");
        if (board.checkForWin()) {
            if (firstPlayerTurn) {
                firstPlayerPoints++;
                turnDiv.textContent = `${firstPlayer.name} wins!`;
            } else {
                secondPlayerPoints++;
                turnDiv.textContent = `${secondPlayer.name} wins!`;
            }
            resetButton.classList.add("button-prompt-color");
            gameOver = true;
        } else if (board.checkForDraw()){
            draws++;
            turnDiv.textContent = `Draw!`;
            resetButton.classList.add("button-prompt-color");
            gameOver = true;
        } else {
            changeTurn();
        }
    }
    
  return { board, firstPlayer, secondPlayer, firstPlayerTurn, firstPlayerPoints, secondPlayerPoints, draws, resetButton, gameOver, startGame, resetGame, changeTurn, playTurn};
})();

const displayController = (() => {
    const fields = document.querySelectorAll("[data-index]");
    const fillBoard = () => {
        fields.forEach((element) => {
            // if array value is null or undefined it uses empty string instead
            element.textContent = gameController.board.getBoard()[element.dataset.index] ?? '';
            // TO DO make it change the background color and color as well depending on the vlue
        });
    }
    const bindEvents = () => {
        fields.forEach((element) => {
            element.addEventListener('click', () => {
                gameController.playTurn(element.dataset.index);
                fillBoard();
            });
        });
    };

    const resetBoard = () => {
        gameController.resetButton.addEventListener('click', () => {
            gameController.resetGame();
            fillBoard();
            gameController.resetButton.classList.remove("button-prompt-color");
        });
    };

    bindEvents();
    resetBoard();
    gameController.startGame();
    return {  fillBoard, bindEvents, fields};
})();

// TODO change so it does not ask for name and instead of console logging it updates the board scores