// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Dashboard/Homepage.js';
import Registration from './Services/Authentication/Registration/Registration.js';
import FindNursery from './Services/FindNursery/FindNursery.js';
import PlantInfo from './Services/PlantInfo/PlantInfo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/services/FindNursery" element={<FindNursery/>}/>
              <Route path="/services/PlantInfo" element={<PlantInfo/>}/>
              <Route path="/services/Authentication/Registration" element={<Registration/>}/>
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
