import { BaseSyntheticEvent, useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

export interface ICustomer {
    name: string;
    address: string;
    email: string;
    storeCredit?: number | null;
    phoneNumber: string;

}

function AddCustomerView() {

    const [customer, setCustomer] = useState<ICustomer>({
        name: "",
        address: "",
        email: "",
        storeCredit: null,
        phoneNumber: ""
    })

    const handleChange = (key: string, e: BaseSyntheticEvent): void => {
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [key]: e.target.value
        }))
    }

    const handleAction = async (): Promise<void> => {
        if(customer.storeCredit === null){
            setCustomer((prevData) => ({
                ...prevData,
                storeCredit: 0
            }))
        }
        await axios.post("http://localhost:5000/customer", customer).then((res) => {
            console.log(res)
        })
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '500px', gap: '20px'}}>
            <TextField id="outlined-basic" onChange={(e) => handleChange("name", e)} label="Name" variant="outlined">{customer.name}</TextField>
            <TextField id="outlined-basic" onChange={(e) => handleChange("address", e)} label="Address" variant="outlined">{customer.address}</TextField>
            <TextField id="outlined-basic" onChange={(e) => handleChange("email", e)} label="Email" variant="outlined">{customer.email}</TextField>
            <TextField id="outlined-basic" onChange={(e) => handleChange("phoneNumber", e)} label="Phone" variant="outlined">{customer.phoneNumber}</TextField>
            <TextField id="outlined-basic" onChange={(e) => handleChange("storeCredit", e)} label="Store Credit?" variant="outlined">{customer.storeCredit}</TextField>
            <Button onKeyDown={handleAction} onClick={handleAction} variant="outlined">Add Customer</Button>
        </div>         
    )
}

export default AddCustomerView;