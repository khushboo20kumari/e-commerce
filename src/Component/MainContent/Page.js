// import { useEffect, useState } from "react";
// import { Button } from "@mui/material";
// import Category from "./Category";
// import ViewAll from "./ViewAll";
// function Page() {
//     const [data, setData] = useState([])
//     const fetData = () => {
//         fetch("https://fakestoreapi.com/products").then((res) => {
//             return res.json()
//         }).then((res) => {
//             setData(res)
//         })
//     }
//     useEffect(() => {
//         fetData()
//     }, [])
//     return (
//         <>
//         <ViewAll data={data}/>
//         </>
//     )
// }
// export default Page;