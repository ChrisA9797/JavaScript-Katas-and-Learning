// initializing list of elements and allowing cards to be flipped
let listOfElements = $(".card-flip")
$(listOfElements).toggleClass("flip")


//start on x turn ... x = true, o = false
//each time flipcard is called, alternate turn
let turn = true;

//turn counter increments each time a card is flipped
let numTurns = 0;

// intializing lists to log moves for each player
let xMoves = []
let oMoves = []
let allMoves = []

// a list of all possible winning combinations in ascending numerical order
let winMoves = ["123", "147", "159", "456", "258", "357", "789", "369"]

// boolean for whether it is single player or not
let singlePlayer = true;

// function to switch computer on and off via singlePlayer value based on which radio is selected
const modeSwitcher = () => {
    if ($("#single").is(":checked")) {
        singlePlayer = true;
    } else if ($("#two").is(":checked")) {
        singlePlayer = false;
    }
}

// each time a radio button is clicked, modeSwitcher will check for game mode
$(".gameSwitch").click(function() {
    modeSwitcher();
})

// computer turn
// it should filter out moves that have already been played
// also sometimes it wont flip, not sure why
let intervalId = window.setInterval(function(){
    if (singlePlayer && !turn) {
        let xWinCombos = checkForWins(xMoves)
        let oWinCombos = checkForWins(oMoves)
        let filteredX = winFilter(xWinCombos, xMoves).filter((x) => {
            return x.length == 1
        })
        let filteredO = winFilter(oWinCombos, oMoves).filter((x) => {
            return x.length == 1
        })
        console.log(`FilteredO: ${filteredO}`)
        console.log(`FilteredX: ${filteredX}`)
        console.log(`Turn: ${turn}`)
        if(filteredO.length == 1) {
            if (!allMoves.includes(filteredO)) {
                $(".not-flip").random().click()
            } else {
                $(`.flip${filteredO[0]}`).click()
                return
            }
        } else if(filteredX.length == 1) {
            $(`.flip${filteredX[0]}`).click()
            return;
        }
        if(!turn) {
            $(".not-flip").random().click()
        }
    }
}, 2000);

//jquery function that gets a random element out of jquery object
$.fn.random = function() {
    return this.eq(Math.floor(Math.random() * this.length));
  }          
  
// each time a card is clicked, this will be called
// if turn - xmoves, if !turn - omoves
// card is flipped, image is added, display is updated, turn boolean switches, numTurns increments, moves are logged, not-flip class removed
const flipCard = (el) => {
    if (turn) {
        el.style.transform = "rotateY(180deg)";
        $(el).find('img').attr('src', "./images/x.jpg")
        $("#turnDisplay").text("O's turn")
        turn = false;
        numTurns++
        xMoves.push($(el).find('img').attr('id'))
        allMoves.push($(el).find('img').attr('id'))
        el.classList.remove("not-flip")
        console.log(`Pushing xMove`)
        console.log(`xMoveList: ${xMoves}`)
        winCheck()
    } else {
        el.style.transform = "rotateY(180deg)";
        $(el).find('img').attr('src', "./images/o.jpg")
        $("#turnDisplay").text("X's turn")
        turn = true;
        numTurns++
        console.log(`Pushing oMove`)
        oMoves.push($(el).find('img').attr('id'))
        allMoves.push($(el).find('img').attr('id'))
        console.log(`oMovesList: ${oMoves}`)
        el.classList.remove("not-flip")
        winCheck()
    }
}

// function to check for winning or tie conditions
// move logs are sorted into string of ascending order, then checked against a regex to see whether a winning combination is found
// if it is a win message is displayed and winning tiles are highlighted, but if moves reach nine a tie is reached
// ... would maybe be cool to check for conditions where turns are not at 9, but a win is statistically impossible
const winCheck = () => {
    let xCheck = xMoves.sort(function(a, b){return a-b}).join("")
    let oCheck = oMoves.sort(function(a, b){return a-b}).join("")
    for (move of winMoves) {
        let pattern = `${move.charAt(0)}(\\d+)?${move.charAt(1)}(\\d+)?${move.charAt(2)}`
        let moveRegExp = new RegExp(pattern, "g")
        if (moveRegExp.test(xCheck)) {
            let highlight = move;
            highlight.split('').forEach(element => {
                $(`#${element}`).css('filter', 'invert(1)')
            })
            $("#winDisplay").text("*** X Wins! ***")
        } else if (moveRegExp.test(oCheck)) {
            let highlight = move;
            highlight.split('').forEach(element => {
                $(`#${element}`).css('filter', 'invert(1)')
            })
            $("#winDisplay").text("*** O Wins! ***")
        } else if (numTurns > 9) {
            $("#winDisplay").text("*** Tie! ***")
        }
    }
}



// when reset button is clicked, all cards are flipped over, turn display is reset, and turn is set to true(x's turn)
$("#reset").click(function() {
    $(".card-flip").each(function (index, el) {
        el.style.transform = ""
        $("#turnDisplay").text("X's turn : Flip a tile to start")
        turn = true;
        numTurns = 0;
        xMoves = [];
        oMoves = [];
        $("img").css('filter', "invert(0)")
        $("#winDisplay").text("")
    })
})


const checkForWins = (playerMoves) => {
    let possibleWins = winMoves.filter((winningCombo) => {
        let possibleMove = false
        for (playerMove of playerMoves) {
            if (winningCombo.includes(playerMove)) {
                possibleMove = true
            }
        }
        return possibleMove
  })
  console.log(`CheckMovesForWins: ${possibleWins}`)
  return possibleWins
}

const winFilter = (winCombos, movesTaken) => {
    let playerMovesTaken = winCombos.map((possibility) => {
        let filtered = possibility.split("").filter((char) => {
          return !movesTaken.includes(char)
        }).join("")
        return filtered
      })
      console.log(`playerMovesTaken: ${playerMovesTaken}`)
    return playerMovesTaken
}