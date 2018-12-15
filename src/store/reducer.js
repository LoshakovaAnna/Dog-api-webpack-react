const initialState = {  
    urlAllBreeds : 'https://dog.ceo/api/breeds/list/all',
    urlRandom : 'https://dog.ceo/api/breeds/image/random/',
    urlOneDogPart1 : 'https://dog.ceo/api/breed/',
    urlOneDogPart2 : '/images/random/',
    urlForLoadLinksImage : '', 
    chosenBreed: '',
    listBreedDogs : [], 
    arrLinkImages : []    
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
      case 'PUT_BREED_DOG_TO_LIST' :
      {
        const newList = state.listBreedDogs; 
        if (newList.indexOf(action.payload) === -1) 
            newList.push(action.payload);
        return {...state, listBreedDogs : newList};
      }
      case 'CREATE_NEW_ARRAY_LINKS_IMAGES' :
      {
        return {...state, arrLinkImages : action.payload};
      }
      case 'SET_CHOSEN_BREED' :
      {
        return {...state, chosenBreed : action.payload};
      }
      case 'CHANGE_URL_FOR_LOAD_LINKS_IMAGE' :
      {
        return {...state, urlForLoadLinksImage : action.payload};
      }
      case 'CLEAR_ARRAY_LINK_IMAGE' :
      {
        return {...state, arrLinkImages : action.payload};
      }
      default  :  
            return state;
    }
};