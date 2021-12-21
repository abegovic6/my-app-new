import './headerItem.css'
import {Link} from 'react-router-dom'

export default function HeaderItem({route, text}){    
    return (
        <li className="headerItem">
            <a className="headerItemColor"></a>
            <Link to={route}>{text}</Link>
        </li>
    )
}