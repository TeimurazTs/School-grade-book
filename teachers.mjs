export class Teachers {
  constructor() {
    this.mapData = new Map();
  }
  add(data) {
    this.id = Math.random();
    this.mapData.set(id, data);
    return this.id;
  }

  read(id) {
    this.mapData.get(id);
  }

  update(id, data) {
    this.mapData.set(id, data);
  }

  remove(id) {
    this.mapData.delete(id);
  }
}

const teachers = new Teachers();
