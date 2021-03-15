// // String 
// let name = 'MA X '
// console.log(typeof name);
// console.log(name.length); // 5 

// // the length of any String .length 
 

// // String as array 
// let lastName = 'Doe'
// console.log(lastName[0]);

// // trim name.trim() 
// console.log(name.trim().length); // after trim 4 

// // change to lowerCase
// console.log(name); 
// console.log(name.toLowerCase());

// // to upperCase 
// console.log(name.toUpperCase());

// // subString 
// let course = "javascript for backend";

// // substr
// console.log(course.substr(0,10));
//              //       substr( start , length ) 

//  console.log(course.substr(10))

//  // from the index to the end of the string  ##for backend##            

//  console.log(course.substr(-10 , 2))

//      //       substr( start , length )

//  console.log(course.substr(10)) 
//      //       substr( start , end )

// console.log(course.length)


// // index is used in Array and String 
// course2 = "javascript for frontend";
// //         0123456789
// console.log(course2[1])  // a 
// //  course[index] 

// // how i can add string to string 
// let courses = "frontend " + "backend"
// console.log(courses, courses.length);

// // how i can add javascript variable to a string

// let myFavoritesCourses = course + "javascript for frontend";

// // backticks 
// myFavoritesCourses = `i like to learn ${course}`
// console.log(myFavoritesCourses);

// myFavoritesCourses = `i'm learning ${course} and ${course2}`
// console.log(myFavoritesCourses);


// let job = 'frontend';

// if(job === 'frontend'){
//     console.log(` your job needs ${course2} `);
// }
// else {
//     console.log(` your job needs ${course} `);
// }

// let jobPosition = (  job ==='frontend' ? ` your job needs ${course2} ` : ` your job needs ${course} `  )
// console.log(jobPosition);

// includes 
let languages = 'English French German Spanish'; 
// console.log(languages.includes('French'));
// console.log(languages.includes('English French'));
console.log(languages.includes('English'));
// to search in string from an index i need to add argument as index 
console.log(languages.includes('English',1));  // start searching from index 1 false 
console.log(languages.includes('nglish',1));  // start searching from index 1 true 
console.log(languages.includes('nglish',2));  // start searching from index 1 false 

if(true){
    console.log(' we can speak french ');
}
let laptops = ['lenovo', 'hp','Mac' , 'Dell']; // database

let search = 'Hp';
console.log(search.toLowerCase()); // string method 
 

console.log(laptops.includes('hp'));




let person = {
    name :'Max',

    address:'Berlin',

    job:'Frontend developer',
    

    info : function(){
        console.log(` my name is ${person.name} and i'm living in ${person.address} and working as ${person.job}`);
    }
}
console.log(person.name);
person.info()

let num ;
 console.log(typeof num);


