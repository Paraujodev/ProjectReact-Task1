import './style-dashboard.scss'
import Navbar from '../../components/navbar.jsx';
import Graphic from '../../components/graphic.jsx';
import GraphicTransactions from '../../components/graphicTransactions.jsx';


export default function Dashboard (){
    return (
        <div>
            <Navbar />
            <Graphic />
            <GraphicTransactions />
        </div>
    )
}