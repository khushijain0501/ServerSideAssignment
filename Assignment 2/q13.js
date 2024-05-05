const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  console.log("Student object before deletion:", student);
  delete student.rollno;
  console.log("Student object after deletion:", student);