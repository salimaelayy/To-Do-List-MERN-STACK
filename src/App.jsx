
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import LoginPage from '../src/pages/LoginPage'
import DashboardTask from '../src/pages/DashboardTask'
import RegisterPage from '../src/pages/RegisterPage'


function App() {

  return (
    <> 


    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Dashboard" element={<DashboardTask />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
