// Array DS
const studentsDatabase = ['jordan', 'erick', 'john', 'michel'];

// Algorithm used
const findStudent = (allStudents, studentName) => {
   for(let i = 0; i < allStudents.length; i++) {
      if(allStudents[i] === studentName) {
         console.log(`Found ${studentName}`)   
      }
   } 
}

findStudent(studentsDatabase, "erick");