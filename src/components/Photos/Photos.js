import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import './Photos.css';

const Photos = () => {
    const [photos,setPhotos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data.slice(0,100)));
    },[])
    return (
        <div className='photos-container'>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
            }
        </div>
    );
};

export default Photos;