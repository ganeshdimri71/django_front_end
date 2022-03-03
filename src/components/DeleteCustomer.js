// import React,{useState, useEffect} from 'react'
// import axios from 'axios'

// const DeleteCustomer = () => {
//     const [customerData, setCustomerData] = useState([])
//     const onClickHandler = async () => {
//         const res = await axios.get('http://127.0.0.1:8000/accounts/',
//         );
//         return await res.data;
//     }

//     useEffect(() => {
//         const data = onClickHandler().then(data => {
//             console.log(data)
//             setCustomerData(data)
//             console.log(customerData)
//         })
//     }, [])

//     const onClickDeleteHandler=(id)=>{
//         const headers = {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//         }
//         axios.delete(
//             `http://127.0.0.1:8000/accounts/delete/${id}/`,
//             {
//               headers: headers,
//             }
//           );
//         // axios.delete(`http://127.0.0.1:8000/accounts/delete/${id}`,{
//         //     headers: {"Access-Control-Allow-Origin": "*"}  
//         // })
//     }
//   return (
//       <>
//      <div>
//             {
//                 customerData.map(customer => (
//                     <div>
//                         <div>{customer.id}</div>
//                         <div>{customer.fullName}</div>
//                         <div>{customer.email}</div>
//                         <div>{customer.mobile}</div>
//                         <div>{customer.password}</div>
//                         <button
//                         onClick={()=>{
//                             onClickDeleteHandler(customer.id)
//                         }}
//                         >Delete</button>
//                     </div>
//                 ))
//             }

//         </div>
//       </>
//   )
// }

// export default DeleteCustomer