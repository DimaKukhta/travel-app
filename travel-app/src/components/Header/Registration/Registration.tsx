import React, { useState } from 'react';
import './registration.css';

interface RegistrationProps {
    registration: (user: any) => void;
}

interface RegistrationState {
}

export const Registration = (props : RegistrationProps) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const reader: any = new FileReader();

    const handleFileInput = (e: any) => {
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

    const handleButtonSubmit = async (e: any, login: string, password: string) => {
        e.preventDefault();
        const user = {
            login,
            password,
            avatar
        };
        console.log(login, password, avatar, user)

        const response = await fetch('https://travel-app-be1.herokuapp.com/reg', {
            method: 'POST',
            headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            //'Access-Control-Allow-Origin': '*' 
            },
            body: JSON.stringify(user),
        });
      //  props.signIn({login: user.login, avatar: user.avatar});
        console.log(response, user)

        const result = await response.json();
        console.log(result);
    };

    return (
        <div className="main">
            <form className="ui form">
                <div className="field">
                    <h2>Registration</h2>
                    <input type="file" id="input" accept=".jpg, .jpeg, .png"  onChange={handleFileInput}/>
                    <label htmlFor="input" className="label">Choose a file</label>
                    <img className="avatar" src={avatar} alt="avatar" />
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