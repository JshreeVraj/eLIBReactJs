import React from 'react';
import {withRouter} from 'react-router-dom';
import './lib-item.styles.scss';

const LibItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className= {`${size} lib-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
                <div className='content'>
                <h1 className='title'>{title}</h1>
                </div>
            </div>
);

export default withRouter(LibItem);