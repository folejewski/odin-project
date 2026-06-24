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

    const startGame = () => {
        let name = prompt("What's the first player's name?")
        firstPlayer = createPlayer(name, "X")
        name = prompt("What's the second player's name?")
        secondPlayer = createPlayer(name, "O")
        console.log(`${firstPlayer.name}'s points: ${firstPlayerPoints}`)
        console.log(`${secondPlayer.name}'s points: ${secondPlayerPoints}`)
        console.log(`Number of draws : ${draws}`)
    }

    const resetGame = () => {
        board.resetBoard();
        console.log(`${firstPlayer.name}'s points: ${firstPlayerPoints}`)
        console.log(`${secondPlayer.name}'s points: ${secondPlayerPoints}`)
        console.log(`Number of draws : ${draws}`)
        changeTurn();
        if (firstPlayerTurn) {
            console.log(`${firstPlayer.name}'s turn `)
        } else {
            console.log(`${secondPlayer.name}'s turn `)
        }
    }

    const changeTurn = () => {
        firstPlayerTurn = !firstPlayerTurn;
    }

    const playTurn = (position) => {
        board.placeMarker(position, firstPlayerTurn ? "X" : "O");
        if (board.checkForWin()) {
            if (firstPlayerTurn) {
                firstPlayerPoints++;
                console.log(`${firstPlayer.name} wins!`);
            } else {
                secondPlayerPoints++;
                console.log(`${secondPlayer.name} wins!`);
            }
            resetGame();
        } else if (board.checkForDraw()){
            draws++;
            resetGame();
        } else {
            changeTurn();
        }
    }
    
  return { board, firstPlayer, secondPlayer, firstPlayerTurn, firstPlayerPoints, secondPlayerPoints, draws, startGame, resetGame, changeTurn, playTurn};
})();
