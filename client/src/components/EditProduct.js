import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditProduct() {
    let {id} = useParams();

    const[cat,setCat] = useState([]);
    const[pro,setPro] = useState({});

    var x1 = useRef();
    let navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:9003/products/' + 'get-product-category/'+id)
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            setCat(val['catRecord']);
            setPro(val['productRec'])
        });

    } , []);

    var myfunc = (ev)=>{
        ev.preventDefault();
        // console.log({
        //     name:pro,
        //     catid:x1.current.value
        // });
        fetch('http://localhost:9003/products/' + `update-product/${id}` , {
            method:"PUT",
            headers: new Headers({'content-type': 'application/json'}),
            body:JSON.stringify(
                {
                    name:pro,
                    catid:x1.current.value
                }
            )
        })
        .then(res=>res.json())
        .then(answer=>{
            console.log(answer);
            navigate('/show-product')
        })
    }
  return (
    <div className='container'>
        <form onSubmit={myfunc}>
        <h1> Edit Product Page ,  </h1>
        <select className='form-control' ref={x1}>
            <option value="">
                Please Select Category
            </option>
            {
               cat && cat.map( obj =>
                    <option value={obj._id}>
                        {obj.name}
                    </option>
                ) 
            }
        </select>
        <br />
        <input type="text" value={pro.name} onChange={(ev)=>{setPro(ev.target.value)}}  className='form-control'/> <br />
        <button >Update</button>
        </form>
    </div>
  )
}

