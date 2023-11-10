import { useLocalStorage } from "./hooks/useLocalStorage";
import { EduData } from "./eduData";

export default function Education () {
    const [education, setEducation] = useLocalStorage('education', [new EduData]);

    function updateItem (item) {
        setEducation(education.map((e) => {
            if (e.id === item.id) {
                return {...item}
            }
            return e
        }))
    }
    return (
        <div className="education">    
        {education.map(edu => {
            return <div key={edu.id}>
                <EduItem props={edu} update={updateItem} />
                <button onClick={() => {
                    setEducation(education.filter(e => e.id !== edu.id))}
                    }>x</button>
            </div>
        })}
        <button onClick={ () => {
            setEducation([...education, new EduData])}
            }>+</button>
        </div>
    )
}

function EduItem ({props, update}) {
    return (
        <>
        <h3><input type="text" placeholder="Diploma goes here" defaultValue={props.diploma} onChange={(e) => update({...props, diploma: e.target.value})} /></h3>
        <h4><input type="text" placeholder="Grade/Major goes here" defaultValue={props.grade} onChange={(e) => update({...props, grade: e.target.value})} /></h4>
        <p><input type="text" placeholder="School/University goes here" defaultValue={props.school} onChange={(e) => update({...props, school: e.target.value})} /></p>
        <p><input type="text" placeholder="Dates goes here" defaultValue={props.date} onChange={(e) => update({...props, date: e.target.value})} /></p>
        </>
    )
}