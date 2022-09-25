import React,{useEffect,useState} from 'react';
import Registration from './Registration';
import { auth } from './fire-base';
import Home from './Home'


function App() {
  //const [presentUser,setPresentUser] = useEffect(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      if(user){
        console.log({uid:user.uid,
          email : user.email})
      }
      // else{
      //   setPresentUser(null);
      // }
    })
  },[])
  return (
    <div className="App">
      <Registration />
    </div>
  );
}

export default App;
