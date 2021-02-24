
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix)
        return []
    let s = []
    for(let i = 0; i < matrix.length; i ++){
        if(i % 2 !== 0){
            s.push(...matrix[i].reverse())
        }else {
            s.push(...matrix[i])
        }
    }
    return s
}
