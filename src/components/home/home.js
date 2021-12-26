import React, { useEffect, useState } from 'react'
import './home.css'
import CardItem from './mycarditem/carditem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Home({ alignment }) {
    const [cards, setUsers] = useState([]);
    const [mode, setMode] = useState(false);

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

    const changeMode = (event, nextMode) => {
        setMode(nextMode);
        console.log("promijenjenoooo")
    }

    return (
        <>
            <div className='center-switch'>
                <FormGroup>
                    <FormControlLabel control={<Switch value={mode}
                        onChange={changeMode} />} label="Dark mode" />
                </FormGroup>
            </div>
            <div className='main-container'>
                <div className='grid-container'>
                    { mode === true && (<>{cards.map((row, index) => {
                            return <div key={index}>
                                <CardItem
                                    card={row} mode={mode}>
                                </CardItem>
                            </div>
                        })}
                        </>
                        )}
                    {mode === false && (<>{cards.map((row, index) => {
                            return <div key={index}>
                                <CardItem
                                    card={row} mode={mode}>
                                </CardItem>
                            </div>
                        })}
                        </>)
                    }
                </div>
            </div>
        </>

    )
}
