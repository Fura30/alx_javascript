
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    }
  }
  
  var students = [];
  
  for (var i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  
  return students;
}

var classRoom = createClassRoom(10);

console.log(classRoom[0]()); // Output: 1
console.log(classRoom[3]()); // Output: 4
console.log(classRoom[9]()); // Output: 10
