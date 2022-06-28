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

class Subject {
  constructor(data) {
    this.title = data.title;
    this.lessons = data.lessons;
    if (data.description) {
      this.description = data.description;
    }
  }
  id = Math.random();
}

const history = new Subject({
  title: "History",
  lessons: 24,
});

const math = new Subject({
  title: "Math",
  lessons: 24,
});

const lms = new Lms();

lms.add(history);
lms.add(math);

console.log(lms.readAll());
