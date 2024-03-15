
import './project.css';

import React, { useState } from 'react';
/**
 * This is the highest level component!
 */
const Project: React.FC = () => {

    return (
        <div className='tabs'>
            <img className='dataServer' 
            src='https://i.postimg.cc/sXT535tk/dataserver.png'
            alt='data server explanation (see github readme)'></img>

            <img className='ghiblify' 
            src='https://i.postimg.cc/RZPRS5Ks/ghiblify.png'
            alt='data server explanation (see github readme)'></img>

            <img className='shell' 
            src='https://i.postimg.cc/SQWfXzcz/shell.png'
            alt='shell explanation (see github readme)'></img>

            <img className='malloc' 
            src='https://i.postimg.cc/mkRM3871/malloc.png'
            alt='malloc explanation (see github readme)'></img>

            <img className='decisionTree' 
            src='https://i.postimg.cc/jqgd4M6V/decision-Tree.png'
            alt='decision tree explanation (see github readme)'></img>

            <img className='search' 
            src='https://i.postimg.cc/HkQgRzMk/search.png'
            alt='searchexplanation (see github readme)'></img>

            <img className='website' 
            src='https://i.postimg.cc/LsQ23Xft/website.png'
            alt='this website!'></img>


        </div>
    );
  }
  
  export default Project;
