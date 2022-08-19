function updateQuantity(quantityID, isIncrease){
    const previousQuantity= parseInt(document.getElementById(quantityID).value);
    let newQuantity=0;
    if(isIncrease){
      newQuantity = previousQuantity+1
    }
    else{
        newQuantity = previousQuantity-1;
    }
    document.getElementById(quantityID).value = newQuantity;
    
    return newQuantity;
}


function updatePrice(priceID, price,quantityID, isIncrease){
    let quantity = updateQuantity(quantityID, isIncrease);    
    const newPrice = price * quantity;
    document.getElementById(priceID).innerText = newPrice;   
}

function getTotal(){
  const phonesPrice = parseInt(document.getElementById('phone-price').innerText);
  const casesPrice = parseInt(document.getElementById('case-price').innerText);
  const subTotal = phonesPrice + casesPrice;
  const tax = subTotal*0.1;
  const total = subTotal +tax;
  document.getElementById('subtotal').innerText = subTotal;
  document.getElementById('tax').innerText = parseInt(tax);
  document.getElementById('total').innerText = parseInt(total);

}