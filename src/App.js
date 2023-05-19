import {Routes, Route} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Acceuil from './Components/Acceuil/Acceuil';
import Service from './Components/Service/Service';
import Admin from './Components/Service/Admin/Admin';
import Etat from './Components/Service/Etat/Etat';
import Contacts from './Components/Contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Acceuil/>} />
         <Route path='/Acceuil' element={<Acceuil/>} />
         <Route Route path='/service' element={<Service/>}> 
            <Route path='/service/admin' element={<Admin/>} />
            <Route path='/service/etat' element={<Etat/>} />
        </Route>
         <Route path='/Contacts' element={<Contacts/>} />
      </Routes>
    </div>
  );
}
export default App;
