import { v4 } from "uuid";

export class EduData {
    constructor () {
        this.diploma = '',
        this.grade = '',
        this.school = '',
        this.date = '',
        this.id = v4()
    }
}