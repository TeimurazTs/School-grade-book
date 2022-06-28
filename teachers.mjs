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

export const teachers = new Teachers();

export const teacherId = teachers.add({
  name: {
    first: "Edward",
    last: "Norton",
  },
  dateOfBirth: "18.08.1969",
  emails: [
    {
      email: "CoolestGuyEver@gmail.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "599455665",
      primary: true,
    },
  ],
  sex: "Male",
  subjects: [
    {
      subject: "History",
    },
  ],
});

// const teachers2 = teachers.add({
//   name: {
//     first: "Quentin",
//     last: "Tarantino",
//   },
//   dateOfBirth: "27.03.1963",
//   emails: [
//     {
//       email: "CoolestGuyEver@gmail.com",
//       primary: true,
//     },
//   ],
//   phones: [
//     {
//       phone: "599455665",
//       primary: true,
//     },
//   ],
//   sex: "Male",
//   subjects: [
//     {
//       subject: "Math",
//     },
//   ],
// });
