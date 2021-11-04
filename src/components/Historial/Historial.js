
import React from 'react'

export default function Historial( ){
    return (
        <div>
        <div class="col-12">
        <h1>Compras Realizadas</h1>
        <h2>Cliente: Nombre</h2>
            <div  class="alert">
            </div>
          
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>Productos</th>
                        <th>Total</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><h4>Compras.Id</h4></td>
                        <td><h4>Compras.fechaYHora</h4></td>
                        <h4>Compras.cantProducto</h4>
                        <td><h4>Compras.$total</h4></td>
                        <td>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><h4>prod.codigo</h4></td>
                                    <td><h4>prod.nombre</h4></td>
                                    <td><h4>prod.cantidad</h4></td>
                                    <td><h4>prod.precio</h4></td>
                                    <td><h4>prod.total</h4></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
   
    )
        
}