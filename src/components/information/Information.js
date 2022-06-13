import React from 'react';
import './information.css'
import {Link} from "react-router-dom";

function Information({url, subreddit, title, prefixed, comments, ups, children }) {
    return (
        <div className='informations'>
            <div className='information'>
                        <a href={url}><h3>{title}</h3></a>
                <div className="div-child">
                        <Link to={`subreddit/${subreddit}`}><p className='color-subreddit'>{prefixed}</p></Link>
                        <p>Comments {comments} Ups {ups}</p>
                        { children }
                </div>
            </div>

        </div>
    );
}

export default Information;