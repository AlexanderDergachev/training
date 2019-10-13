let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let huPlayer = "P";
let aiPlayer = "C";
let iter = 0;
let round = 0;
let AIFirstmove = 0;
let game = {
    stoped: false,
    gameCount: 0,
    huWins: 0,
    aiWins: 0,
    toes: 0
}
let x_counter = document.getElementById('x_counter');
let o_counter = document.getElementById('o_counter');
let tie_counter = document.getElementById('tie_counter');

let myField = document.querySelector('.field');
myField.onclick = function (event) {
    let target = event.target;

    if (target.tagName != "DIV") return;
    move(target, huPlayer);
}

let restartButton = document.querySelector('.restart-button');
restartButton.style.opacity = '0';
restartButton.style.visibility = 'hidden';

restartButton.onclick = () => {
    reset();
    restartButton.style.opacity = 0;
    playSound('another-one');
    setTimeout(() => {
        restartButton.style.visibility = "hidden";
    }, 1000);
}

function move(element, player) {
    if (game.stoped === true) {
        return;
    }
    game.stoped = false;
    if (board[element.id] != "P" && board[element.id] != "C") {
        round++;

        element.firstElementChild.style.visibility = 'visible';
        element.firstElementChild.style.opacity = '1';
        playSound('chiki');


        board[element.id] = player;

        if (winning(board, player)) {
            game.stoped = true;
            setTimeout(function () {
                reset();
            }, 500);
            return;
        } else if (round > 7 && game.gameCount % 2 == 1) {
            game.stoped = true;
            var index = minimax(board, aiPlayer).index;
            var selector = index;
            document.getElementById(selector).lastElementChild.style.visibility = 'visible';
            document.getElementById(selector).lastElementChild.style.opacity = '1';
            board[index] = aiPlayer;
            if (winning(board, aiPlayer)) {
                game.stoped = true;
                setTimeout(() => {
                    playSound('damki');
                }, 500);
                changeRestartButton();
                changeCounter(o_counter);
                blinkField();
                return;
            } else {
                setTimeout(() => {
                    playSound('damki');
                }, 500);
                game.stoped = true;
                changeRestartButton();
                changeCounter(tie_counter);
                blinkField();
                return;
            }
        } else if (round > 8) {
            setTimeout(() => {
                playSound('damki');
            }, 500);
            game.stoped = true;
            changeRestartButton();
            changeCounter(tie_counter);
            blinkField();
            return;
        } else {
            round++;
            var index = minimax(board, aiPlayer).index;
            var selector = index;
            document.getElementById(selector).lastElementChild.style.visibility = 'visible';
            document.getElementById(selector).lastElementChild.style.opacity = '1';
            setTimeout(() => {
                playSound('briki');
            }, 500);

            board[index] = aiPlayer;
            if (winning(board, aiPlayer)) {
                setTimeout(() => {
                    playSound('damki');
                }, 500);
                game.stoped = true;
                changeRestartButton();
                changeCounter(o_counter);
                blinkField();

                return;
            } else if (round === 0) {
                setTimeout(() => {
                    playSound('damki');
                }, 500);
                setTimeout(function () {
                    alert("tie");
                    reset();
                }, 500);
                return;
            }
        }
    }
}

function reset() {
    round = 0;
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    game.stoped = false;
    let rects = myField.getElementsByClassName('field__rect');

    for (let elem of rects) {
        elem.firstElementChild.style.visibility = 'hidden';
        elem.firstElementChild.style.opacity = '0';
        elem.lastElementChild.style.visibility = 'hidden';
        elem.lastElementChild.style.opacity = '0';
    }
    game.gameCount++;
    startAIMove();
}

function changeRestartButton() {
    if (restartButton.style.visibility == "hidden" && restartButton.style.opacity == '0') {
        restartButton.style.opacity = '1';
        restartButton.style.visibility = 'visible';
    } else {
        restartButton.style.opacity = '0';
        restartButton.style.visibility = 'hidden';
    }
}

function minimax(reboard, player) {
    iter++;
    let array = avail(reboard);
    if (winning(reboard, huPlayer)) {
        return {
            score: -10
        };
    } else if (winning(reboard, aiPlayer)) {
        return {
            score: 10
        };
    } else if (array.length === 0) {
        return {
            score: 0
        };
    }

    var moves = [];
    for (var i = 0; i < array.length; i++) {
        var move = {};
        move.index = reboard[array[i]];
        reboard[array[i]] = player;

        if (player == aiPlayer) {
            var g = minimax(reboard, huPlayer);
            move.score = g.score;
        } else {
            var g = minimax(reboard, aiPlayer);
            move.score = g.score;
        }
        reboard[array[i]] = move.index;
        moves.push(move);
    }

    var bestMove;
    if (player === aiPlayer) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

//available spots
function avail(reboard) {
    return reboard.filter(s => s != "P" && s != "C");
}

// winning combinations
function winning(board, player) {
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
        return true;
    } else {
        return false;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function startAIMove() {
    if (game.gameCount % 2 == 1) {
        var index = getRandomInt(0, 8);
        round++;
        var selector = index;
        board[index] = aiPlayer;
        document.getElementById(selector).lastElementChild.style.visibility = 'visible';
        document.getElementById(selector).lastElementChild.style.opacity = '1';
    }
}

function playSound(type) {
    if (type === 'chiki') {
        var chiki = new Audio();
        chiki.src = './sounds/chiki-sound.mp3';
        chiki.autoplay = true;
    } else if (type === 'briki') {
        var briki = new Audio();
        briki.src = './sounds/briki-sound.mp3';
        briki.autoplay = true;
    } else if (type === 'damki') {
        var damki = new Audio();
        damki.src = './sounds/damki-sound.mp3';
        damki.autoplay = true;
    } else if (type === 'another-one') {
        var another_one = new Audio();
        another_one.src = './sounds/another-one-sound.mp3';
        another_one.autoplay = true;
    }
}

function changeCounter(elem) {
    if (elem.id === 'x_counter') {
        game.huWins++;
        elem.innerHTML = game.huWins;
    } else if (elem.id === 'o_counter') {
        game.aiWins++;
        elem.innerHTML = game.aiWins;
    } else {
        game.toes++;
        elem.innerHTML = game.toes;
    }
}

function blinkField() {
    let rightRects = document.getElementsByClassName('right');
    let bottomRects = document.getElementsByClassName('bottom');
    for (let elem of rightRects) {
        elem.style.borderRight = '4px solid black';
        setTimeout(() => {
            elem.style.borderRight = '4px solid #fff';
        }, 200);
        setTimeout(() => {
            elem.style.borderRight = '4px solid black';
        }, 320);
        setTimeout(() => {
            elem.style.borderRight = '4px solid #fff';
        }, 650);
    }
    for(let elem of bottomRects) {
        elem.style.borderBottom = '4px solid black';
        setTimeout(() => {
            elem.style.borderBottom = '4px solid #fff';
        }, 200);
        setTimeout(() => {
            elem.style.borderBottom = '4px solid black';
        }, 320);
        setTimeout(() => {
            elem.style.borderBottom = '4px solid #fff';
        }, 650);
    }
}
