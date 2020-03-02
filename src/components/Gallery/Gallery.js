import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";

class Gallery extends Component {
    
    render( props ) {
        
        const display = this.props.images && this.props.images.map( ( image, index ) => {
            return(
                // <div>
                    <img src={ image } alt='screenshot' />
                // </div>
            )
        })
        
        return(
            <div>
                {
                    this.props && this.props.images
                    ?
                    <Carousel infiniteLoop stopOnHover >
                        { display }
                    </Carousel>
                    :
                    null
                }
                
            </div>
        )
    }
};

export default Gallery;