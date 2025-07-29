import './../src/style.scss'
import { DataProvider } from "./context/dataContext";
import Dashboard from './pages/dashboard/dashboardPage.jsx';
import Register from './pages/register/register.jsx';

function App() {
  
  return (
<<<<<<< HEAD
    <div className="backgroud-page">
        <Register />
    </div>
=======
    <DataProvider>
      <div className="backgroud-page">
        <Dashboard />
      </div>
    </DataProvider>
>>>>>>> b1e8f764f1e86ce5e4a3e9eba8bc710946a5a772
  )
}

export default App
