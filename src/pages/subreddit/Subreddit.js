import React, {useEffect, useState} from 'react';
import './subreddit.css'
import '../home/Home'
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

function Subreddit (){

    const [subInfo, setSubInfo] = useState([]);
    const {subreddit} =useParams();
    const history = useHistory();

    function clickFunc(){
        history.push('/')
    }

    useEffect(()=>{
        async function fetchData(){
            try{
                const getResult = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`)
                setSubInfo(getResult.data.data)
                console.log(getResult.data.data)
            }catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[])

    return(
        <div className='sub-div'>
            <div className='sub-div1'>
                <h2>Title</h2>
                <p>{subInfo.title}</p>
            </div>
            <div className='sub-div1'>
                <h2>Description</h2>
                <p>{subInfo.public_description}</p>
            </div>
               <div className='sub-div1'>
                   <h2>Number of subscribers</h2>
                   <p>{subInfo.subscribers}</p>
               </div>

                <button
                    className='but'
                    type= 'button'
                    onClick={clickFunc}
                    >Take me back</button>

        </div>
    )
}

export default Subreddit;
