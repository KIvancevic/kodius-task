import "./Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from "./StateProvider";

function Checkout() {
  const[{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className="checkout__ad" 
          src={require("./checkoutAd.jpg")} 
          alt="chekoutAd"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
          {basket.map((item,i) => (
              <CheckoutProduct 
                key={i}
                id={item.id}
                title={item.title || 'Description'}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
          ))}    
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout