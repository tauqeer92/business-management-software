import React, {useState, useEffect} from 'react';
import Material from '../material/material.js';
import AddMaterial from '../material/addMaterial.js';
import './mattress.css'

const Mattress = ({mattress}) => {
    const [mattressDetails, setShowMattressDetails] = useState(false)
    const [materials, setMaterial] = useState([])
    const [showAddMaterial, setAddMaterial] = useState(false) 
    const handleShowMattressDetails = () => {
        setShowMattressDetails(!mattressDetails)
    }

    const loadAllMaterials = () => {
      fetch("/material", {
      })
        .then((response) => response.json())
        .then(data => {
          setMaterial(data.materials)
          console.log(data.materials)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    const showMaterials = () => {
      return (
          <div className="list-materials">
          {materials.map((material) => (
            <div className="material">
              <AddMaterial
                material={material}
                key={material._id}
              />
            </div>
          ))}

          </div>
      ) 
  }

      useEffect(() => {
        loadAllMaterials();
      }, [showAddMaterial])

    const setMaterials = () => {
      setAddMaterial(!showAddMaterial)
    }

    const additionalMattressInformation = () => {
      return <div><h3>Cost: {mattress.cost}</h3><h3>Price: {mattress.price}</h3><h3>Description: {mattress.description}</h3><h3>Size: {mattress.size}</h3></div>
    }

  return (
    <div className="mattress-name">
      <h2>{mattress.name}</h2>
      <button onClick={handleShowMattressDetails}>Mattress Details</button>
      {mattressDetails ? additionalMattressInformation() : null}
      <br></br>
      <br></br>
      <button onClick={setMaterials}>Add Materials </button>
      {showAddMaterial ? showMaterials(): null}
      
      
    </div>
    
  )
}

export default Mattress