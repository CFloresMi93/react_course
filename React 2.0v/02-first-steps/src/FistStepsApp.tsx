import { ItemCounter } from "./shopping-kart/ItemCounter";

interface ItemInCar {
    productName: string,
    quantity: number
}

const itemsInCar: ItemInCar[] = [
    { productName: "Nintendo Switch 2", quantity: 1 },
    { productName: "Pro Controller", quantity: 2 },
    { productName: "Super Mario", quantity: 1 }
]

const getPaddingString = (padding: number): string => {
    const initial = '0px '
    const paddings = (padding.toString() + 'px ').repeat(3)

    return initial + paddings
}

export function FirstStepsApp() {

    return (
        <section style={{ background: 'grey', borderRadius: 5, padding: getPaddingString(10) }}>
            <h1>Carrito de la compra</h1>
            {itemsInCar.map(({ productName, quantity }) => (
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}
        </section>
    )



}