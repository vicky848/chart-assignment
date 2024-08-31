import './App.css';
import Dashboard from './Componenets/DashBoard';
import Navbar from './Componenets/Navbar';
import SideBar from './Componenets/SideBar';

function App() {
  return (
    <div className="App">
   
      <Navbar/>
       <div className='app-container'>
        <SideBar/>
        <Dashboard/>
       </div>
    </div>
  );
}

export default App;
