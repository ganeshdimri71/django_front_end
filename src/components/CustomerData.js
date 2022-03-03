// import axios from 'axios'
// import React, { useState, useEffect } from 'react'

// const CustomerData = () => {
//     const [customerData, setCustomerData] = useState([])
//     // useEffect(async() => {
//     //     // async getData(){
//     //     //     const res = await axios('/data');
//     //     //     return await res.json();
//     //     //  }
//     //     const res = await axios.get('http://127.0.0.1:8000/accounts/');
//     //     return await res.data;
//     // }, [])

//     const onClickHandler = async () => {
//         const res = await axios.get('http://127.0.0.1:8000/accounts/');
//         return await res.data;
//     }

//     useEffect(() => {
//         const data = onClickHandler().then(data => {
//             console.log(data)
//             setCustomerData(data)
//             console.log(customerData)
//         })
//     }, [])





//     return (
//         <div>
//             {
//                 customerData.map(customer => (
//                     <div>
//                         <div>{customer.fullName}</div>
//                         <div>{customer.email}</div>
//                         <div>{customer.mobile}</div>
//                     </div>
//                 ))
//             }

//         </div>

//     )
// }

// export default CustomerData
