import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCategory() {
    var [name,setName] = useState('');
    let {myid} = useParams();

    let navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:9003/categories/'+'show-category/'+myid)
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            var{_id,name} = val;
            setName(name);
        })
    } , [])


    function updateRec(ev){
        ev.preventDefault();
        // console.log(name);
        var categoryName = name;

        fetch('http://localhost:9003/categories/'+'update-category/'+myid ,{
            method:"PUT",
            headers: new Headers({'content-type': 'application/json'}),
            body:JSON.stringify(
                {
                    name:categoryName
                }
            )
        })
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            if(val['msg']){
                navigate('/show-category')
            }
        })
    }
  return (
    <div className='container'>
        <form onSubmit={updateRec}>
        <h1> Edit Category Page </h1>

        <input type="text" value={name} onChange={(ev)=>{setName(ev.target.value)}} className='form-control'/> <br />
        <button >Update</button>
        </form>
    </div>
  )
}
