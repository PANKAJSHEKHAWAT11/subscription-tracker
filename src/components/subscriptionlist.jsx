import SubscriptionCard from './subscriptioncard'

function SubscriptionList(props){
   return (
   <div>  
    {props.subscriptions.map(function(sub){
        return <SubscriptionCard key={sub.name} name={sub.name} price={sub.price}  onDelete={props.onDelete}/>
})}
   </div>
   )
}
export default SubscriptionList
