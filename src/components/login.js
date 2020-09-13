import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, registerNew } from '../actions';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom"
const Login = (props) => {
    let history = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    // const [loggedIn, setLoggedIn] = useState(props.loggedIn)
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const [credentials2, setCredentials2] = useState({
        username: '',
        password: ''
    })
    // const [loggedIn, setLoggedIn] = useState(props.loggedIn)
    const handleChange2 = e => {
        setCredentials2({
            ...credentials2,
            [e.target.name]: e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        props.login(credentials).then(() => {
            props.history.push('/home');
            console.log("logged in")
        });
    }

    const register = e => {
        e.preventDefault();
        props.registerNew(credentials2).then(() => {
            props.history.push('/home');
            console.log("regstered in")
        });
    }
    return (


        <div>
        <form onSubmit={submit}>
            <label>Username</label>
            <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        /><br/>
            <label> password</label>
            <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        /><br/>
        {console.log(props.state.loggedIn)}
            <button>Login</button>
        
        </form>

        <p> OR REGISTER </p> 

        <form onSubmit={register}>
            <label>Username</label>
            <input
        type="text"
        name="username"
        value={credentials2.username}
        onChange={handleChange2}
        /><br/>
            <label> password</label>
            <input
        type="password"
        name="password"
        value={credentials2.password}
        onChange={handleChange2}
        /><br/>
        {console.log()}
            <button>Register</button>
        
        </form>
        
    </div>



    )
}

const mapStateToProps = state => {
    return {
        state
    };
};
export default connect(mapStateToProps, {
    login,
    registerNew
})(Login);