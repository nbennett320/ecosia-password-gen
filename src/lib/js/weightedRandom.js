// https://en.wikipedia.org/wiki/Rejection_sampling
// ex: 
// weightedRandom({0:0.8, 1:0.1, 2:0.1}, String.length)
const weightedRandom = (density, legth) => {
    let i, j, table = []
    for(i in density) {
        for(j = 0; j < density[i] * legth; j++) {
            table.push(i)
        }
    }
    return () => table[Math.floor(Math.random() * table.length)]
}

export default weightedRandom