


import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import ListUser from './components/ListUser';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  }, [])
  
  return (
   <div>
     <ListUser data={data} />
   </div>
  );
}

export default App;