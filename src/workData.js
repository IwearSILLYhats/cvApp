import { v4 } from "uuid";

export class workData {
    constructor () {
        this.position = '',
        this.company = '',
        this.info = '',
        this.date = '',
        this.skills = [''],
        this.id = v4()
    }
}