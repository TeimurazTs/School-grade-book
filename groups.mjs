export class Groups {
  constructor() {
    this.mapData = new Map();
  }

  add(room) {
    this.id = Math.random();
    this.mapData.set(id, {});
    this.mapData.get(id).id = id;
    this.mapData.get(id).room = room;
    this.pupils = [];
    return this.id;
  }

  addPupil(id, data) {
    this.mapData.get(id).pupils.push(data);
  }

  removePupil(groupId, pupilId) {
    let i = 0;
    this.mapData.get(groupId).pupils.forEach((el) => {
      i++;
      if (el.id === pupilId) {
        this.mapData.get(groupId).pupils.splice(i, 1);
      }
    });
  }

  update(id, data) {
    this.mapData.get(id).room = data.room;
  }

  read(id) {
    return this.mapData.get(id);
  }

  readAll() {
    let returnArray = [];
    this.mapData.forEach(function (value) {
      returnArray.push(value);
    });
    return returnArray;
  }
}
