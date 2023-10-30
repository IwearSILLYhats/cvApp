export default function LeftNav () {
    return (
        <div>
        <section className='leftNav left'>
            <h2>CONTACT</h2>
            <div className="contact">
                <img src="phone" alt="Phone" />
                <p><input type="tel" /></p>
                <img src="email" alt="Email" />
                <p><input type="email" /></p>
                <img src="location" alt="Location" />
                <p><input type="text" /></p>
                <img src="linkedIn" alt="LinkedIn" />
                <p><input type="text" /></p>
            </div>
            <hr />
            <h2>EDUCATION</h2>
            <h3>Degree/Diploma Name</h3>
            <h4>Major | Grade</h4>
            <p>University or College Name</p>
            <p>Date</p>
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