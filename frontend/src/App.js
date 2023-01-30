import './App.css';
import {Routes,Route} from "react-router-dom";
import MaterialDashboard from './components/material_dashboard/material_dashboard';
import SignUp from './components/signup/signup'
import Login from'./components/login/login'

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/materials' element={<MaterialDashboard/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
