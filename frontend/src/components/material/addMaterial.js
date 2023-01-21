import React, {useEffect, useState} from 'react';
import './material.css'


const AddMaterial = ({material, mattressId}) => {

    const addMaterial = () => {
        fetch("creatematerial", {
        method: "put",
        body: JSON.stringify({mattresses: mattressId})
        })
         .then(response => response.json())
    }

    useEffect(() => {
        addMaterial()
    }, []);
    

  return (
    <div className="material-name">
      <h2>{material.name}</h2>
      <button onClick={addMaterial}>Add Material</button>
      
      
    </div>
    
  )
  

}

export default AddMaterial