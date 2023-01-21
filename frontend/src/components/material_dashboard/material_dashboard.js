import React, {useState, useEffect} from "react"
import './material_dashboard.css'
import Material from "../material/material";


const MaterialDashboard = () => {
    const [materials, setMaterial] = useState([]);
    const loadAllMaterials = () => {
        fetch("/material", {
        })
          .then((response) => response.json()) // why do we need this when it's already in json ??
          .then(async data => setMaterial(data.materials))
    }


    useEffect(() => {
        loadAllMaterials();
      }, []);
    

      return (
        <div className="materials-index">
          <h1>Material Dashboard</h1>
          <div className="list-materials">
          {materials.map((material) => (
            <div className="material">
              <Material
                material={material}
                key={material._id}
              />
            </div>
          ))}

          </div>
        </div>
      ) 
}


export default MaterialDashboard

