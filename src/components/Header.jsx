import {useState} from 'react'
function Header(props){
    const[NameInput,setNameInput]=useState("")
    const[priceInput,setpriceInput]=useState("")
    return(
        <div className="header">
        <h1>Subscription Tracker</h1>
        <input className="input"  
        type="text"
        placeholder='name'
        value={NameInput}
        onChange={(e) =>setNameInput(e.target.value)}
        />
        <input className="input"
        type="number"
        placeholder='price'
        value={priceInput}
        onChange={(e) =>setpriceInput(e.target.value)}
        />
        <button className="add-btn" onClick={() => props.onAdd(NameInput,priceInput)}>Add subscription</button>

        </div>
    )
}
export default Header
