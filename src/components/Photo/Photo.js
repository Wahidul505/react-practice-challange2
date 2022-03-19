import React from 'react';
import './Photo.css'

const Photo = (props) => {
    const {url,title} = props.photo;
    return (
        <div className='photo'>
            <div>
                <img src={url} alt="" />
            </div>
            <h3>{title}</h3>
        </div>
    );
};

export default Photo;