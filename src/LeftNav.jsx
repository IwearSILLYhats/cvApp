import { useLocalStorage } from "./hooks/useLocalStorage";
import Contact from "./Contact";
import Education from "./Education";
import List from "./List";
import { v4 } from "uuid";
import { ListAdd, ListRemove } from "./ListFuncs";

export default function LeftNav () {
    const [interests, setInterests] = useLocalStorage('interests', '')
    return (
        <div>
        <section className='leftNav left'>
            <h2>CONTACT</h2>
            <Contact />
            <hr />
            <h2>EDUCATION</h2>
            <Education />
            <hr />
            <h2>SKILLS</h2>
            <List props='skills' />
            <hr />
            <ul>
            <h2>EXPERTISE</h2>
            <List props='expertise' />
            </ul>
            <hr />
            <h2>INTERESTS</h2>
            <p><textarea defaultValue={interests} rows='3' onChange={(e) => setInterests( e.target.value)}></textarea></p>
        </section>
        </div>
    )
}