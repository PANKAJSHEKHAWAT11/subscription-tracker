function SummaryCards(props){
    const monthlyTotal =props.subscriptions.reduce((sum,sub) => sum + Number(sub.price),0)
    const yearlyTotal = monthlyTotal * 12
    const activeCount = props.subscriptions.length
    return(
        <div className="summary-cards">
            <div>Monthly total   = {monthlyTotal}</div>
            <div>Yearly total    = {yearlyTotal}</div>
            <div>Active subscriptions = {activeCount}</div>
        </div>
    )
}
export default SummaryCards
