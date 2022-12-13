import React, {useEffect, useContext, useState} from 'react'
import { deleteProduct, getProducts } from '../../functions/http/http'
import {useNavigate} from 'react-router-dom'
import { ProductContext } from '../../context/ProContext'

export default function ProductList() {
    const [deleted, setDeleted] = useState(false)
    const  navigate = useNavigate()
    const context = useContext(ProductContext)
    // const date = Date();
    useEffect(()=>{
        async function getAllProducts(){
            const products = await getProducts()
            context.setProduct(products)
        }
        getAllProducts()
    },[deleted])

  return (
    <div  className='row'>
        <div className='col-md-7'>
            <button className='btn btn-primary'
            onClick={()=> navigate("/products/create")}
            >Yeni Ürün</button>
            {/* <p>{date}</p> */}
        <table className='table'>
            <thead>
                <tr>
                    <th>Ürün Adı</th>
                    <th>Açıklama</th>
                    <th>Fiyat</th>
                    {/* <th>Kategori</th>
                    <th>Birim</th>
                    <th>Kdv</th> */}
                 
                </tr>
            </thead>
            <tbody>
                {context.products.map(b => {
                    return ( 
                        <tr key={b.id}>
                            <td>{b.productname}</td>
                            <td>{b.description}</td>
                            <td>{b.unitprice}</td>
                            {/* <td>{b.categoryid}</td>
                            <td>{b.unitid}</td>
                            <td>{b.vatid}</td> */}
                    
                            <td>
                                <button 
                                className='btn btn-success' 
                                onClick={() => 
                                    navigate("/products/update", {
                                        state: {id : b.id},
                                    })}> Ürün Güncelle </button>
                            </td>
                            <td>
                                <button 
                                className='btn btn-danger' 
                                onClick={() => deleteProduct(b.id)
                                .then(() => {
                                    alert("Ürün silindi.")
                               setDeleted(true)
                                  // window.location.reload()
                                })}
                                > Ürün Sil </button>
                            </td>
                        </tr>                     
                    )

                })}

            </tbody>
        </table>
        </div>
        </div>
   
  )
}
