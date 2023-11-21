import React, {useEffect, useState} from 'react';



import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {reset, updateUser} from "../../Features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
function DelivryInfo() {
    const [formData, setFormData] = useState({
        address: "",
        city: "",
        zipCode: "",
        telephone: "",
    });
    localStorage.clear()
    const {address,city,zipCode,telephone} = formData;
const dispatch = useDispatch()
    let {user,isSuccess, isError, message} = useSelector((state) => state.auth);
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const submit = (e) => {
        console.log(localStorage.getItem())
        e.preventDefault()
        if (address === "" || city === "" || zipCode === "" || telephone === "") {
            toast.error("Please fill in all fields")
        } else {
           dispatch(updateUser(formData))
        }
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success(message)
            dispatch(reset())
        }
        if (isError) {
            toast.error(message)
            dispatch(reset())
        }
    }, [isSuccess,isError]);

    return (
        <div className="container">
            <div className="row mx-0 justify-content-center">

                    <form>

                        <label className="d-block mb-1">
                            <span className="form-label d-block">Address </span>
                            <input
                                name="address"
                                type="text"
                                className="form-control"
                                placeholder=""
                                onChange={e => onChange(e)}
                            />
                        </label>

                        <label className="d-block mb-1">
                            <span className="form-label d-block">City</span>
                            <input name="city" type="text" className="form-control" placeholder="" onChange={e => onChange(e)}/>
                        </label>


                        <label className="d-block mb-1">
                            <span className="form-label d-block">Zip/Postal code</span>
                            <input name="zipCode" type="text" className="form-control" placeholder="" onChange={e => onChange(e)} />
                        </label>



                        <label className="d-block mb-1">
                            <span className="form-label d-block">Telephone</span>
                            <input
                                name="telephone"
                                type="text"
                                className="form-control"
                                placeholder=""
                                onChange={e => onChange(e)}
                            />
                        </label>



                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary px-3 rounded-3" onClick={e=>submit(e)}>
                                Save
                            </button>
                        </div>



                    </form>

            </div>
        </div>
    );
}

export default DelivryInfo;