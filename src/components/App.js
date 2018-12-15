import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container-fluid '>
        <h1 className="text-center py-4">Dogs Images</h1>   
        <ul className="nav nav-tabs ">
          <li className="nav-item ">
            <Link className="nav-link " to='/list'>List Breed</Link>
           </li>
          <li className="nav-item">          
            <Link className="nav-link " to='/specific-dog-choose'>Specific Dog</Link>
          </li>
          <li className="nav-item">          
            <Link className="nav-link " to='/random-dogs'>Random Dogs</Link>
          </li>
        </ul>           
      </div>
    )
  };
};

export default App;