import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import orders, {reset, getOrders} from "../Features/payments/paymentSlice";
import {toast} from "react-toastify";

function Orders(props) {
    const {orders,isSuccess,isError,message } = useSelector(state => state.orders);
    const dispatch = useDispatch();
    console.log(orders._id);
    useEffect(() => {
        dispatch(getOrders());
    }, []);
    if (orders.length > 0) {
        let createdAt
        for (const dispatch1 of orders) {
               createdAt = dispatch1.createdAt.split('T')[0];
        }

       return (
                <div className="container-fluid">
                    <h1>Orders</h1>
                    <div className="container-fluid mt-4">
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">Order ID</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                        {orders.map((dataElement) => (
                                            <tr>
                                                <th scope="row">{dataElement._id}</th>
                                                <td>{createdAt}</td>
                                                <td><div className="btn btn-primary">view</div></td>
                                                <div className="container-cart">

                                                </div>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

        );
    }



}

export default Orders;