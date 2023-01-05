import './App.css';
import {Routes,Route} from "react-router-dom";
import MaterialDashboard from './components/material_dashboard/material_dashboard';

function App() {
  return (
    <Routes>
      <Route path='/materials' element={<MaterialDashboard/>}/>
    </Routes>
  );
}

export default App;
