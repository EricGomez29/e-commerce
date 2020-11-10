import React from 'react';

export default function Pagination ({totalProductos, paginas, productPorPagina}){
    const paginate = [];   //array con los numeros que van a ver en la paginacion
    const cantidadProductos = totalProductos.length;
    
    for(var i = 1; i <= Math.ceil(cantidadProductos / productPorPagina); i++){  //math.ceil te redondea para arriba
        paginate.push(i);
    }

    return (
        <div>
            <ul className="pagination" >
                <li className="page-item disabled">    
                    <a className="page-link disabled" href="#" >&laquo;</a>
                </li>
                <li className="page-item" style={{display: "flex"}}>
                    {
                        paginate.map (number =>
                            <a className="page-link" href="#" onClick={() => paginas(number)}>{number}</a>
                        )
                    }
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>   
    )
}