import React from 'react';
import {withRouter} from 'react-router-dom';
import './eBookLib.scss';

const eBookLibItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className= {`${size} elib-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div  style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
                <div className='content'>
                <h1 className='title'>{title}</h1>
                </div>
            </div>
);

export default withRouter(eBookLibItem);