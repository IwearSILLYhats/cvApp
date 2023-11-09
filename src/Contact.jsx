import { useLocalStorage } from "./hooks/useLocalStorage";

export default function Contact () {
    const [phone, setPhone] = useLocalStorage('phone', '');
    const [email, setEmail] = useLocalStorage('email', '');
    const [location, setLocation] = useLocalStorage('location', '');
    const [linkedIn, setLinkedIn] = useLocalStorage('linkedin', '');
    return (
        <div className="contact">
        <img src="phone" alt="Phone" />
        <p><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /></p>
        <img src="email" alt="Email" />
        <p><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
        <img src="location" alt="Location" />
        <p><input type="text" value={location} onChange={(e) => setLocation(e.target.value)} /></p>
        <img src="linkedIn" alt="LinkedIn" />
        <p><input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} /></p>
    </div>
    )
}