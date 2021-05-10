let school =  [
    {
      name: "FbW1",
      students: [
        {
          name: "Alex",
          email: "alex@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Max",
          email: "max@yahoo.com",
          city: "Hamburg",
        },
      ],
    },
  
    {
      name: "FbW2",
      students: [
        {
          name: "Jon",
          email: "jon@yahoo.com",
          city: "Berlin",
        },
        {
          name: "Pilar",
          email: "pilar@yahoo.com",
          city: "Berlin",
        },
      ],
    },
    {
      name: "FbW3",
      students: [],
    },
  ];


  // create class 
  function createClass(classObj){
      school.push(classObj); 
  }
  createClass({ name :"FBW 48-2" , students:[] } )
  console.log(school);

  function  createStudent(studentObj){
   // { classID: 2, name: 'Pilar', email: 'pilar@yahoo.com', city: 'Berlin' }
   //classId = 2  classIndex = 1 => classId -1 
   school[studentObj.classId -1 ].students.push({ name : studentObj.name ,
     email:studentObj.email ,
     city: studentObj.city  })
  }
  createStudent({ classId:2 , name: 'Max', email: 'max@yahoo.com', city: 'London' });
  //console.log(school[1].students);

  //###################################################################
  // remove a class 

  function removeClass(obj) {
      let classIndex = obj.classId -1 ; 
      school.splice(classIndex , 1);
      
  }
  //removeClass({classId : 1});
  console.log(school);

//#####################################################################
// remove a student 
function  removeStudent(obj) {
    let classIndex = obj.classId -1 ; 
    let studentIndex = obj.studentId -1 ; 
    school[classIndex].students.splice(studentIndex , 1 )    
}
console.log(school[0]);
removeStudent({classId : 1 , studentId: 2})
console.log(school[0]);

 












//   console.log(school.length);
//   console.log(school[1].name);
//   console.log(school[1].students[0].email);