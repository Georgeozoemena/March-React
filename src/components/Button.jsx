export function Button({name, onClick, onChange, children}){
    return <button className={name} onClick={onClick} onChange={onChange}>{children}</button>
}

export function RadioButton({name}){
    return <button type="radio">{name}</button>
}