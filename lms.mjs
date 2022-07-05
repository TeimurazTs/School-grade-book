export class Lms {
  constructor() {
    this.mapData = new Map();
  }
  add(data) {
    this.mapData.set(data.id, data);
  }

  remove(data) {
    this.mapData.delete(data.id);
  }

  verify(data) {
    return this.mapData.get(data.id) ? true : false;
  }

  readAll() {
    let returnArray = [];
    this.mapData.forEach(function (value) {
      returnArray.push(value);
    });
    return returnArray;
  }
}

export class Subject {
  constructor(data) {
    this.title = data.title;
    this.lessons = data.lessons;
    if (data.description) {
      this.description = data.description;
    }
  }
  id = Math.random();
}