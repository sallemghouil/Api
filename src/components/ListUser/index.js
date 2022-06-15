import React from 'react'
import User from '../User'
import 'bootstrap/dist/css/bootstrap.min.css';
const ListUser = ({data}) => {
    console.log(data)
  return (
    <section class="wrapper">
  <div class="container">
    
  <div class="row">
            
                    {data.map(el=><User user={el} /> )}  
                </div>
            </div>
            </section>
        
  )
}

export default ListUser