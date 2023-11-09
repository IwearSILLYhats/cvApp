import { useLocalStorage } from "./hooks/useLocalStorage";
import Contact from "./Contact";
import Education from "./Education";
import { v4 } from "uuid";
import { ListAdd, ListRemove } from "./ListFuncs";

export default function LeftNav () {

    return (
        <div>
        <section className='leftNav left'>
            <h2>CONTACT</h2>
            <Contact />
            <hr />
            <h2>EDUCATION</h2>
            <Education />
            <hr />
            <ul>
            <h2>SKILLS</h2>
            <li>Thinking</li>
            <li>Breathing</li>
            <li>Eating</li>
            </ul>
            <hr />
            <ul>
            <h2>EXPERTISE</h2>
            <li>Eating</li>
            <li>Breathing</li>
            <li>Thinking</li>
            </ul>
            <hr />
            <h2>INTERESTS</h2>
            <p>Lorem ipsum, dolor sit, amet consectetur, adipisicing elit</p>
        </section>
        </div>
    )
}