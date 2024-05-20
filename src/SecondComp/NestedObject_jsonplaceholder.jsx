import React from 'react'
import { userData } from './Data'
console.log(userData)
const NestedObject_jsonplaceholder = () => {
  return (
    <div>
        {userData.map((data)=>{
        return(
            <div style={{border:"1px solid skyblue", textAlign:'center',fontStyle:'oblique'}}>
           <div > {data.id} </div>
           <div style={{ color:'red'}}>  {data.name}</div>
           <div style={{ color:'green'}}> {data.address.city}</div>
           <div style={{ color:'orange'}}> {data.address.geo.lat}</div>                
            </div>
        
        )
        })}
    </div>
  )
}

export default NestedObject_jsonplaceholder