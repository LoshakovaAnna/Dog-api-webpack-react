export const putBreedDogToList = (newBreedDog) =>{
    return {
      type: 'PUT_BREED_DOG_TO_LIST' ,
      payload: newBreedDog
    };
};
  
export const createNewArrayLinksImages = (newArrayLinkImages) =>{
  return {
    type: 'CREATE_NEW_ARRAY_LINKS_IMAGES' ,
    payload: newArrayLinkImages
  };
};

export const setChosenBreed = (chosenBreed) =>{
  return {
    type: 'SET_CHOSEN_BREED' ,
    payload: chosenBreed
  };
};

export const changeUrlForLoadLinksImage = (newUrl) =>{
  return {
    type : 'CHANGE_URL_FOR_LOAD_LINKS_IMAGE',
    payload : newUrl
  };
};

export const clearArrayLinkImage = () =>{
  return {
    type : 'CLEAR_ARRAY_LINK_IMAGE',
    payload : []
  };
};