export default class HolbertonCourse {
  constructor(name, length, students) {
    if (name.hasOwnProperty(String)) {
        this._name = name;
    }
    if (length.hasOwnProperty(Number)) {
        this._length = length;
    }
    if (students.hasOwnProperty(Array)) {
        this._students = students;
    }
  }
}
s