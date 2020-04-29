const match = /^(password|pword)\s*?\b((\d{1,2})|(\d{1,2})\s(strong|words|numbers)|(strong|words|numbers)\s(\d{1,2})|(strong|words|numbers))\b$/gmi

const onSearch = {
    // parse user search query
    parseQuery: query => {
        const args = match.exec(query)
            .filter(el => el !== undefined)
        if(args) {
            return args
        } else return false
    },

    // get password size (length) and type
    argsInclude: args => {
        const size = args
            .filter(el => !isNaN(el))[0]
        const type = args
            .filter(el => !el.includes(' ') && isNaN(el) && el !== ('password' || 'pword'))[0]
        return {
            size,
            type
        }
    }
}

export default onSearch