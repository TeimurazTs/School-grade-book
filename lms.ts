export class Lms {
  mapData: Map<string, object>;
  constructor() {
    this.mapData = new Map();
  }

  add(data: LmsScheme) {
    this.mapData.set(data.id, data);
  }

  remove(data: LmsScheme) {
    this.mapData.delete(data.id);
  }

  verify(data: LmsScheme) {
    return this.mapData.get(data.id) ? true : false;
  }

  readAll() {
    let returnArray: {}[] = [];
    this.mapData.forEach(function (value) {
      returnArray.push(value);
    });
    return returnArray;
  }
}

interface LmsScheme {
  id: string;
  title: string;
  description?: string;
}

export class Subject {
  title: string;
  lessons: number;
  description: string;
  constructor(data: SubjectScheme) {
    this.title = data.title;
    this.lessons = data.lessons;
    if (data.description) {
      this.description = data.description;
    }
  }
}

interface SubjectScheme {
  title: string;
  lessons: number;
  description?: string;
}
