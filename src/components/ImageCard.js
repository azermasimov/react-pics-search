import React from 'react';

class ImageCard extends React.Component {
    render() { 
        const {id, urls, alt_description} = this.props.image;
        return <img key={id} src={urls.regular} alt={alt_description} />;    }
}
 
export default ImageCard;