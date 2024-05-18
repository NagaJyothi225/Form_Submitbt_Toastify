// 
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormCssExp.css';
const FormExp = () => {
    const [userName, setUserName] = useState("");
    const [newUserDetails, setNewUserDetails] = useState("");

    const notify = () => toast("Wow so easy!");

    const getUserName = (event) => {
        setUserName(event.target.value);
    }

    const userDetails = (e) => {
        e.preventDefault();
        setNewUserDetails(userName);
        notify();
    }
    
    return (
        <section className='container'>
            <h1>Hello, {newUserDetails}</h1>
            <ToastContainer />
            <div>
                <form className='form-container' onSubmit={userDetails}>
                    <input className='inputtext' style={{border:'2px solid black'}}
                        type='text' 
                        placeholder='Enter Your Name' 
                        value={userName}
                        onChange={getUserName}
                    /><br/>
                    <button className='form-button'
                         
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default FormExp;
