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
// console.log(school[0]);
// removeStudent({classId : 1 , studentId: 2})
// console.log(school[0]);
//######################################################################
// Edit Student
function editStudent(obj) {
    let classIndex = obj.classID - 1;
    let studentIndex = obj.studentID - 1;
    delete obj.classID;
    delete obj.studentID;
    school[classIndex].students[studentIndex] = {...obj};
  };


//#######################################################################
 
function  renderTemplate(){
    let template = "";
    let totalStudents = 0;
    template = " School Classes: " +"\n";
    template += "------------------"+ "\n"  ;
    if(school.length === 0 ){
        template += "the school is empty! "+ "\n"
    }
    else{ // when we have at least one class in school 
        for( let i = 0 ; i < school.length ;i++ ){
          template += `${school[i].name} - (class ID : ${i +1}): \n `;
          if(school[i].students.length === 0){
              template += " the class is empty " + "\n"
          }
          else{
              
              for(let a = 0 ;  a < school[i].students.length ; a++){
                  let student = school[i].students[a];
                  template += `${a+1}- ${student.name}, ${student.email}, ${student.city} - (student ID: ${a+1} ) \n`
                  totalStudents ++;

              }
              template += "******************************************** \n";              
              
          }

        }
    }  

    template += "******************************************** \n"
    template += `Total Classes ${school.length} Total Students ${totalStudents} `
    return template;    
}
console.log(renderTemplate());













//   console.log(school.length);
//   console.log(school[1].name);
//   console.log(school[1].students[0].email);