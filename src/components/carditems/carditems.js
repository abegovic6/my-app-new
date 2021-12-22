import React, { useEffect, useState } from 'react'
import ButtonItem from "../item/buttonitem/buttonitem";
import CardItem from '../item/carditem/carditem';
import EditCardDialog from './editCardDialog';

import './carditems.css'

export default function CardItems({alignment}) {
    const [cards, setUsers] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    useEffect(() => {
        const cardsArray = [];
        for (let i = 1; i < 10; i++) {
            const card = {
                id: i,
                title: "Card " + i,
                text: "This is a subheading..."
            };
            cardsArray.push(card);
        }
        setUsers(cardsArray);
    }, []);

    const editCard = (card) => (event) => {
        setSelectedCard(card)
        setDialogOpen(true)
    }

    const deleteCard = (value) => (event) => {
        event.stopPropagation();
        const filteredArray = cards.filter((element) => element.id !== value);
        setUsers(filteredArray);
    };

    const handleClose = () => {
        console.log('dialog closing')
        setDialogOpen(false)
    }

    const handleSaveAndClose = (card) => {
        setDialogOpen(false)
        setSnackbarOpen(true)
        const cardArray = [...cards]
        let changedCard = cardArray.find(x => x.id === card.id)
        let indexOfChangedElement = cardArray.indexOf(changedCard)
        cardArray[indexOfChangedElement] = card
        setUsers(cardArray)
    }

    const hideNotification = () => {
        setSnackbarOpen(false)
    }

    return (
        <div className='main-container'>
            <div className='grid-container'>
                {cards.map((row, index) => {
                    return <div key={index}>
                        <CardItem 
                            card={row}
                            actionUpdate={editCard(row)}
                                actionDelete={deleteCard(row.id)}>
                        </CardItem>
                    </div>
                })}
            </div>
        </div>
    )
}