const school=[
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
  ]
const createClass = (data) => {
    console.log("createClass ==> ", data);
    if (data && data.name) {
      let classObject = {
        name: data.name,
        students: [],
      };
      school.push(classObject);
    } else {
      return console.log("The class name is Required!");
    }
  };


  const createStudent = (data) => {
    /**
      EX : { classID: 2, name: 'Sara', email: 'sara@yahoo.com', city: 'Berlin' }
   */
    let classIndex = data.classID - 1;
    let newStudentObject = {
      name: data.name,
      email: data.email,
      city: data.city,
    };
    school[classIndex].students.push(newStudentObject);
  };


  const removeClass = (data) => {
    let classIndex = data.classID - 1;
    school.splice(classIndex, 1);
  };

  const removeStudent = (data) => {
    let classIndex = data.classID - 1;
    let studentIndex = data.studentID - 1;
    school[classIndex].students.splice(studentIndex, 1);
  };
  const editStudent = (data) => {
    let classIndex = data.classID - 1;
    let studentIndex = data.studentID - 1;
    let targetStudent = school[classIndex].students[studentIndex];
  
    if (data.name) {
      targetStudent.name = data.name;
    }
    if (data.email) {
      targetStudent.email = data.email;
    }
    if (data.city) {
      targetStudent.city = data.city;
    }
  };
  


  const RenderSchoolTemplate = () => {
    let template = "";
    template += "School Classes" + "\n";
  
    template += "--------------" + "\n";
    let totalStudents = 0;
    if (school.length < 1) {
      // if the school array is empty
      template += "  The school is empty!" + "\n";
    } else {
      // if we have class/es in the school
      for (let i = 0; i < school.length; i++) {
        let classData = school[i];
        template += ` ${classData.name} - (class ID: ${i + 1}):  \n`;
        // console.log("classData.students ==> ", classData.students);
        if (classData.students.length < 1) {
          template += "   The class is empty!" + "\n";
        } else {
          for (let j = 0; j < classData.students.length; j++) {
            let student = classData.students[j];
            /**
             * EX:  Alex, alex@yahoo.com, Berlin - (student ID: 1).
              student ==>  { name: 'Alex', email: 'alex@yahoo.com', city: 'Berlin' }
              student ==>  { name: 'Max', email: 'max@yahoo.com', city: 'Hamburg' }
              student ==>  { name: 'Jon', email: 'jon@yahoo.com', city: 'Berlin' }
              student ==>  { name: 'Pilar', email: 'pilar@yahoo.com', city: 'Berlin' }
         */
            template += `  ${j + 1}- ${student.name}, ${student.email}, ${
              student.city
            } (student ID: ${j + 1}) \n`;
  
            totalStudents += 1;
          }
        }
        template += "***************************" + "\n";
      }
    }
  
    template +=
      "   Total Classes " + school.length + ", total students " + totalStudents;
  
    return template;
  };


  createClass({ name: "FbW4" });
createStudent({
  classID: 2,
  name: "Sara",
  email: "sara@yahoo.com",
  city: "Berlin",
});

createStudent({
  classID: 4,
  name: "Ghassan",
  email: "ghassan@yahoo.com",
  city: "Berlin",
});

removeClass({ classID: 2 });
removeStudent({ classID: 1, studentID: 2 });
editStudent({
  classID: 3,
  studentID: 1,
  email: "ghassan@test.de",
  city: "Hamburg",
  name: "Alex",
});

//--------------------
// render school template
console.log(RenderSchoolTemplate());
//--------------------
