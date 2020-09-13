import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import { BrowserRouter as Router, Route, useHistory, Redirect } from "react-router-dom"




// make into private route 

const Form = (props) => {

    let history = useHistory()
    const [post, setPost] = useState(
        {
            "title": "",
            "link": "",
            "text": "",

        })

    const changeHandler = ev => {
        // ev.persist();
        let value = ev.target.value
        setPost({
            ...post,
            [ev.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        // needs to be made
        props.addPost(post);
        console.log(post)
        setPost({
            "title": '',
            "link": '',
            "text": ''

        });
        history.push("/home")
    };


    return (
        <table style = {{
            width: "80%"
        }}>
        <tr style={{

        }}> <td style={{
            textAlign: "left",
            background: "#ff6600",
            height: "10px",
            textDecoration: "none",
            width: "80%"
        }}
        >  SUBMIT </td>    </tr>
        <tr>



        <td>
                <form onSubmit={handleSubmit} >
                TITLE
                    <input
        name="title"
        onChange={changeHandler}
        placeholder=""
        value={post.title}
        style = {{
            width: "80%",
        }}
        />
                    <div className="baseline" />
                    URL .   

                    <input
        name="url"
        onChange={changeHandler}
        placeholder=""
        value={post.url}
        style = {{
            width: "80%",
            display: "absolute"
        }}
        />
                    <div className="baseline" />
                   <center><p>OR</p></center>


                TEXT
                    <textarea
        name="text"
        onChange={changeHandler}
        placeholder=""
        value={post.text}
        rows="10"
        style = {{
            width: "80%",
            height: "100%",
            display: "absolute"
        }}
        />
                    <div className="baseline" />

                    <button className="md-button form-button" style={{
            verticalAlign: 'inherit'
        }}> Submit </button>
                </form>
                </td>
                </tr>
{console.log(localStorage)
        }            </table>
    )
}





export default connect(null, {
    addPost
})(Form);