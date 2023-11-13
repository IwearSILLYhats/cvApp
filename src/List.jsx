import { useLocalStorage } from "./hooks/useLocalStorage";

export default function List ({props}) {
    const [def, setDefault] = useLocalStorage(props, [])
    return (
        <ul>
        {def.map((e, indx) => {
            return ( 
                <li key={indx}>
                <input type="text" defaultValue={e} onChange=       {(event) => {
                    setDefault(
                        def.map(
                            (j,index) => {
                                if(indx === index){ return event.target.value}
                                return j
                            }
                        )
                    )
                }} />
                    <button onClick={() => {
                        setDefault(def.filter((e,index) => index !== indx))}
                    }>x</button>
                    </li>)
            })}
                    <button onClick={ () => {
                        setDefault([...def, ""])}
            }>+</button>
            </ul>
    )
}