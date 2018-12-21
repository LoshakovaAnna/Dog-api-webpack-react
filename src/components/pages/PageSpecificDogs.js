import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChosenBreed, clearArrayLinkImage } from '../../store/actions';
import loadListBreedDogs from '../../load_function/LoadListBreedDogs';

class  PageSpecificDogs  extends Component {
   
    render() {    
        return (        
            <div >                
               <div className="d-flex flex-row justify-content-center  p-5 ">                 
                    <div id="list-for-choose"></div>                
                    <div>
                        <Link className="link-btn btn btn-success mx-3"  to={`/specific-dog/${this.props.chosenBreed}`}>choose</Link>
                    </div>
                </div>
            </div>
        );
    };

    componentDidMount(){
        const  getList =this.getListBreedDogs;
        loadListBreedDogs().then(() => {
            getList();     
        });
        this.props.clearArrayLinkImage();
    };

    setChosenBreed = (event)=>{
       this.props.setChosenBreed(event.target.value);
    };
    
    getListBreedDogs = () =>{
        const arrayBreed = this.props.listBreedDogs;
        var divList  = document.getElementById('list-for-choose');

        var listSelectElem = document.createElement("select");
        listSelectElem.onchange = this.setChosenBreed;    
        for (let i = 0; i < arrayBreed.length; i++) {           
            var option = this.createOptionOfSelect( arrayBreed[i]);
                listSelectElem.appendChild(option); 
        };  
        
        divList.appendChild(listSelectElem);            
    };
     
    createOptionOfSelect (breed) {            
        var option = document.createElement("option");   
        option.className ="select-option";
        option.value = breed;
        if ( breed.indexOf('-') !== -1)  
        {          
            var subbreed = breed.split('-');
            option.textContent =  subbreed[1].charAt(0).toUpperCase() + subbreed[1].substr(1).toLowerCase()+ " " +
                subbreed[0].charAt(0).toUpperCase() + subbreed[0].substr(1).toLowerCase();
        
        } else  
        {    
            option.textContent =  breed.charAt(0).toUpperCase() + breed.substr(1).toLowerCase();    
        };
        return option;
    };
};

const putStateToProps  = (state) =>{
    return {
        chosenBreed : state.chosenBreed,
        listBreedDogs : state.listBreedDogs
    }
};

const  putActionToProps = (dispatch) =>{
    return {
        setChosenBreed : bindActionCreators (setChosenBreed, dispatch),
        clearArrayLinkImage :bindActionCreators (clearArrayLinkImage, dispatch)
    };
};

export default connect(putStateToProps, putActionToProps)(PageSpecificDogs);