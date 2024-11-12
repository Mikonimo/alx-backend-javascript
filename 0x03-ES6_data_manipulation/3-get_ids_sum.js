export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (prevStudent, currStudent) => prevStudent.id || prevStudent + currStudent.id,
      0,
    );
  }
  return 0;
}
