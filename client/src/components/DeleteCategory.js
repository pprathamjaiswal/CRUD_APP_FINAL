import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Deletecategory() {

    var {myid} = useParams();
    console.log(myid);
    var navigate = useNavigate();

    useEffect(()=>{
        
        fetch('http://localhost:9003/categories/'+'delete-cat/'+myid , {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("DELETE ROUTE")
            console.log(result)
            if(result['msg']){
                navigate('/show-category');
            }
        })
    },[])
  return (
    <></>
  )
}

