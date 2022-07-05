export class Groups {
  id: string;
  mapData: Map<string, any>;
  constructor() {
    this.mapData = new Map();
  }

  add(room: number) {
    this.id = Math.random().toString();
    this.mapData.set(this.id, { id: this.id, room: room, pupils: [] });
    return this.id;
  }

  addPupil(id: string, data: PupilScheme) {
    this.mapData.get(id).pupils.push(data);
  }

  removePupil(groupId: string, pupilId: string) {
    let i = 0;
    this.mapData.get(groupId).pupils.forEach((el: any) => {
      i++;
      if (el.id === pupilId) {
        this.mapData.get(groupId).pupils.splice(i - 1, 1);
      }
    });
  }

  update(id: string, data: { room: number }) {
    this.mapData.get(id).room = data.room;
  }

  read(id: string) {
    return this.mapData.get(id);
  }

  readAll() {
    let returnArray: {}[] = [];
    this.mapData.forEach(function (value) {
      returnArray.push(value);
    });
    return returnArray;
  }
}

interface PupilScheme {
  id: string;
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string;
  phones: [
    {
      phone: string;
      primary: boolean;
    }
  ];
  sex: string;
  desciption?: string;
}
