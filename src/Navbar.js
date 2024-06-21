import { useState, React } from 'react'
import '/Users/manikmittal/dev1/dev1/src/nav.css'


import axios from 'axios';
const Navbar = () => {
    const submit = (e) => {


        e.preventDefault();
        try {
            const submit = axios.post('/api/vi/login', {
                name: name,
                email: email,
                password: pass
            });

        } catch (error) {

        }
    };
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>

<div className="navbar">
            <button className="navbar-toggler" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-items ${isOpen ? 'show' : ''}`}>
                <button>Home</button>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>

            <div className='form' >
                <form  >
                    <input type='text' placeholder='Enter your Name' onChange={(e) => {
                        setName(e.target.value);
                    }}></input>
                    <input type='text' placeholder='Enter your Email' onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                    <input type='text' placeholder='Enter your Password' onChange={(e) => {
                        setPass(e.target.value);
                    }}></input>

                    <button value='submit' className='btn btn-danger' style={{ padding: '20px' }} onClick={submit}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Navbar