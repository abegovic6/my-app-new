import './buttonitem.css'

export default function ButtonItem({text}){
    return(
        <div>
            <button
                className="button-item">
                {text}
            </button>
        </div>
    )
}
