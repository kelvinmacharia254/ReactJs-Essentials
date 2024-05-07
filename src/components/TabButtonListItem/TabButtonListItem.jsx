import './TabButtonListItem.css'
export default function TabButtonListItem({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}