import React, {useState} from 'react';
import './mattress.css'


const Mattress = ({mattress}) => {
    const [details, setShowDetails] = useState(false)
    const handleShowDetails = () => {
        setShowDetails(!details)
    }
    const additionalInformation = () => {
      return <div><h3>Cost: {mattress.cost}</h3><h3>Price: {mattress.price}</h3><h3>Description: {mattress.description}</h3><h3>Size: {mattress.size}</h3></div>

    }

  return (
    <div className="mattress-name">
      <h2>{mattress.name}</h2>
      <button onClick={handleShowDetails}>Details</button>
      {details ? additionalInformation() : null}
      
    </div>
    
  )
  

}

export default Mattress