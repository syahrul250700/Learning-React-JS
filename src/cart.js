import { useEffect, useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState(0);

    useEffect(()=>{
        if(cart > 4){
            console.log('stok habis')
        }else{
            console.log('cart'+ cart)
        }
        
    },[cart])

    return ( <div><h1>Product 1</h1><p>{cart}</p><button onClick={()=>setCart(cart+1)}>add</button></div> );
}
 
export default Cart;