function getSqaure(number){
    return number*number
}

function sqaure(array,callback){
    return array.map(num=> callback(num))
}

console.log(sqaure([1,2,3,4,5],getSqaure))