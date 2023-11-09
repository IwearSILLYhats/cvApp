import { EduData } from "./eduData";
import { ListAdd, ListRemove } from "./ListFuncs";

export default function Education () {
    const [education, setEducation] = useLocalStorage('education', [new EduData]);
    return (
        <div className="education">    
        {education.map(edu => <EduItem key={edu.id} props={edu} />)}
        <ListAdd />
        </div>
    )
}

function EduItem ({diploma, grade, school, date}) {
    return (
        <div>
        <h3><input type="text" placeholder="Diploma goes here" value={diploma || undefined} /></h3>
        <h4><input type="text" placeholder="Grade/Major goes here" value={grade || undefined} /></h4>
        <p><input type="text" placeholder="School/University goes here" value={school || undefined} /></p>
        <p><input type="text" placeholder="Dates goes here" value={date || undefined} /></p>
        </div>
    )
}