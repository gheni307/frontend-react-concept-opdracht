import React, {useEffect, useState} from 'react';
import './home.css'
import axios from "axios";
import Information from "../../components/information/Information";

function Home() {
    const [information, setInformation] = useState([]);


    useEffect(()=>{
        async function getInformation(){
            try {
                const res = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                setInformation(res.data.data.children);
                console.log(res.data.data.children)

            }catch (e) {
                console.error(e);
            }
        }
        getInformation();
    },[]);
    return (
        <div className='sub-body'>
            <h1>Hottest posts</h1>
            <p>on Reddit right now</p>
            <div className='sub'>
                { information.map((info)=>{
                    return <Information title={info.data.title}
                                        url={info.data.url}
                                        subreddit={info.data.subreddit}
                                        prefixed={info.data.subreddit_name_prefixed}
                                        comments={info.data.num_comments}
                                        ups={info.data.ups}
                    />
                })}
            </div>
        </div>
    );
}

export default Home;