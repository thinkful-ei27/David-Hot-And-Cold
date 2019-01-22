import React from 'react';

import './gameBox.css';
export default function GameBoxComponent(props) {


    return <div className="game-box">
        <form>
            <input placeholder="pick a number 1-100 eg. 42" type="number" name="inputBox"/>
            <input type="submit" value="Guess"/>
        </form>
    </div>
}
//form to wrap the input and button
//input that takes in the value, provides that value to this.state.guesses
//button to submit the form
//label that recieves this.state.guess and uses .length the get the count of guesses
//^Prev Label that represents the amount of guesses