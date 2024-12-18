export default class HolbertonCourse {
  constructor(name, length, students) {
    /* Initialize attributes */
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* Getter and Setter for name */
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /* Getter and Setter for length */
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /* Getter and Setter for students */
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Array must be an array of strings');
    }
    this._students = value;
  }
}
