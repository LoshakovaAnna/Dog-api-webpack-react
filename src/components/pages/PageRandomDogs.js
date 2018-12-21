import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeUrlForLoadLinksImage, clearArrayLinkImage } from '../../store/actions';
import ImageDogsSet from '../ImageDogsSet'; 
import loadLinksOfImages  from '../../load_function/LoadLinksOfImages';

class  PageRandomDogs  extends Component {
     
    render() {      
        return (
            <div >
                <div key="1" className = " d-flex flex-row justify-content-center  p-5" >
                    <input 
                        type="text" 
                        id="inputCountDog"  
                        className="input-coun-dog"
                        placeholder="input count dog"
                    />
                    <input 
                        type="button" 
                        id="btnRandomImage" 
                        value="Load random Image" 
                        className="btn-random-image" 
                        onClick={this.loadImages}
                    />
                </div>
                <div key="2" id="imagePlace" className="d-flex flex-row flex-wrap justify-content-center">
                    <ImageDogsSet  />
                </div>
            </div>
        );
    };
    
    componentDidMount(){
        this.props.clearArrayLinkImage();
    }

    loadImages = () =>{
        let countDogsValue = document.getElementById('inputCountDog').value;
        let changeUrlForLoadLinksImage = this.props.changeUrlForLoadLinksImage;
        if (  parseInt(countDogsValue)) {            
            var newUrl = this.props.urlRandom + +countDogsValue;
            changeUrlForLoadLinksImage(newUrl);
            loadLinksOfImages();         
        } else 
            alert("Wrong value! Input number");
    }    
};

const putStateToProps  = (state) =>{
    return {
        urlRandom : state.urlRandom,
        arrLinkImages : state.arrLinkImages
    }
};

const  putActionToProps = (dispatch) =>{
    return {
        changeUrlForLoadLinksImage : bindActionCreators (changeUrlForLoadLinksImage, dispatch) ,
        clearArrayLinkImage : bindActionCreators (clearArrayLinkImage, dispatch) 
    }
  };

export default connect(putStateToProps, putActionToProps)(PageRandomDogs);