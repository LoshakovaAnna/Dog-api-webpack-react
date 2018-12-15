import { store } from '../index';
import { createNewArrayLinksImages } from '../store/actions';

import {  bindActionCreators } from 'redux';

export default async function loadLinksOfImages(){
    var urlDataForJSON = await fetch(store.getState().urlForLoadLinksImage);
    const data = await urlDataForJSON.json();    
    const createArrayLinksImage = bindActionCreators (createNewArrayLinksImages, store.dispatch);
    createArrayLinksImage(data.message);
}