import React , { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Login from "./login.js"
const Navbar = (props) => {
    let history = useHistory()
    const [state, setState] = useState(0)
    const checkStatus = () => {
        localStorage.getItem("status") ? setState(1) : setState(0)
    }
    useEffect(() => {
        checkStatus()
    },)
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        history.push('/home1');
        setState(0)
    };
    return (
        <table style = {{
            width: "100%",
            textDecoration: "none"
        }}>
    <tr className = "header" style={{
            background: "#ff6600",
            height: "10px",
            textDecoration: "none"
        }}>
        <td style={{
            textAlign: "left",
            textDecoration: "none",
        }}>
            <span>
                <strong>
                {    localStorage.getItem("status") ?
            <Link to="/home" style = {{
                textDecoration: "none",
                color: "black"
            }}>Hacker News </Link>
            :
            <Link to="/home1" style = {{
                textDecoration: "none",
                color: "black"
            }}>Hacker News </Link>
        }
                </strong>
                <a href="">new | </a>
                <a href="">past | </a>
                <Link to="/comment" style = {{
            textDecoration: "none",
            color: "black"
        }}>comments | </Link>
                <a href="">ask | </a>
                <a href="">show | </a>
                <a href="">jobs | </a>
                <a href="/submit" >submit | test</a>
            </span>
        </td>
        <tr>
            <td style={{
            textAlign: "right",
        }}>
                { state ?
            <form onSubmit={handleLogout}>
                    
                    <button > Logout </button>
                    
                </form>
            :
            <Link to="/login" style = {{
                textDecoration: "none",
                color: "black"
            }}>
                    login
                </Link>
        }
            </td>
        </tr>
    </tr>
</table>
    )
}

export default Navbar;