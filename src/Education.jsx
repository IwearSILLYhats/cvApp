export default function Education ({diploma, grade, school, date}) {
    return (
        <div className="education">        
        <h3><input type="text" placeholder="Diploma goes here" value={diploma || undefined} /></h3>
        <h4><input type="text" placeholder="Grade/Major goes here" value={grade || undefined} /></h4>
        <p><input type="text" placeholder="School/University goes here" value={school || undefined} /></p>
        <p><input type="text" placeholder="Dates goes here" value={date || undefined} /></p>
        </div>
    )
}