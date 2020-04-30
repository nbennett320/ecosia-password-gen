import cheerio from 'cheerio'
import request from 'request'

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
// handle getting a random word asyncronously
// needs to listen for messages from content script, 
// a new promise (async keyword cannot be used because 
// it blocks all other event listeners)
// more on background exchanging data between content and
// background scripts: 
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Connection-based_messaging
browser.runtime.onMessage.addListener(message => {
    console.log(message)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({response: scrape()})
        }, 2000)
    })
})

// scrape https://randomword.com/ for a random word 
// for generating a password with words (lol)
const scrape = () => {
    return request("https://randomword.com/", (err, res, body) => {
        const $ = cheerio.load(body)
        const word = $('#random_word').text()
        console.log(word)
        return word
    })
}