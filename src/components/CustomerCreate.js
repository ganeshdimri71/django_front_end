import React,{useState} from 'react'
import axios from 'axios'

const CustomerCreate = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const onClickHandler = (e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/accounts/create/',{
            fullName:fullName,
            email:email,
            mobile:mobile,
            password:password,
        }).then(data=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div
    >
        FullName: <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
        <br />
        Email: <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        Mobile: <input type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        Password: <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button
            onClick={(e)=>{
                onClickHandler(e);
            }}
        >
            Click
        </button>
    </div>
  )
}

export default CustomerCreate