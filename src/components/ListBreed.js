import React, { Component } from 'react';
import { connect } from 'react-redux';

class  ListBreed  extends Component {  
    
    render() {
        const list =  this.props.listBreedDogs;
        let textContent;
        const ListBreed = list.map(function (breed, index){
            if ( breed.indexOf('-') !== -1)   
            {          
                var subbreed = breed.split('-');
                 textContent  =  subbreed[1].charAt(0).toUpperCase() + subbreed[1].substr(1).toLowerCase()+ " " +
                    subbreed[0].charAt(0).toUpperCase() + subbreed[0].substr(1).toLowerCase();            
            } else  
            {    
                 textContent =  breed.charAt(0).toUpperCase() + breed.substr(1).toLowerCase();    
            };          

        return (
            <li key={index} className ="list-item">{textContent}</li>
        )
    });

    return(
        <ul className = "list-breed">
            {ListBreed}        
        </ul>
        )
    };    
};

const putStateToProps  = (state) =>{
    return {
        listBreedDogs : state.listBreedDogs
    };
};

export default connect(putStateToProps)(ListBreed);