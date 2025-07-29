import './../src/style.scss'
import { DataProvider } from "./context/dataContext";
import Dashboard from './pages/dashboard/dashboardPage.jsx';
import Register from './pages/register/register.jsx';

function App() {
  
  return (
    <DataProvider>
      <div className="backgroud-page">
        <Register />
      </div>
    </DataProvider>
  )
}

export default App
