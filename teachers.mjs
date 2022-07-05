export class Teachers {
  constructor() {
    this.mapData = new Map();
  }
  add(data) {
    this.id = Math.random();
    this.mapData.set(this.id, data);
    return this.id;
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