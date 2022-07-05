import { pupil } from "./index";

let pupilId = pupil.id

export class GradeBooks {
  groups: Groups;
  teachers: Teachers;
  lms: Lms;
  mapData: Map<any, any>;
  id: number;
  constructor(groups: Groups, teachers: Teachers, lms: Lms) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
    this.mapData = new Map();
  }

  add(groupId: string) {
    this.id = Math.random();
    this.mapData.set(this.id, this.groups.mapData.get(groupId));
    return this.id;
  }

  clear(): void {
    this.mapData = new Map();
  }

  addRecord(gradeBookId: number, record) {
    let firstStudent: string = "";
    let lastStudent: string = "";
    let firstTeacher = this.teachers.mapData.get(record.teacherId).name.first;
    let lastTeacher = this.teachers.mapData.get(record.teacherId).name.last;
    this.mapData.get(gradeBookId).pupils.forEach((element: any) => {
      if (element.id === record.pupilId) {
        firstStudent = element.name.first;
      }
    });
    this.mapData.get(gradeBookId).pupils.forEach((element: any) => {
      if (element.id === record.pupilId) {
        lastStudent = element.name.last;
      }
    });
    let subject = this.lms.mapData.get(record.subjectId).title;
    if (this.mapData.get(gradeBookId)[record.pupilId] === undefined) {
      this.mapData.get(gradeBookId)[record.pupilId] = {
        name: firstStudent + " " + lastStudent,
        records: [
          {
            teacher: firstTeacher + " " + lastTeacher,
            subject: subject,
            lesson: record.lesson,
            mark: record.mark,
          },
        ],
      };
    } else {
      this.mapData.get(gradeBookId)[pupilId].records.push({
        teacher: firstTeacher + " " + lastTeacher,
        subject: subject,
        lesson: record.lesson,
        mark: record.mark,
      });
    }
  }
}

interface Groups {
  id: string;
  mapData: Map<string, any>;
  room: number;
  pupils: {}[];
}

interface Teachers {
  id: string;
  mapData: Map<string, any>;
}

interface Lms {
  mapData: Map<string, any>;
}
