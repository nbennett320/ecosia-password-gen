import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import onSearch from './scripts/onSearch'

console.log('Content scripts has loaded')
const content = document.getElementsByClassName('mainline-top')
const query = document.getElementsByClassName('search-form-input')[0].value
const matches = onSearch.parseQuery(query)
const args = onSearch.argsInclude(matches)
console.log("args: ", args)
if(args) {
    ReactDOM.render(<Main args={args} />, content[0])
}