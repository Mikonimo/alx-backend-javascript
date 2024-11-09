export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /** Getter and Setter methods for code */
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  /** Getter and Setter methods for name */
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
