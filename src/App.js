import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Dashboard/Homepage.js';
import Registration from './Services/Authentication/Registration/Registration.js';
import Login from './Services/Authentication/Login/Login.js';
import FindNursery from './Services/FindNursery/FindNursery';
import PlantInfo from './Services/PlantInfo/PlantInfo.js';
// import SeeNursery from './leafletPractice/app.js'

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
              <Route path="/services/Authentication/Login" element={<Login/>}/>
              {/* <Route path="/leafletPractice" element={<SeeNursery/>}/> */}
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
