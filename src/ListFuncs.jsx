export function ListAdd (item, list, func) {
    return (
        <div>
            <button className="add" onClick={() => {
                func([...list, item])
            }}>+</button>
        </div>
    )
}
export function ListRemove (list, id, func) {
    return (
            <button className="remove" onClick={(list, id, func) => {
                func(list.filter(indx => indx.id !== id))
            }}>x</button>
    )
}