import React, {useState} from 'react';
import './material.css'


const Material = ({material}) => {
    const [details, setShowDetails] = useState(false)
    const handleShowDetails = () => {
        setShowDetails(!details)
    }
    const additionalInformation = () => {
      return <div class="details"><h3>Price: {material.price}</h3><h3>Description: {material.description}</h3></div>

    }

  return (
    <div className="material-name">
      <h2>{material.name}</h2>
      <button onClick={handleShowDetails}>Details</button>
      {details ? additionalInformation() : null}
      
    </div>
    
  )
}

export default Material