import React from 'react'
import HorizontalToggleButtons from './toggle/toggle'
import './words.css'

export default function Words(){

    return(
        <div className="words">
            <h1>How do you want your layout?</h1>
            <HorizontalToggleButtons />
        </div>
    )
}