import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Data() {
    
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = (item) => {
        navigate(`/homepage/${item.id}`);
    }

    return (
        <>
            {data?.map((item, index) => {
                return (
                    <div key={index} onClick={() => handleClick(item)}>
                       
                        <img style={{ width: "300px", height: "300px" }} src={item.image} alt={`Image ${index}`} />
                    </div>
                )
            })}
        </>
    );
}

export default Data;