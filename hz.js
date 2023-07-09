function getMaxOfArray(nummArray) {
    return Math.max.apply(null, nummArray)
}

function getMinOfArray(nummArray) {
    return Math.min.apply(null, nummArray)
}

const arr = [5, 7, 10, 4, 1]

console.log(getMaxOfArray(arr))
console.log(getMinOfArray(arr))