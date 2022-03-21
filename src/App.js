import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './componets/Header/Header';
import Log from './componets/Log/Log.jsx';
import Home from './componets/Home/Home';
import Abm from './componets/Abm/Abm';
import AdmId from './componets/AdmId/AdmId.jsx'
import Plannet from './componets/Plannet/Plannet';

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/log" element={<Log />} />
        <Route exact path='/Admin' element={<Abm/>}/>
        <Route exact path='/Admin/:id' element={<AdmId/>}/>
        <Route exact path='/Plannet' element={<Plannet/>}/>
      </Routes>
    </>
  );
}

export default App;
