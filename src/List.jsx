import { useLocalStorage } from "./hooks/useLocalStorage";
import { v4 } from "uuid";

export default function List ({props}) {
    const [def, setDefault] = useLocalStorage(props, [{txt:'', id: v4()}])
    return (
        <ul>
        {def.map((e) => {
            return ( 
                <li key={e.id}>
                <input type="text" defaultValue={e.txt} onChange={(event) => {
                    setDefault(
                        def.map(
                            (j) => {
                                if(e.id === j.id){ return {...j, txt: event.target.value}}
                                return j
                            }
                        )
                    )
                }} />
                    <button onClick={() => {
                        setDefault(def.filter((j) => e.id !== j.id))}
                    }>x</button>
                    </li>)
            })}
                    <button onClick={ () => {
                        setDefault([...def, {txt:'', id: v4()}])}
            }>+</button>
            </ul>
    )
}