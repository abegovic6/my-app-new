import ButtonItem from "../buttonitem/buttonitem"
import "./carditem.css"

export default function CardItem({title, text, action}){
    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">
                    {text}
                </p>
                <ButtonItem text={action}/>
            </div>
        </div>
    )
}
