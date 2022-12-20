import React, { useState,useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addroduct() {
    var x1 = useRef();
    var x2 = useRef();

    var navigate = useNavigate();

    var[apidata,setApidata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9003/categories/'+'show-category')
        .then(res=>res.json())
        .then(result=>{
            // console.log("DATA FROM API")
            // console.log(result)
            setApidata(result);
        })
    }, [])

    var add = ()=>{
        var categoryid = x1.current.value;
        var proname = x2.current.value;

        // console.log(categoryid);
        // console.log(proname);
        if(categoryid!="" && proname!=""){
            fetch('http://localhost:9003/products/'+'add-product' , {
                method:"POST",
                headers: new Headers({'content-type': 'application/json'}),
                body:JSON.stringify(
                    {
                        name:proname,
                        catid:categoryid
                    }
                )
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                
                navigate('/show-product')
            })
        }
        else{
            alert('Values Required')
        }
    }

  return (
    <div className='container'>
        <h1>Addproduct</h1>

        <select className='form-control' ref={x1}>
            <option value="">Please Select Category</option>
            {
                apidata && apidata.map(obj=>
                    <option value={obj._id} >{obj.name}</option>
                )
            }
        </select>
        <br />
        <input type="text" class="form-control" ref={x2}/>
        <br />

        <button onClick={add} className='btn btn-dark'>Add Product</button>
    </div>
  )
}
