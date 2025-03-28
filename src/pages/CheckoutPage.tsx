import React from "react";
import { useCart } from "../context/CartContext";
import '../styles/components.css'; // Import the CSS file

const CheckoutPage: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const phoneNumber = "0768 564 533"; // Your Pochi La Biashara number

    return (
        <div className="checkout-page">
            <div className="checkout-content">
                <h1>Checkout</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="cart-items">
                            {cart.map((item) => (
                                <li key={item.id} className="cart-item">
                                    {item.name} - Ksh {item.price} x {item.quantity}
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                                </li>
                            ))}
                        </ul>
                        <h2>Total: Ksh {total}</h2>

                        {/* Payment Instructions */}
                        <div className="payment-instructions">
                            <h3>How to Pay</h3>
                            <ol>
                                <li>Go to the <strong>M-Pesa</strong> menu on your phone.</li>
                                <li>Select <strong>Lipa na M-Pesa</strong>.</li>
                                <li>Choose <strong>Pochi La Biashara</strong>.</li>
                                <li>Enter the number <strong>{phoneNumber}</strong>.</li>
                                <li>Enter the total amount: <strong>Ksh {total}</strong>.</li>
                                <li>Confirm the details and complete the payment.</li>
                            </ol>
                            <p>Alternatively, you can click the button below to quickly initiate the payment:</p>

                            {/* M-Pesa Pay Now Link */}
                            <a 
                                href={`mpesa://pay?phone=${phoneNumber.replace(/\s+/g, "")}&amount=${total}`}
                                className="pay-now-button"
                            >
                                Pay Now
                            </a>
                        </div>

                        <div className="checkout-buttons">
                            <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
                            <button onClick={() => alert("Proceed to payment")} className="proceed-payment-button">
                                Proceed to Payment
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
