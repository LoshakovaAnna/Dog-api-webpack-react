import React, { Component} from 'react';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  changeUrlForLoadLinksImage } from '../../store/actions';
import ImageDogsSet from '../ImageDogsSet';
import loadLinksOfImages from '../../load_function/LoadLinksOfImages';

class dinamicPageSpecDog  extends Component {
   
    render() {
      return ( 
          <div>
              <h2 className="text-center text-uppercase py-10">{this.props.chosenBreed}</h2>  
              <div key="1" className="d-flex justify-content-center py-10">
                <input 
                      type="text" 
                      id="inputCountDog"  
                      className="input-coun-dog "
                      placeholder="input count dog"
                />
                <input 
                        type="button"  
                        value="Load image" 
                        className="btn-random-image" 
                        onClick={this.loadImages} 
                />
              </div>
              <div key="2" id="imagePlace" className="d-flex flex-row flex-wrap justify-content-center">
                  <ImageDogsSet src={this.props.arrLinkImages}  />
              </div>
          </div>
      );    
    };

    loadImages = () =>{
      let countDogsValue = document.getElementById('inputCountDog').value;
      let changeUrlForLoadLinksImage = this.props.changeUrlForLoadLinksImage;
      if (  parseInt(countDogsValue)) {
        var newUrl =  this.props.urlOneDogPart1 +  this.props.chosenBreed + this.props.urlOneDogPart2 + countDogsValue;
        changeUrlForLoadLinksImage(newUrl);
        loadLinksOfImages(); 
      } else 
        alert("Wrong value! Input number");
    };
};

const putStateToProps  = (state) =>{
  return {
      arrLinkImages : state.arrLinkImages,
      chosenBreed : state.chosenBreed,
      urlOneDogPart1 : state.urlOneDogPart1,
      urlOneDogPart2 : state.urlOneDogPart2 
  }
};

const  putActionToProps = (dispatch) =>{
  return {
    changeUrlForLoadLinksImage : bindActionCreators (changeUrlForLoadLinksImage, dispatch)
  }
};

export default connect(putStateToProps, putActionToProps)(dinamicPageSpecDog);