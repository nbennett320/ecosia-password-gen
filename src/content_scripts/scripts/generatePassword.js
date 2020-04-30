const dict = {
    default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?$',
    strong: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~\s',
    words: len => {
        const getWord = browser.runtime.sendMessage({
            pwordLength: len
        })
        getWord.then(res => {
            console.log(res)
            return res.response
        }, err => {
            console.log("error scraping word:\n", err)
            return "Error"
        })
    },
    charsNums: '0123456789!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~\s'
}

const generatePassword = {
    // generate normal password
    generateDefault: len => {
        let pword = ''
        for(let i = 0; i < len; i++) {
            if(i % 4 === 0) {
                pword += '-'
            }
            const randIndex = Math.floor(Math.random() * dict.default.length)
            pword += dict.default.substring(randIndex, randIndex + 1)
        }
        pword = pword.substring(1, pword.length)
        return pword
    },

    // gen strong password
    generateStrong: len => {
        let pword = ''
        for(let i = 0; i < len; i++) {
            const randIndex = Math.floor(Math.random() * dict.strong.length)
            pword += dict.strong.substring(randIndex, randIndex + 1)
        }
        return pword
    },

    // generate password with words
    // (will b improved soon)
    generateWords: len => {
        let randWord = '', pword = ''
        while(pword.length < len) {
            randWord = dict.words(len)
            // if word is too long retry
            while(randWord < len / 3) {
                randWord = dict.words(len)
            }
            console.log(randWord)
            const randCharIndex = Math.floor(Math.random() * dict.charsNums.length)
            const randChar = dict.charsNums[randCharIndex]
            pword += `${randWord.charAt(0).toUpperCase() + randWord.slice(1)}${randChar} `
            console.log("pword:", pword)
        }
        console.log(pword)
        return pword.trim()
    },

    // main
    generate: (size, type) => {
        let pword
        if(type === 'strong') pword = generatePassword.generateStrong(size)
        else if(type === 'words') pword = generatePassword.generateWords(size)
        else pword = generatePassword.generateDefault(size)
        return pword
    }
}

export default generatePassword