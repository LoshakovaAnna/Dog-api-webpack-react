import React, { Component } from 'react';
import ImageDog from './ImageDog';
import { connect } from 'react-redux';

class  ImageDogsSet  extends Component {  
    
    render() {
        const srcArray =  this.props.arrLinkImages;
        var ImageSet = srcArray.map(function (src, index){
            return (         
                <ImageDog key={index} src={src}  />
            )
        });

        return ImageSet;
    };    
};

const putStateToProps  = (state) =>{
    return {
        arrLinkImages : state.arrLinkImages
    };
};

export default connect(putStateToProps)(ImageDogsSet);