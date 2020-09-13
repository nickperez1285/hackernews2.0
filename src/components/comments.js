import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import axios from "axios"

const Comments = (props) => {
    const [comments, setComments] = useState([])
    // temporary
    useEffect(() => {
        axios.get(`https://hn.algolia.com/api/v1/search?query=new&tags=comment`)
            .then(res => {
                // const data = res.data.hits
                // console.log(props.getPosts())
                setComments(res.data.hits)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <table style = {{
            width: "100%"
        }}>
    
    <tr className = "homebody">
        <td>
            { comments.map((comment, idx) => (
            <table>
                <tbody>
                  
                    <tr>

                        <td className = "subtext"  style = {{
                fontSize: "10px",
                display: "inherit"
            }}>
                        <a href="" style = {{
                textDecoration: "none",
                fontSize: "20px"
            }}>
                                ^ 
                            </a>

                             {comment.points}   points by {comment.author} | <a href="/"  style = {{
                textDecoration: "none",
                color: 'black',
            }}> {comment.story_title} </a>
                </td>
                </tr>
                  <tr >
                        <td align="left" >
                           
                            
                {comment.comment_text}     
                        </td>
                    </tr>
                </tbody>
            
            </table>
        ))
        }
        </td>
    </tr>
    {console.log("home", props.state)}

</table>

    )
}

const mapStateToProps = state => {
    return {
        state
    };
};
export default connect(mapStateToProps, {

})(Comments);