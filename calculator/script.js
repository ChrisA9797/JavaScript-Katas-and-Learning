let isFirstInput = true;
let input;

$(document).ready(function() {
    
    //adding to display
    // not allowing user to input multiple 0s
    $(".num").click(function() {
        if ($("#display").val() == 0 &&  $(this).val() == 0 ) {
            //doing nothing
        } else if (isFirstInput) {
            $("#display").val("")
            $("#display").val($("#display").val() + $(this).val());
            isFirstInput = false;
        } else {
            $("#display").val($("#display").val() + $(this).val());
        }
    });

    //clear
    $("#clear").click(function() {
        $("#display").val("0")
        isFirstInput = true;
    })

    $("#equals").click(function() {
        //nums.push(runningNum.join(""))
        input = $("#display").val()
        let output = calculator(input)
        $("#display").val(output)
    })

    $("#decimal").click(function() {
        if (isFirstInput) {
            console.log("adding decimal")
            $("#display").val("")
            $("#display").val(".");
            isFirstInput = false;
        } else {
            console.log("adding decimal in the else")
            $("#display").val(function(index, value) {
                let lastChar = value.charAt(value.length - 1)
                return (lastChar == ".") ? value : value += "."
            });
        }
    })

    $(".action").click(function() {
        if (isFirstInput) {
            // do nothing
        } else {
            $("#display").val($("#display").val() + $(this).val());
        }
    })

});

//expression field and have numbers as objects with isNegative being a property

//function taking input and doing operations
const calculator = (input) => {

    let regex = /(x|\/|\+|-)/g // exclude decimals
    let splitInput = input.split(regex)
    for(let char = 0; char < splitInput.length; char++) {
        if(splitInput[char] == "x") {
            let product = parseFloat(splitInput[char - 1]) * parseFloat(splitInput[char + 1])
            splitInput.splice(char - 1, 3, product)
            char = 0
        } else if (splitInput[char] == "/") {
            let product = parseFloat(splitInput[char - 1]) / parseFloat(splitInput[char + 1])
            splitInput.splice(char - 1, 3, product)
            char = 0
        }
    }

    for(let char = 0; char < splitInput.length; char++) {
        if(splitInput[char] == "+") {
            console.log(splitInput)
            let product = parseFloat(splitInput[char - 1]) + parseFloat(splitInput[char + 1])
            splitInput.splice(char - 1, 3, product)
            char = 0
        } else if (splitInput[char] == "-") {
            let product = parseFloat(splitInput[char - 1]) - parseFloat(splitInput[char + 1])
            splitInput.splice(char - 1, 3, product)
            char = 0
        }
    }

    return splitInput;

}