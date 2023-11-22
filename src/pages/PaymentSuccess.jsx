import React, {useEffect} from 'react';
import '../Assets/style/paymentSuccess.scss';
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../Features/payments/paymentSlice";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
function PaymentSuccess(props) {
    const dispatch = useDispatch();
    const { isError, isSuccess} = useSelector(state => state.orders);
    const cart  = JSON.parse(localStorage.getItem('cart'));
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (cart && user) {
            const allPrice  = cart.reduce((acc, curr) => acc + curr.price, 0);
            const data = {
                user: user._id,
                products:[...cart],
                totalPrice: parseInt(allPrice)
            }
            dispatch(createOrder(data));
        }else {
            toast.error("Une erreur est survenue lors de la validation de votre commande");
            setTimeout(() => {
                navigate('/checkout')
            }, 5000);
        }
    },[]);
    const navigate = useNavigate();
    useEffect(() => {
          if (isSuccess) {
                toast.success("Votre commande a été validée avec succès");
                setTimeout(() => {
                    navigate('/')
                }, 5000);
            }
            if (isError) {
                toast.error("Une erreur est survenue lors de la validation de votre commande");
                navigate('/checkout')
            }
    }, [isSuccess, isError]);

    return (
        <div className="body-success">
            <i class="pacman-loader"></i>
        </div>
    );
}

export default PaymentSuccess;