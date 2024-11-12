export default function updateStudentGradeByCity(students, city, newGrades) {
  const defGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defGrade).grade,
      }));
  }
  return [];
}
