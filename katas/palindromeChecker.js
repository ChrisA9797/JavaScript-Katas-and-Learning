const palindromeChecker = (input) => {
    let regex = /[a-zA-Z\d]/gm
    let forwards = input.match(regex)
    let reversed =input.match(regex).reverse()
    return forwards.join('').toLowerCase() == reversed.join("").toLowerCase();
}

