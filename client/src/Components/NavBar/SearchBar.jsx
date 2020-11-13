import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function SearchBar({ onSearch }) {
    const [data, setData] = useState( [] );
    const history= useHistory();

    return (
        <form className="form-inline my-2 my-lg-0"
            onSubmit={(e) => {
                e.preventDefault(); 
                onSearch(data); 
                history.push('/products/search');
            }}>
            <input className="form-control mr-sm-2" 
                type="text" style={{width: "400px"}} 
                placeholder="Buscar productos, marcar y más..."
                value={data} 
                onChange={e => setData(e.target.value)}
                />
            <input className="btn btn-info my-2 my-sm-0" type="submit" value="Buscar" />
        </form>
    )
}