import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import  AuthContextProvider  from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './components/routing/ProtectedRoute';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route 
            exact 
            path='/' 
            element={<Landing/>} 
          />
          <Route exact path='/dashboard' element={<ProtectedRoute/>}>
            <Route
              exact 
              path='/dashboard' 
              element={<Dashboard/>} 
            />
          </Route>    
          <Route
            exact 
            path='/login' 
            element={<Auth authRoute='login' />} 
          />
          <Route 
            exact 
            path='/register' 
            element={<Auth authRoute='register' />} 
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
