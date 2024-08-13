import "./TabButton.css"

export default function TabButton({children,onSelect, buttonClick}){
    return (
        <li><button className= {buttonClick ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    )
}