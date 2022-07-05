export class Pupils {
  constructor() {
    this.mapData = new Map();
  }

  add(data) {
    this.id = Math.random();
    data.id = this.id;
    this.mapData.set(this.id, data);
    return { id: this.id };
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
