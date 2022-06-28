export class Pupils {
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
    if (
      data.dateOfBirth === undefined ||
      typeof data.dateOfBirth !== "string"
    ) {
      throw new TypeError("dateofbirth must be defiend and must be a string");
    }
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

export const pupils = new Pupils();

export const pupil = pupils.add({
  name: {
    first: "Nina",
    last: "Tkemaladze",
  },
  dateOfBirth: "18.08.1970",
  emails: [
    {
      email: "ninaTkemaladze@gmail.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "599457665",
      primary: true,
    },
  ],
  sex: "Female",
});

export const pupil2 = pupils.add({
  name: {
    first: "Gela",
    last: "Meladze",
  },
  dateOfBirth: "18.08.1988",
  emails: [
    {
      email: "ninaTkemaladze@gmail.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "599457665",
      primary: true,
    },
  ],
  sex: "Female",
});

// pupils.update(pupil.id, {
//   name: {
//     first: "Nina",
//     last: "Tkemaladze",
//   },
//   dateOfBirth: "18.08.1970",
//   emails: [
//     {
//       email: "ninaTkemaladze@gmail.com",
//       primary: true,
//     },
//   ],
//   phones: [
//     {
//       phone: "599457665",
//       primary: true,
//     },
//   ],
//   sex: "male",
// });

// const toreturn = pupils.read(pupil.id)
// console.log(toreturn);
