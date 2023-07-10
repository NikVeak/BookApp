import React,{useState, useEffect} from "react";

const Pagination = ({bookPerPage, totalBooks, paginate})=>
{
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalBooks/bookPerPage);i++)
    {
        pageNumbers.push(i);
    }
    return(
        <div>
            <ul className="PaginationBook">
                {
                    pageNumbers.map(number=> (
                            <li className="page-item" key={number}>
                                <a href="#" className="page-link" onClick={()=>
                                    paginate(number)
                                }>
                                    {
                                        number
                                    }
                                </a>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}

export default Pagination;