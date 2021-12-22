import React from 'react'
import HorizontalToggleButtons from '../item/toggle/toggle'
import './options.css'

export default function Options(){

    return(
        <div className="options">
            <h1>How do you want your layout?</h1>
            <HorizontalToggleButtons />
        </div>
    )
}