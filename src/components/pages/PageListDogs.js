import React, { Component} from 'react';
import { connect } from 'react-redux';
import loadListBreedDogs from '../../load_function/LoadListBreedDogs';

class  PageListDogs  extends Component {

    render() {
        return (
            <div >
                <div id = "listBreeds"  className = "list"  ></div>
            </div>
        );
    };

    componentDidMount(){
        var listDogs = this.props.listBreedDogs;
        var showListDogs = this.showListDogs;
        loadListBreedDogs().then(() => {
            showListDogs(listDogs);    
        });  
    }

    showListDogs(listDogs){
        var listMenuElem = document.getElementById('listBreeds');
        var ul = document.createElement("ul");   
        ul.className = "list-breed";
        
        for (let i = 0; i < listDogs.length; i++) {
            var li = document.createElement("li");   
            li.className ="list-item";
            var breed = listDogs[i];
            if ( breed.indexOf('-') !== -1)   
            {          
                var subbreed = breed.split('-');
                li.textContent  =  subbreed[1].charAt(0).toUpperCase() + subbreed[1].substr(1).toLowerCase()+ " " +
                    subbreed[0].charAt(0).toUpperCase() + subbreed[0].substr(1).toLowerCase();            
            } else  
            {    
                li.textContent =  breed.charAt(0).toUpperCase() + breed.substr(1).toLowerCase();    
            };
            ul.appendChild(li);           
        }
        listMenuElem.appendChild(ul);
    };
};

const putStateToProps  = (state) =>{
    return {
        listBreedDogs : state.listBreedDogs
    };
};

export default connect(putStateToProps)(PageListDogs);