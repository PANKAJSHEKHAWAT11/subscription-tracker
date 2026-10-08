function SubscriptionCard(props){
    return(
        <div className="subscription-card">
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button onClick={() => props.onDelete(props.name)}>Delete</button>
        
        </div>
    )
}
export default SubscriptionCard
