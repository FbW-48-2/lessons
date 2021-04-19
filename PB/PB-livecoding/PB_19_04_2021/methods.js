let person = {
    name :"Adam",
    age : 40,
    myFunction : function() {
        return person.name + person.age 
    },
    greet : ()=>{ return 'Hello World' },
    anotherFunction: ()=>{
        return person.myFunction() + " " + person.greet()
    }

}
// console.log(person.myFunction());
// console.log(person.greet());
// console.log(person.anotherFunction());


// examples 
               
// console.log(typeof Math); // object 
//         //  Object function 
// console.log(Math.random()  );
// console.log(Math.sqrt(16));

// this keyword 
let laptop = {
    brand : "Lenovo",
    color : "Black",
    screenSize: "15.4",
    info: function() {
        //return laptop.brand +" "+ laptop. color +" "+ laptop.screenSize
        console.log(this);
        return this.brand +" "+ this.color +" "+ this.screenSize
    }
}

//console.log(laptop.info());

// process object in node js 
// console.log(typeof process);
// console.log( typeof process.stdout.write);

// write is a methode in stdout object 
// process.stdout.write(" Hello World");
// process.stdout.write("we are developers");




let laptopOne = {
    brand : "Apple",
    model : "MacBook Air",
    price : "1000 euro",
    screenSize: 13.3,
    moreInfo(){
       
        return `${laptopOne.brand} ${this.model} ${this.price} ${this.screenSize} `
    }
    
}
console.log(laptopOne.moreInfo());
console.log(laptopOne.brand.toUpperCase());
console.log(laptopOne.model.length);
console.log(laptopOne.screenSize.toString().length);
                //                method 
laptopOne.images = ["https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78963800/fee_786_587_png",
                    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_81681844/fee_786_587_png",
                    "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_81681829/fee_786_587_png"
                   ]  ;
console.log(laptopOne.images.length);
// laptopOne.images.forEach(item => {
//     console.log(item);
// })                   
let images = laptopOne.images

for(let i = 0 ; i< images.length ; i++ ){
    console.log("first for loop",laptopOne.images[i]);
}
console.log("##################################");

for (let i = images.length-1 ; i >= 0 ;i -- ){
    console.log("second for loop", images[i]);
}


