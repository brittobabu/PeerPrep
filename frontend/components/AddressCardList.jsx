'use client'

import AddressCard from './AddressCard'
import { useState } from 'react'

// render list of AddressCard components
const AddressCardList = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: 'Home',
      description: '505 Independence Dr.',
    }
  ])

  // Function to delete an address
  const deleteAddress = (addressId) => {
      // Call API to delete address from the server...

      // If successful, update state to remove the address
      setAddresses(addresses.filter(address => address.id !== addressId));
  };

    
  return (
    <div className="flex-1 max-w-3xl">
      {addresses.map((address) => (
        <AddressCard key={address.id} address={address} onDelete={deleteAddress}/>
      ))}
    </div>
  )
}

export default AddressCardList
