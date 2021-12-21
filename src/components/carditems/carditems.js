import React, { useEffect, useState } from 'react'
import ButtonItem from "../item/buttonitem/buttonitem";
import CardItem from '../item/carditem/carditem';

import './carditems.css'

export default function CardItems() {
    const [cards, setUsers] = useState([]);

    useEffect(() => {
        const cardsArray = [];
        for (let i = 0; i < 20; i++) {
            const card = {
                id: i,
                title: "Card ",
                text: "This is a subheading...",
                action: i % 2 === 0 ? "add" : "remove"
            };
            cardsArray.push(card);
        }
        setUsers(cardsArray);
    }, []);

    return (
        <div className='main-container'>
            <div className='grid-container'>
                {cards.map((row, index) => {
                    return <div key={index}> <CardItem title={row.title}  text={row.text} action={row.action}></CardItem> 
                    </div>
                })}
            </div>
        </div>
    )
}