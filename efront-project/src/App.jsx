import './../src/style.scss'
import { DataProvider } from "./context/dataContext";
import Dashboard from './pages/dashboard/dashboardPage.jsx';
import Register from './pages/register/register.jsx';
import Login from './pages/login/login.jsx'

function App() {
  
  return (
    <DataProvider>
      <div className="backgroud-page">
        <Login />
      </div>
    </DataProvider>
  )
}

export default App
