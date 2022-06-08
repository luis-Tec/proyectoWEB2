import './App.css';
import RouterPages from './pages/RouterPages'
import {app_db} from "./fb"
import React, {useEffect} from 'react';
import Logueo from './pages/Logueo';


function App() {

  const [usuario, setUsuario] = React.useState(null);
  
  useEffect(() => {
    app_db.auth().onAuthStateChanged((usuarioFirebase)=>{
      setUsuario(usuarioFirebase);
    })
  }, [])
  

  //nuevo return 
  return <>{usuario ? <RouterPages/> : <Logueo setUsuario={setUsuario}/> }</>


  // return que estaba por default 
  /*return 
    <div className='App'>
      <RouterPages />
    </div>
  );*/
}

export default App;
