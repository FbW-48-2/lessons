let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA",
  };
  for(let key in codes){
      console.log(key +"==>"+ codes[key]);
  }
  
let user = {
    lastName : "Smith",
    name:"john"    
}

user.age = 40;
for (let key in user){
    console.log(key + "===> "+ user[key]);
}