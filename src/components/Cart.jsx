import cl from './cart.module.css'
export const Cart = ({width,changeWidth}) => {
    const plusTen = () => {
        changeWidth(width + 10)
    }
    return (
        <div>
            <h1 className={cl.color}>я карточка {width}</h1>
            <button onClick={plusTen}>change</button>
        </div>
    )
}