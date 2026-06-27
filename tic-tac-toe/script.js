// Board

function createBoard() {
    let board = new Array(9); 

    const placeMarker = (position, marker) => {
        if (board[position] === undefined) {
            board[position] = marker;
            return true;
        } else {
            return false;
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

    const getBoard = () => board;

    return { placeMarker, checkForWin, checkForDraw, resetBoard, getBoard };
}

// Players

function createPlayer(name, marker) {
    return { name, marker };
}

// Game manager / controller 

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
    let p1NameEl = document.querySelector(".player-one-score p:first-child");
    let p1ScoreEl = document.querySelector(".player-one-score p:last-child");
    let p2NameEl = document.querySelector(".player-two-score p:first-child");
    let p2ScoreEl = document.querySelector(".player-two-score p:last-child");
    let drawsEl = document.querySelector(".draw-score p:last-child");

    const startGame = () => {
        const name1 = document.getElementById('player-one-input').value || 'Player 1';
        const name2 = document.getElementById('player-two-input').value || 'Player 2';
        firstPlayer = createPlayer(name1, "X");
        secondPlayer = createPlayer(name2, "O");
        document.querySelector('.start-screen').style.display = 'none';
        document.querySelector('.main').style.display = 'block';
        p1NameEl.textContent = firstPlayer.name;
        p2NameEl.textContent = secondPlayer.name;
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
        const moveMade = board.placeMarker(position, firstPlayerTurn ? "X" : "O");
        if (!moveMade) return;
        if (board.checkForWin()) {
            if (firstPlayerTurn) {
                firstPlayerPoints++;
                turnDiv.textContent = `${firstPlayer.name} wins!`;
                p1ScoreEl.textContent = firstPlayerPoints;
            } else {
                secondPlayerPoints++;
                turnDiv.textContent = `${secondPlayer.name} wins!`;
                p2ScoreEl.textContent = secondPlayerPoints;
            }
            resetButton.classList.add("button-prompt-color");
            gameOver = true;
        } else if (board.checkForDraw()){
            draws++;
            turnDiv.textContent = `Draw!`;
            resetButton.classList.add("button-prompt-color");
            drawsEl.textContent = draws;
            gameOver = true;
        } else {
            changeTurn();
        }
    }
    
  return { board, firstPlayer, secondPlayer, firstPlayerTurn, firstPlayerPoints, secondPlayerPoints, draws, resetButton, gameOver, startGame, resetGame, changeTurn, playTurn};
})();

// Display manager / controller

const displayController = (() => {
    const fields = document.querySelectorAll("[data-index]");
    const fillBoard = () => {
        fields.forEach((element) => {
            // if array value is null or undefined it uses empty string instead
            const value = gameController.board.getBoard()[element.dataset.index] ?? '';
            element.textContent = value;
            if (value === 'X') {
                element.classList.add('player-one-turn');
                element.classList.remove('player-two-turn');
            } else if (value === 'O') {
                element.classList.add('player-two-turn');
                element.classList.remove('player-one-turn');
            } else {
                element.classList.remove('player-one-turn', 'player-two-turn');
            }
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

    const startScreen = () => {
        document.getElementById('start-button').addEventListener('click', () => {
            gameController.startGame();
        });
    };

    bindEvents();
    resetBoard();
    startScreen();
    return {  fillBoard, bindEvents, fields};
})();
