namespace Subjects {
    export class Subject {
        private _teacher: Teacher;
        
        public setTeacher (teacher: Teacher) {
            this._teacher = teacher;
        }

        get teacher(): Teacher {
            return this._teacher;
        }
    }
}