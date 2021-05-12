function greetMessage(name){
    console.log(`Good Morning, ${name}`)
}
greetMessage("John") // print "Good Morning, John"


function greetUsers(array,callback){
    array.forEach(user=>{
        callback(user)
    })
}


greetUsers(["John","Peter","Mark"], greetMessage)