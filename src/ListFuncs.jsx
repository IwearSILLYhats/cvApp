export function ListAdd (item, list, func) {
    return (
        <div>
            <button onClick={() => {
                func([...list, item])
            }}>+</button>
        </div>
    )
}
export function ListRemove (list, id, func) {
    return (
            <button onClick={() => {
                func(list.filter(indx => indx.id !== id))
            }}>x</button>
    )
}