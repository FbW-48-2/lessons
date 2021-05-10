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
  console.log(school[1].students);
      
  












//   console.log(school.length);
//   console.log(school[1].name);
//   console.log(school[1].students[0].email);