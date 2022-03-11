import React from 'react';

const Img = (props) => {
    const { postImage, altPostImage } = props;
    return <img src={postImage} alt={altPostImage} />;
};

export default Img;
