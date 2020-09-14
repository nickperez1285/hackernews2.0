import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getPosts } from '../actions';
import HN from "../API/wrap.js"
import { Link, useParams } from "react-router-dom"




const HomeLoggedIn = (props) => {

    const [posts, setPosts] = useState([])
    // temporary
    useEffect(() => {
        axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story`)
            .then(res => {
                // const data = res.data.hits
                // console.log(props.getPosts())
                setPosts(res.data.hits)


            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // const clicker = (e) => {
    //     e.preventDefault();
    //     setVotes(votes + 1)
    //     console.log(votes)
    // }

    console.log('posts', posts)
    HN.upvote(24455406).then(res => console.log("vote", res))



    return (
        <table style = {{
            width: "100%"
        }}>
    
    <tr className = "homebody">
        <td>
            { posts.map((post, idx) => (

            <table>
                <tbody>
                    <tr >
                        <td align="left" >{idx + 1}.
                            <Link onClick={() => posts[idx].points++} style = {{
                textDecoration: "none"
            }}>
                                ^
                            </Link>
                            
                            <a href = {post.url} style = {{
                textDecoration: "none",
                color: 'black',
                textAlign: 'left'
            }}> {post.title}     </a>
                        </td>
                    </tr>

                    
                        <td className = "subtext"  style = {{
                fontSize: "10px",
                display: "inherit"
            }}>
                {posts[idx].points} points by {post.author} | <a href={'/submit/' + post.objectID} style = {{
                textDecoration: "none",
                color: 'black',
            }}> {post.num_comments} comments</a>
                </td>
                </tbody>


            </table>
        ))
        }
        </td>
    </tr>

    </table>

    )
}
const mapStateToProps = state => {
    return {
        state
    };
};
export default connect(mapStateToProps, {
    getPosts
})(HomeLoggedIn);