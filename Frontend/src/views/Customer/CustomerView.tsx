import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import axios from "axios"
import Autocomplete from '@mui/material/Autocomplete';

export default function CustomerView() {
  const [customers, setCustomers] = useState<object[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<object | null>(null)

  useEffect(() => {
    axios.get("http://localhost:5000/customer").then((res) => {
        console.log(res)
        setCustomers(res.data)
    })
  }, [])

  const onSelectUser = (e) => {
    console.log(e.target.textContent, 'po')
    const selectedCustomerArray = customers.filter((customer) => {
        return customer.name === e.target.textContent;
    })
    console.log(selectedCustomerArray)
    setSelectedCustomer(selectedCustomerArray[0])
  }


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '30px 80px'}}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={customers.map(customer => customer.name)}
            sx={{ width: 600, marginBottom: '12px' }}
            renderInput={(params) => <TextField {...params} label="Search Customer" />}
            onChange={(e) => onSelectUser(e)}
        />
        {
            selectedCustomer !== null
            ?
            <div style={{display: 'flex', flexDirection: 'column', 
                gap: '12px', alignItems: 'center', justifyContent: 'center'
            }}>
                <TextField sx={{width: 600}} value={selectedCustomer.address}></TextField>
                <TextField sx={{width: 600}} value={selectedCustomer.email}></TextField>
                <TextField sx={{width: 600}}  value={selectedCustomer.phoneNumber}></TextField>
                <TextField  sx={{width: 600}} value={selectedCustomer.storeCredit}></TextField>
            </div>
            :
            null
        }
    </div>
  );
}
