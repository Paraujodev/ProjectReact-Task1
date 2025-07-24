import './../src/style.scss'
import { DataProvider } from "./context/dataContext";
import Dashboard from './pages/dashboard/dashboardPage.jsx';

function App() {
  
  return (
    <DataProvider>
      <div className="backgroud-page">
        <Dashboard />
      </div>
    </DataProvider>
  )
}

export default App
