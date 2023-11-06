import { useLocalStorage } from "./hooks/useLocalStorage";
import Education from "./Education";
import { EduItem } from "./eduItem";
import { v4 } from "uuid";
import { ListAdd, ListRemove } from "./ListFuncs";

export default function LeftNav () {
    const [phone, setPhone] = useLocalStorage('phone', '');
    const [education, setEducation] = useLocalStorage('education', [new EduItem]);
    return (
        <div>
        <section className='leftNav left'>
            <h2>CONTACT</h2>
            <div className="contact">
                <img src="phone" alt="Phone" />
                <p><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /></p>
                <img src="email" alt="Email" />
                <p><input type="email" /></p>
                <img src="location" alt="Location" />
                <p><input type="text" /></p>
                <img src="linkedIn" alt="LinkedIn" />
                <p><input type="text" /></p>
            </div>
            <hr />
            <h2>EDUCATION</h2>
            {education.map(edu => <Education key={edu.id} props={edu} />)}

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