import { v4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { workData } from "./workData";

export default function Work () {
    const [work, setWork] = useLocalStorage('work', [new workData]);

    function updateItem (item) {
        setWork(work.map((e) => {
            if (e.id === item.id) {
                return {...item}
            }
            return e
        }))
    }
    return (
        <div className="work">    
        {work.map(wrk => {
            return <div key={wrk.id}>
                <WorkItem props={wrk} update={updateItem} />
                <button onClick={() => {
                    setWork(work.filter(e => e.id !== wrk.id))}
                    }>x</button>
            </div>
        })}
        <button onClick={ () => {
            setWork([...work, new workData])}
            }>+</button>
        </div>
    )
}

function WorkItem ({props, update}) {
    return (
        <div>
        <h3><input type="text" placeholder="Job Title / Position" defaultValue={props.position} onChange={(e) => update({...props, position: e.target.value})} /></h3>

        <h4><input type="text" placeholder="Company" defaultValue={props.company} onChange={(e) => update({...props, company: e.target.value})} /> | <input type="text" placeholder="Dates" defaultValue={props.date} onChange={(e) => update({...props, date: e.target.value})} /></h4>

        <p><textarea type="text" placeholder="Summary goes here" defaultValue={props.info} onChange={(e) => update({...props, info: e.target.value})} /></p>

        <p><input type="text" placeholder="Dates goes here" defaultValue={props.date} onChange={(e) => update({...props, date: e.target.value})} /></p>

            <ul>
                {props.skills.map( ((skill) => {
                return (
                <li key={skill.id}>
                    <input type="text" defaultValue={skill.txt} onChange={(e) => {
                        update({...props, skills: props.skills.map((skl) => {
                            if (skl.id === skill.id) return {...skill, txt: e.target.value}
                            return skl
                        } )})
                    }} />
                    <button onClick={() => {
                        update({...props,  skills: props.skills.filter((e) => e.id !== skill.id)})}
                    }>x</button>
                </li>)}))}
                <button onClick={ () => {
            update({...props, skills: [...props.skills, {txt:'', id: v4()}]})}
            }>+</button>
            </ul>
        </div>
    )
}
