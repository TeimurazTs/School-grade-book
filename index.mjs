import { Lms, Subject } from "./LMS.mjs";
import { Pupils } from "./pupils.mjs";
import { GradeBooks } from "./gradebooks.mjs";
import { Teachers } from "./teachers.mjs";
import { Groups } from "./groups.mjs";

// teachers stuff

const teachers = new Teachers();

const teacherId = teachers.add({
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

// pupil stuff

const pupils = new Pupils();

const pupil = pupils.add({
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

// lms stuff

export const history = new Subject({
  title: "History",
  lessons: 24,
});

export const lms = new Lms();

lms.add(history);

// groups stuff

const pupilId = pupil.id;

const room = 236;

export const groups = new Groups();

export const groupId = groups.add(room);

groups.addPupil(groupId, pupils.read(pupil.id));

groups.update(groupId, {
  room: 237,
});

const returnTo = groups.readAll();

// gradebooks stuff

const gradebooks = new GradeBooks(groups, teachers, lms);

const gradebook = gradebooks.add(groupId);

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9,
};

gradebooks.addRecord(gradebook, record);

let gradebook1 =  gradebooks.readAll(gradebook);

console.log(gradebook1)