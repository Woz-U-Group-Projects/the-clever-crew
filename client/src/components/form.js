import React, { useState, useEffect } from 'react';
//need the filebase64 import






const Form = () => {
   
       // need to set up redux with actions and reducers
            
    
    const clearFields = () => {
        setCurrentId(null);
        setPostData({name: '', location: '', bair: '', beer: '', selectedFile: ''}); //set data as an empty 'string'
    }

    return (
        <div>
            <form > 
                <h1 >Add a Fish to Collection</h1>                                                                        
                    <input placeholder="Name"/>
                    <input placeholder="Location"/>
                    <input placeholder="bait"/>
                    <input placeholder="beer"/>
                        <div>
                            <button>Upload Picture</button>
                        </div>
                        <button>Submit</button>
                        <button>Clear</button>
            </form>
        </div>
    );
}

export default Form;