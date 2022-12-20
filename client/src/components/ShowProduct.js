import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ShowProduct()
{

    var [apidata, setApidata] = useState([]);
    var [count, setCount] = useState(0);
    var [page, setPage] = useState(0);
    var [pagearr, setPagearr] = useState([]);
    var [perpage, setPerpage] = useState(10);

    useEffect(() =>
    {
        fetch('http://localhost:9003/products/' + 'show-product')
            .then(res => res.json())
            .then(result =>
            {
                // console.log("DATA FROM API")
                console.log(result)
                // setApidata(result);
                var { ans_product, ans_count } = result;

                console.log(ans_count);
                setApidata(ans_product);
                setCount(ans_count);

                var totalPages = Math.ceil(ans_count / perpage);

                setPage(totalPages);

                var arrPage = [];
                for (var i = 1; i <= totalPages; i++)
                {
                    // console.log(i);
                    arrPage.push(i);
                }
                console.log(arrPage);
                setPagearr(arrPage);

            })
    }, [])

    function myfunc1(ev)
    {
        ev.preventDefault();
        console.log(ev.target.attributes.for.value);
        var pageno = ev.target.attributes.for.value;
        console.log(perpage);

        var skipvalue = perpage * pageno - perpage;
        console.log(skipvalue, pageno);
        console.log(`show-product/${ skipvalue }/${ perpage }`);
        fetch(`${ 'http://localhost:9003/products/' }show-product/${ skipvalue }/${ perpage }`)
            .then(res => res.json())
            .then(ans =>
            {
                console.log("After Pagination");
                console.log(ans);
                var { ans_product, ans_count } = ans;
                setApidata(ans_product);
            })
    }

    return (
        <div className='container'>
            <h1>Showproduct</h1>
            <hr />
            { count } , { page }

            <hr />
            {
                pagearr && pagearr.length > 0 && pagearr.map(val =>

                    <span>
                        <a href='#' for={ val } onClick={ myfunc1 }>Page { val } </a> &nbsp;
                    </span>
                )
            }
            <hr />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Category Id</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        apidata && apidata.map((obj) =>
                            <tr>

                                <td>{ obj._id }</td>
                                <td>{ obj.name }</td>
                                <td>{ obj.catvalues[0].name }</td>
                                <td>{ obj.catid }</td>
                                <td>
                                    <Link to={ "/delete-pro/" + obj._id }> Delete </Link>
                                </td>
                                <td>
                                    <Link to={ "/edit-pro/" + obj._id }> Edit </Link>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}


