import React, { useState } from 'react';
import './registration.css';
import { url } from 'inspector';

interface RegistrationProps {
    signIn: (user: any) => void;
}

interface RegistrationState {
}

export const Registration = (props : RegistrationProps) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');


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
        const response = await fetch('https://travel-app-be1.herokuapp.com/reg', {
            method: 'POST',
            headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            //'Access-Control-Allow-Origin': '*' 
            },
            body: JSON.stringify(user),
        });
        console.log(response, user)
        const result = await response.json();
        console.log(result.message);
        console.log(result.message !== 'User was created')
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
        console.log(login, password, avatar, user)
        createUser(user);

       /* const response = await fetch('https://travel-app-be1.herokuapp.com/reg', {
            method: 'POST',
            headers: {
            //'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            //'Access-Control-Allow-Origin': '*' 
            },
            body: JSON.stringify(user),
        });*/
      //  props.signIn({login: user.login, avatar: user.avatar});
       /* console.log(response, user)

        const result = await response.json();
        console.log(result);*/
    };

    return (
        <div className="main">
            <form className="ui form authorization-form">
                <div className="field">
                    <h2>Registration</h2>
                    <input type="file" id="input-file" accept=".jpg, .jpeg, .png"  onChange={handleFileInput}/>
                    <label htmlFor="input-file" className="label-avatar"><span>Choose a file</span></label>
                    {/*<img className="avatar" src={avatar} alt="avatar" />*/}
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