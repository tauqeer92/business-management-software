import React, {useEffect, useState} from 'react';
import './material.css'


const AddMaterial = ({material, mattressId}) => {

    const addMaterial = () => {
        fetch("/updatemattress", {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: mattressId, materials: material._id})
        })
         .then(response => response.json())
         .then(data => {
          console.log(data.mattress_data)
        })
    }
    

  return (
    <div className="material-name">
      <h2>{material.name}</h2>
      <button onClick={addMaterial}>Add Material</button>
    </div>
    
  )
  

}

export default AddMaterial