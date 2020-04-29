import cheerio from 'cheerio'
import request from 'request'

const scrape = () => {
    request("https://randomword.com/", (err, res, body) => {
        const $ = cheerio.load(body)
        const word = $('#random_word').text()
        console.log(word)
        return word
    })
}

export default scrape