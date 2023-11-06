import {useLocalStorage} from "./hooks/useLocalStorage";

export default function Header () {
    const [firstName, setFirstName] = useLocalStorage('firstName', '');
    const [lastName, setLastName] = useLocalStorage('lastName', '');
    const [profession, setProfession] = useLocalStorage('profession', '');
    return (
        <header className="header">
            <div className="headerText">
            <h1><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></h1>
            <h1><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /></h1>
            <h2><input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} /></h2>
            </div>
            <picture>
                <img src="" alt='mugshot' />
            </picture>
        </header>
    )
}