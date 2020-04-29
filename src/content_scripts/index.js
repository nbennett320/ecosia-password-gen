import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import onSearch from './scripts/onSearch'
import generatePassword from './scripts/generatePassword'

console.log('Content scripts has loaded')
const content = document.getElementsByClassName('mainline-top')
const query = document.getElementsByClassName('search-form-input')[0].value
const matches = onSearch.parseQuery(query)
const args = onSearch.argsInclude(matches)
console.log("args: ", args)
if(args) {
    const { size, type } = args
    const pword = generatePassword.generate(size, type)
    ReactDOM.render(<Main pword={pword} />, content[0])
}