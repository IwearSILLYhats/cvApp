import { v4 } from "uuid";

export class workData {
    constructor () {
        this.position = '',
        this.company = '',
        this.info = '',
        this.date = '',
        this.skills = [{txt: '', id: v4() }],
        this.id = v4()
    }
}