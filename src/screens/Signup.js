import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Signup() {
    let navigate=useNavigate();
    const [credentials, setCredentials] = useState({ name: "",email:"", password: "", geoloaction: "" })
    const handleSubmit = async (e) => {
        console.log("submit click");
        e.preventDefault()
        const response = await fetch(`https://food-backend-2-9337.onrender.com/api/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geoloaction })
        });
        const json = await response.json()
        navigate("/login");
        console.log(json);

    }
    const changeHandler = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" >Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={changeHandler}id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={changeHandler} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geoloaction' value={credentials.geoloaction}onChange={changeHandler}  />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}
