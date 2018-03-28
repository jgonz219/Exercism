let Cipher = function (key) {
    this.key = ''

    if (key === '') {
        throw new Error('Bad key')
    }
    if (key) {
        if (key === key.toUpperCase()) {
            throw new Error('Bad key')
        }
        for (let i = 0; i <  key.length; i++) {
            if (key.charAt(i) > 122 || key.charAt(i) < 97) {
                throw new Error('Bad key')
            }
            else {
                this.key = key
            }
        }
    }
    else {
        for (let i = 0; i < 100; i++) {
            let temp = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97))
            this.key = this.key.concat(temp)
        }
    }
}

Cipher.prototype.encode = function(input) {
    let cipher = ''
    let keyIndex = 0
    for (let i = 0; i < input.length; i++) {
        if (keyIndex == this.key.length) {
            keyIndex = 0
        }
        cipher = cipher.concat(getCharEncode(input.charCodeAt(i), this.key.charCodeAt(keyIndex)))
        keyIndex++
    }
    return cipher
}

Cipher.prototype.decode = function(input) {
    let text = ''
    let keyIndex = 0
    for (let i = 0; i < input.length; i++) {
        if (keyIndex == this.key.length) {
            keyIndex = 0
        }
        text = text.concat(getCharDecode(input.charCodeAt(i), this.key.charCodeAt(keyIndex)))
        keyIndex++
    }
    return text
}

getCharEncode = (inputCode, keyCode) => {
    let code = (inputCode - 96) + (keyCode - 97)
    if (code > 26) {
        code = code - 26
    }
    code = code + 96
    return String.fromCharCode(code)
}

getCharDecode = (inputCode, keyCode) => {
    let code = (inputCode - 96) - (keyCode - 97)
    if (code <= 0) {
        code = code + 26
    }
    code = code + 96
    return String.fromCharCode(code)
}

module.exports = Cipher