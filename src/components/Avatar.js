import React from 'react';

const Avatar = ({image, firstName, lastName}) => {
    return (
    <div>
        <img src={image}/>
        <p>{firstName} {lastName}</p>
    </div>
    );
}

export default Avatar;

