export class Pupils {
  mapData: Map<string, object>;
  id: string;
  constructor() {
    this.mapData = new Map();
  }

  add(data: PupilScheme) {
    this.id = Math.random().toString();
    data.id = this.id;
    this.mapData.set(this.id, data);
    return { id: this.id };
  }

  read(id: string) {
    return this.mapData.get(id);
  }

  update(id: string, data: PupilScheme) {
    this.mapData.set(id, data);
  }

  remove(id: string) {
    this.mapData.delete(id);
  }
}

interface PupilScheme {
  id?: string;
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string;
  emails: [
    {
      email: string;
      primary: boolean;
    }
  ];
  phones: [
    {
      phone: string;
      primary: boolean;
    }
  ];
  sex: string;
  desciption?: string;
}
