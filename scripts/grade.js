function calculateGrade() {
    let score = document.getElementById("score").value;
    let grade;

    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    document.getElementById("resultGrade").textContent = `Your grade is ${grade}.`;
  }