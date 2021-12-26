import ButtonItem from "../buttonitem/buttonitem"
import EditIcon from '@mui/icons-material/Edit';
import "./carditem.css"

export default function CardItem({card, mode}){
    return(
        <div className="card">
            <div className={mode ? "card-body-night" : "card-body-day"}>
                <div className="main-container">
                    <div className="card-title">
                        {card.title}
                    </div>
                </div>
                <div className="card-text">
                    {card.text}
                </div>
            </div>
        </div>
    )
}
