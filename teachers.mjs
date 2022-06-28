export class Teachers {
  constructor() {
    this.mapData = new Map();
  }
  add(data) {
    if (data.name === undefined || typeof data.name !== "object") {
      throw new TypeError("name must be defiend and must be an object");
    }
    if (data.name.first === undefined || typeof data.name.first !== "string") {
      throw new TypeError("first must be defiend and it must be a string");
    }
    if (data.name.last === undefined || typeof data.name.last !== "string") {
      throw new TypeError("last must be defiend and it must be a string");
    }
    if (data.emails === undefined || typeof data.emails !== "object") {
      throw new TypeError(" emails must be defiend and it must be an objet");
    }
    if (data.dateOfBirth === undefined ||typeof data.dateOfBirth !== "string") {
      throw new TypeError("dateofbirth must be defiend and must be a string");
    }
    data.emails.forEach((el) => {
      if (el.email === undefined || typeof el.email !== "string") {
        throw new TypeError("email must be defined and must be a string");
      }
      if (el.primary === undefined || typeof el.primary !== "boolean") {
        throw new TypeError("primary must be defiend and must be a string");
      }
    });
    if (data.phones === undefined || typeof data.phones !== "object") {
      throw new TypeError("pohnes must be defined and it must be an object");
    }
    data.phones.forEach((el) => {
      if (el.phone == undefined || typeof el.phone !== "string") {
        throw new TypeError("phone must be defined and must be a stringg");
      }
      if (el.primary === undefined || typeof el.primary !== "boolean") {
        throw new TypeError("primary must be definad and it must be a boolean");
      }
    });
    if (data.sex === undefined || typeof data.sex !== "string") {
      throw new TypeError(" sex must be defiend and must be a stirng");
    }
    if ((data.subjects === undefined) | (typeof data.subjects !== "object")) {
      throw new TypeError("subjects must be defnied and must be an object");
    }
    data.subjects.forEach((el) => {
      if (el.subject === undefined || typeof el.subject !== "string") {
        throw new TypeError("subject must be defined and must be a string");
      }
    });
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
