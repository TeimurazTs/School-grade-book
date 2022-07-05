export class Teachers {
  mapData: Map<string, object>;
  id: string;
  constructor() {
    this.mapData = new Map();
  }

  add(data: TeacherScheme) {
    this.id = Math.random().toString();
    this.mapData.set(this.id, data);
    return this.id;
  }

  read(id: string) {
    return this.mapData.get(id);
  }

  update(id: string, data: TeacherScheme) {
    this.mapData.set(id, data);
  }

  remove(id: string) {
    this.mapData.delete(id);
  }
}

interface TeacherScheme {
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string;
  emails: {
    email: string;
    primary: boolean;
  };
  phones: [
    {
      phone: string;
      primary: boolean;
    }
  ];
  sex: string;
  subjects: [
    {
      subject: string;
    }
  ];
  description?: string;
}
