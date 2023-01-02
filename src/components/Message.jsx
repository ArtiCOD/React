import cl from './message.module.css'
export const Message = (props) => {
    return (
        <div className={cl.color}>
            <h2>{props.userName}</h2>
            <h2>{props.secondName}</h2>
            <button onClick={()=>props.changeName && props.changeName('vasya')}>changeName</button>
        </div>
    )
}