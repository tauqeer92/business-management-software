import React, {useState, useEffect} from "react"
import Material from "../material/material";

const MaterialDashboard = () => {
    const [materials, setMaterial] = useState([]);
    const loadAllMaterials = () => {
        fetch("/material", {
        })
          .then((response) => response.json())
          .then(async data => setMaterial(data.materials))
    }


    useEffect(() => {
        loadAllMaterials();
      }, []);
    

      return (
        <div className="materials-index">
          <h1>Material Dashboard</h1>
          <div className="materials">
          {materials.map((material) => (
            <Material
              material={material}
              key={material.id}
            />
          ))}

          </div>
        </div>
      ) 
}

export default MaterialDashboard

