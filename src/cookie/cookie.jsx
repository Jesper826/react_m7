import { useState } from 'react'
import './cookie.css'

export function Cookie(){
    const [score, setScore] = useState(0);
    const [grandmas, setGrandmas] = useState(0);
    const grandmaCost = Math.round(20 * 1.15 ** grandmas);

    function scoreUp(){
        setScore((prev) => prev + 1 + grandmas);
    }

    function buyGrandma(){
        if (score >= grandmaCost){
            setGrandmas((prev) => prev + 1);
            setScore((prev) => prev - grandmaCost);
        }
    }

    return (
        <section className="Cookie">
            <h1>Cookie clicker</h1>
            <p>Click the cookie to earn points!</p>
            <div>Score: {score}</div>
            <button id="button" className="cookie-button" onClick={scoreUp}>Click me!</button>
            <label htmlFor="button">Grandmas: {grandmas}</label>
            <button className="upgrade" onClick={buyGrandma} disabled={score < grandmaCost}>
                Buy grandma ({grandmaCost})
            </button>
        </section>
    )
}