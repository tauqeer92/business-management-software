import './App.css';
import {Routes,Route} from "react-router-dom";
import MaterialDashboard from './components/material_dashboard/material_dashboard';
import MattressDashboard from './components/mattress_dashboard/mattress_dashboard';

function App() {
  return (
    <Routes>
      <Route path='/materials' element={<MaterialDashboard/>}/>
      <Route path='/mattresses' element={<MattressDashboard/>}/>
    </Routes>
  );
}

export default App;
