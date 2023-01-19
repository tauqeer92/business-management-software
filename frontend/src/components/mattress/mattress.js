import React, {useState, useEffect} from 'react';
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
        })
        .catch((error) => {
          console.error(error)
        })
    }

    useEffect(() => {
      loadAllMaterials();
    }, []);

    const displayMaterials = () => {
      loadAllMaterials()
      return (
          <div className="materials">
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

    const setMaterials = () => {
      setAddMaterial(!showAddMaterial)
    }

    const additionalMattressInformation = () => {
      return <div><h3>Cost: {mattress.cost}</h3><h3>Price: {mattress.price}</h3><h3>Description: {mattress.description}</h3><h3>Size: {mattress.size}</h3></div>
    }

  return (
    <div className="mattress-name">
      <h2>{mattress.name}</h2>
      <button onClick={handleShowMattressDetails}>Details</button>
      {mattressDetails ? additionalMattressInformation() : null}
      <button onClick={setMaterials}>Show Materials </button>
      {showAddMaterial ? displayMaterials(): null}
      
      <br></br>
      
      
    </div>
    
  )
  

}

export default Mattress