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
