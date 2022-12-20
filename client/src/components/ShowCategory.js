import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function ShowCategory()
{
    var [apidata, setApidata] = useState([]);

    useEffect(() =>
    {
        fetch('http://localhost:9003/categories/' + 'show-category')
            .then(res => res.json())
            .then(result =>
            {
                // console.log("DATA FROM API")
                // console.log(result)
                setApidata(result);
            })
    }, [])

    return (
        <div className='container'>
            <h1>Showcategory</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        apidata && apidata.map(obj =>
                            <tr>

                                <td>{ obj._id }</td>
                                <td>{ obj.name }</td>
                                <td>
                                    <Link to={ "/delete-cat/" + obj._id }>Delete</Link>
                                </td>
                                <td>
                                    <Link to={ "/edit-cat/" + obj._id }>Edit</Link>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    )
}


