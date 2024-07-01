import React, { useState } from 'react'
import './LoginForm.css';
import { myAxios } from '../../Service/helper';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate=useNavigate();
    const handlerPopup = () => {
        setModal(!modal)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await myAxios.post('login', formData);
            if (response.status === 200) {
              console.log('Registration successful');
            navigate('/MovieList.js');
            }
          } catch (error) {
            console.error('Registration failed', error);
          }
      };
    

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <div className='popup-btn'>
            <button onClick={handlerPopup}>Open</button>
            {modal && <div className='modal'>
                <div className='overlays'></div>
                <div className='modal-1'>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    <button type="submit">Login</button>
                 </form>
                    <div className='close'><button onClick={handlerPopup}>close</button></div>
                </div>
            </div>}
        </div>
    )
}