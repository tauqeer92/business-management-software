import React, {useState, useEffect} from "react"
import './mattress_dashboard.css'
import Mattress from "../mattress/mattress";


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
              <div className="mattress">
              <Mattress
                mattress={mattress}
                key={mattress.id}
              />
            </div>
          ))}

          </div>
        </div>
      ) 
}

export default MattressDashboard

