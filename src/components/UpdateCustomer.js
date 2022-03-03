// import React,{useState, useEffect} from 'react'
// import axios from 'axios'

// const DeleteCustomer = () => {
//     const [customerData, setCustomerData] = useState([])
//     const [fullName, setFullName] = useState('')
//     const [email, setEmail] = useState('')
//     const [mobile, setMobile] = useState('')
//     const [password, setPassword] = useState('')
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

//     const onClickUpdateHandler=(id)=>{
//         // const headers = {
//         //     'Access-Control-Allow-Origin': '*',
//         //     'Content-Type': 'application/json',
//         // }
//         axios.put(
//             `http://127.0.0.1:8000/accounts/update/${id}/`,{
//                 fullName:fullName,
//                 email:email,
//                 mobile:mobile,
//                 password:password,
//             }
//             // {
//             //   headers: headers,
//             // }
//           ).then(data=>{
//               console.log(data)
//           })
//         // axios.delete(`http://127.0.0.1:8000/accounts/delete/${id}`,{
//         //     headers: {"Access-Control-Allow-Origin": "*"}  
//         // })
//     }
//   return (
      
//       <>
//      <div>
//             {

//                 customerData.map(customer => (
//                     <div
//                     >
//                         FullName: <input type="text" value={customer.fullName} onChange={(e)=>setFullName(e.target.value)} />
//                         <br />
//                         Email: <input type="email" value={customer.email} onChange={(e)=>setEmail(e.target.value)} />
//                         <br />
//                         Mobile: <input type="number" value={customer.mobile} onChange={(e)=>setMobile(e.target.value)} />
//                         Password: <input type="text" value={customer.password} onChange={(e)=>setPassword(e.target.value)} />
//                         <br />
//                         <button
//                             onClick={(e)=>{
//                                 onClickUpdateHandler(e);
//                             }}
//                         >
//                             Update
//                         </button>
//                     </div>
//                 ))
//             }

//         </div>
//       </>
//   )
// }

// export default DeleteCustomer