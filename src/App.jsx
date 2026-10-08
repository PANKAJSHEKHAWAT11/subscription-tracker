import Header from './components/Header'
import SummaryCards from './components/summarycard'
import SubscriptionList from './components/subscriptionlist'
import {useState, useEffect} from 'react'
import './App.css'

function App(){
  const[subscriptions, setsubscriptions] = useState( () => {
    const saved =localStorage.getItem("subscriptions")
    return saved ? JSON.parse(saved):
    [
    {name: "netflix",price: 245},
    {name: "jiohotstar", price: 567},
    {name: "primevideos", price: 678}
  
  ]})
useEffect(() =>{
  localStorage.setItem("subscriptions", JSON.stringify(subscriptions))
}, [subscriptions])
  
function addSubscription(typedName,typedprice){
  const newsub={name:typedName ,price:typedprice}
  setsubscriptions([...subscriptions,newsub])
}

function deleteSubscription(nameToDelete){
  setsubscriptions(subscriptions.filter(sub =>sub.name !== nameToDelete))
}
  return(
    <div>
    <Header onAdd={addSubscription} />
    <SummaryCards subscriptions={subscriptions} />
    <SubscriptionList subscriptions={subscriptions} onDelete={deleteSubscription} /> 
    </div>
  )
}
export default App 
 