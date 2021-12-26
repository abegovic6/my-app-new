import './header.css'
import HeaderItem from './headerItem'
import React, { useState, useContext } from "react";
import { UserContext } from '../../App'

export default function Header() {
    const loggedInUser = useContext(UserContext);

    const [selectedItem, setSelectedItem] = useState("");

    const handleSelectHeaderItem = (value) => {
        setSelectedItem(value);
    };

    return (
        <>
            <div className="headerContainer">
                <ul>
                    <li>
                        <HeaderItem
                            text={"Home"}
                            route={"/"}
                            onClick={handleSelectHeaderItem}
                            isSelectedItem={selectedItem === "Home"}
                        />
                    </li>
                    <li>
                        <HeaderItem
                            text={"About"}
                            route={"/about"}
                            onClick={handleSelectHeaderItem}
                            isSelectedItem={selectedItem === "About"}
                        />
                    </li>
                    <li>
                        <HeaderItem
                            text={"Contact"}
                            route={"/contact"}
                            onClick={handleSelectHeaderItem}
                            isSelectedItem={selectedItem === "Contact"}
                        />
                    </li>
                    <li>
                        <HeaderItem
                            text={"Words"}
                            route={"/words"}
                            onClick={handleSelectHeaderItem}
                            isSelectedItem={selectedItem === "Words"}
                        />
                    </li>
                    {loggedInUser === 'admin' && <li><HeaderItem
                        text={"Users"}
                        route={"/users"}
                        onClick={handleSelectHeaderItem}
                        isSelectedItem={selectedItem === "Users"}
                    /></li>}
                </ul>
            </div>
        </>
    );
}