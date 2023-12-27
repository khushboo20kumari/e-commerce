import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function HomePage() {

    const [data, setData] = useState([]);
    const params = useParams()
    const fetchData = () => {

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
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

    return (
        <>

            <p>{data.id}</p>
            <p>{data.title}</p>
            <img style={{ width: "300px", height: "300px" }} src={data.image} />


        </>
    )
}
export default HomePage;