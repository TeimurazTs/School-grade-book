import { Lms, Subject } from "./LMS";
import { Pupils } from "./pupils";
import { GradeBooks } from "./gradebooks";
import { Teachers } from "./teachers";
import { Groups } from "./groups";

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