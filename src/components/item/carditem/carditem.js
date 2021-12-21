import ButtonItem from "../buttonitem/buttonitem"
import EditIcon from '@mui/icons-material/Edit';
import "./carditem.css"

export default function CardItem({card, actionUpdate, actionDelete}){
    return(
        <div className="card">
            <div className="card-body">
                <div className="main-container">
                    <div className="card-title">
                        {card.title}
                    </div>
                    <div className="edit-icon">
                        <EditIcon onClick={actionUpdate} ></EditIcon>
                    </div>
                </div>
                <div className="card-text">
                    {card.text}
                </div>
                <ButtonItem text={"Delete"} onClick={actionDelete}/>
            </div>
        </div>
    )
}
