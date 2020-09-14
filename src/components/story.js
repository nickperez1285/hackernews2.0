import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import { BrowserRouter as Router, Route, useHistory, Redirect, useParams } from "react-router-dom"
import axios from 'axios'
import HN from "../API/wrap.js"




// make into private route 

const Story = (props) => {

    // {`http://hn.algolia.com/api/v1/items/`+post.objectID}
    // 

    let history = useHistory()
    const {id} = useParams();

    const [story, setStory] = useState({})

    useEffect(() => {
        axios.get("https://hn.algolia.com/api/v1/items/" + id)
            .then(res => {
                // const data = res.data.hits
                // console.log(props.getPosts())
                setStory(res.data)



            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const [post, setPost] = useState(
        {
            "title": "",
            "link": "",
            "text": "",

        })

    const [localPost, setLocalPost] = useState(
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
        <div>

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
                <span>{story.title}</span>

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
                  </table>

 <table style = {{
            width: "100%"
        }}>
 

</table>






   

        </div>
    )
}





export default connect(null, {
    addPost
})(Story);