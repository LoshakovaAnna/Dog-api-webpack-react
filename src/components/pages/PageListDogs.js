import React, { Component} from 'react';
import { connect } from 'react-redux';
import loadListBreedDogs from '../../load_function/LoadListBreedDogs';
import ListBreed from '../ListBreed'; 

class  PageListDogs  extends Component {

    render() {
        return (
                <div id = "listBreeds"  className = "list"  >                
                    <ListBreed />
                </div>
        );
    };

    componentDidMount(){
        loadListBreedDogs();
    }
};

const putStateToProps  = (state) =>{
    return {
        listBreedDogs : state.listBreedDogs
    };
};

export default connect(putStateToProps)(PageListDogs);