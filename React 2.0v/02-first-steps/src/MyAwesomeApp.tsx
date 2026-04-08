import type { CSSProperties } from "react"

const firstName = 'Carlos'
const lastName = 'Flores'

const favouriteGames = ['God of War', 'Expedition 33', 'No rest for the wicked']
const isActive = true

const address = {
    zipCode: 42781,
    country: 'Deutschland'
}

const myStyle: CSSProperties = {
    backgroundColor: '#bcbcbc',
    borderRadius: isActive ? 10 : 20,
    padding: 10,
    marginTop: 35
}

export function MyAwesomeApp() {

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favouriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'No active'}</h1>

            <p style={myStyle}>
                {JSON.stringify(address)}
            </p>
        </>
    )
}