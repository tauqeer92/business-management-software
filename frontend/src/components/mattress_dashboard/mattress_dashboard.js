import React, {useState, useEffect} from "react"
import './mattress_dashboard.css'
import Mattress from "../mattress/mattress";

// I want to give an array of material id's
// I want to send it to an endpoint getMaterials
// This endpoint should perform a query to mongo and get a list of materials that match those ids
// This endpoint will return an array of objects where each object is material
// [
//   {material1}, 
//   {material3}
// ]



const MattressDashboard = () => {
    const [mattresses, setMattress] = useState([]);

    
    
    const loadAllMattresses = () => {
        fetch("/mattress", {
        })
          .then((response) => response.json())
          .then(async data => setMattress(data.mattresses))
    }

    useEffect(() => {
      loadAllMattresses();
    }, []);

      return (
        <div className="mattress-index">
          <h1>Mattress Dashboard</h1>
          <div className="list-mattress">
            {mattresses.map((mattress) => (
              <div key={mattress._id} className="mattress">
              <Mattress
                mattress={mattress}
              />
            </div>
          ))}
          
          </div>
        </div>
      ) 
}

export default MattressDashboard

