export class Pupils {
  constructor() {
    this.mapData = new Map();
  }

  add(data) {
    this.id = Math.random();
    this.mapData.set(id, data);
    return { id: id };
  }

  read(id) {
    return this.mapData.get(id);
  }

  update(id, data) {
    this.mapData.set(id, data);
  }

  remove(id) {
    this.mapData.delete(id);
  }
}
