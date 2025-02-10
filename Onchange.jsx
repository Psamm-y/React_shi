import { useState } from "react";

function Onchange() {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState();

  function handleQuantityChange(event) {
    setQuantity(event.target.value)
  }
    
  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleCommentChange(event) {
    setComment(event.target.value)
  }
  
  function handlePaymentChange(event) {
    setPayment(event.target.value)
  }

  function handleShippingChange(event) {
    setShipping(event.target.value)
  }
  
  return (
    <>
      <input value={name} type="text" onChange={handleNameChange} />
      <p>Name: {name}</p>
     
      <input value={quantity} type="number" onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      
      <textarea value={comment} placeholder="Additional info..." onChange={handleCommentChange} ></textarea>
      <p>Comment: {comment}</p>
      
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select payment method</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"}
        onChange={handleShippingChange}/>
        Delivery
      </label> <br/>
      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
        onChange={handleShippingChange}/>
        Pick up
      </label>
      <p>Shipping : {shipping}</p>
    </>
  )
}

export default Onchange;
