import './App.css';
import {Routes,Route} from "react-router-dom";
import MaterialDashboard from './components/material_dashboard/material_dashboard';
import SignUp from './components/signup/signup'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/materials' element={<MaterialDashboard/>}/>
    </Routes>
  );
}

export default App;
