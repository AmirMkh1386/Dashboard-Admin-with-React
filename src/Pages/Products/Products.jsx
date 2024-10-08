import { useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import {  products } from "../../datas"
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import "./Products.css"

export default function UserList () {

    const [productsData, setProductsData] = useState(products)

    const productsDelete = (productID) => {
        setProductsData(productsData.filter(user => user.id != productID))
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90,
        },
        {
            field: "title", 
            headerName: "Name",
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`} className="link">
                            <div className="userListUser">
                                <img src={params.row.avatar} className="userListImg" />
                                {params.row.title}
                            </div>
                        </Link>
                    </>
                )
            }
        },
        {
            field: 'price', 
            headerName: 'Price',
            width: 120,
        },
        {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="userListEdit">More</button>
                        </Link>
                        <DeleteOutlineIcon className="userListDelete" onClick={() => productsDelete(params.row.id)} />
                    </>
                )
            }
        }
    ]

    return(
        <div className="userList">
            <DataGrid 
                rows={productsData}
                columns={columns}
                disableSelectionOnClick
                checkboxSelection
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 2,
                      },
                    },
                }}
            />
        </div>
    ) 
}