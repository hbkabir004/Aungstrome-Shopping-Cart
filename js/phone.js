// For Phone
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    updatePrice('phone-price', 1219,'phone-quantity', true);
    getTotal();
    
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    updatePrice('phone-price', 1219,'phone-quantity', false);
    getTotal();
})

// For Case
document.getElementById('btn-case-plus').addEventListener('click', function(){
    updatePrice('case-price', 59,'case-quantity', true);
    getTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    updatePrice('case-price', 59,'case-quantity', false);
    getTotal();
})

document.getElementById('btn-apply').addEventListener('click', function(){
    const subtotal = parseInt(document.getElementById('subtotal').innerText);
    const cupon = document.getElementById('cupon').value;
    let total;
    if(cupon === 'rohinga' || cupon === 'fahu' || cupon==='vitur-dim' || cupon==='poka'){
        discount = subtotal*0.05;
        total = subtotal - discount; 
    }
    else{
        total = subtotal;
        discount = 0;
        alert('Invalid Cupon Code');
    }
    document.getElementById('total').innerText=parseInt(total);
    document.getElementById('discount').innerText = parseInt(discount);
    
})