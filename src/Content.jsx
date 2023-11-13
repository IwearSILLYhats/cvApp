import { useLocalStorage } from "./hooks/useLocalStorage";
import Work from "./Work"

export default function Content () {
    const [profile, setProfile] = useLocalStorage('profile', '')
    return (
        <main className="main">
            <h2>PROFILE</h2>
            <p><textarea name="" id="" rows='7' defaultValue={profile} onChange={(e) => setProfile(e.target.value)} ></textarea></p>
            <hr />
            <h2>WORK EXPERIENCE</h2>
            <Work />
        </main>
    )
}