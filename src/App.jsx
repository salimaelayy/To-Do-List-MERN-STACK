
import './App.css'
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import LoginPage from '../src/pages/LoginPage'
import DashboardTask from '../src/pages/DashboardTask'
import RegisterPage from '../src/pages/RegisterPage'
import Single_Task from './component/Single_Task'


function App() {
  
  return (
    <> 
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardTask />} />
        <Route path="/task" element={<Single_Task />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
