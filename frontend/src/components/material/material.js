import React, {useEffect, useState} from 'react';

const Material = ({material}) => {
    const [details, setShowDetails] = useState(false)
    const handleShowDetails = () => {
        setShowDetails(!details)
    }
    const additionalInformation = () => {
      return <div><h3>Price: {material.price}</h3><h3>Description: {material.description}</h3></div>

    }

  return (
    <div>
      <h1>{material.name}</h1>
      <button onClick={handleShowDetails}>Details</button>
      {details ? additionalInformation() : null}
      
    </div>
    
  )
  

}

export default Material