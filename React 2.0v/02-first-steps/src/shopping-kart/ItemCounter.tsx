import React, { useState } from 'react'



import './ItemCounter.css'

interface ItemCounterProps {
    name: string,
    quantity?: number
}

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {

    const [count, setCount] = useState(quantity)


    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {

        if (count === 1) return

        setCount(count - 1)
    }

    return (
        <section className="item-row">
            <span
                className="item-text"
                style={{ color: count === 1 ? 'red' : 'black' }}
            >
                {name}
            </span>
            <button
                onClick={handleAdd}
            >
                +1
            </button>
            <span>{count ? count : 0}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    )
}
