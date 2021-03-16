import React, { useState } from 'react';
import './registration.css';

interface RegistrationProps {
    signIn: (user: any) => void;
}

export const Registration = (props : RegistrationProps) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [loading, setLoading] = useState(false);


    const handleFileInput = (e: any) => {
        const reader: any = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function() {
            setAvatar(reader.result);
            setTimeout(() => console.log(avatar), 0);
        }
    }

    const handleLoginInput = (e: any) => {
        setLogin(e.target.value);
    }

    const handlePasswordInput = (e: any) => {
        setPassword(e.target.value);
    }

    const createUser = async (user: any) => {
        setLoading(true);
        const response = await fetch('https://travel-app-be1.herokuapp.com/reg', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        });
        const result = await response.json();
        setLoading(false);
        if (result.message === 'User was created') {
            props.signIn({login: user.login, avatar: user.avatar});
        }
    }

    const handleButtonSubmit = async (e: any, login: string, password: string) => {
        e.preventDefault();
        const user = {
            login,
            password,
            avatar
        };
        createUser(user);
    };

    return (
        <div className="main">
            <form className={`ui form authorization-form ${loading ? 'loading' : ''}`}>
                <div className="field">
                    <h2>Registration</h2>
                    <input type="file" id="input-file" accept=".jpg, .jpeg, .png"  onChange={handleFileInput}/>
                    <label htmlFor="input-file" className="label-avatar">
                        {avatar ? <img className="avatar-registration" src={avatar} alt="avatar"/> : <span className="span-text">Add photo</span>}
                    </label>
                    <label>
                        Login
                    </label>
                    <input value={login} onChange={handleLoginInput} placeholder="Login"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input value={password} onChange={handlePasswordInput} placeholder="Password" type="password"/>
                    </div>
                    <button className="ui button" onClick={(e) => handleButtonSubmit(e, login, password)}>Submit</button>
            </form>
        </div>
    );
}