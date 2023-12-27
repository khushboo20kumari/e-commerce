import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ViewAll({ filterData }) {
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate(`/homepage/${item.id}`);
    }


    return (
        <>
            {filterData?.map((item, index) => {
                return (
                    <>
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6} sm={5} md={5} lg={5} key={index} onClick={() => handleClick(item)}>
                                    <img style={{ width: "300px", height: "300px" }} src={item.image} alt={`Image ${index}`} />
                                </Grid>
                                <Grid item xs={6} lg={7} md={7} sm={7}>

                                    <Typography style={{ margin: "30px", fontWeight: "bold", fontSize: "20px" }}>{item.title}</Typography>
                                    <Typography style={{ margin: "30px", fontWeight: "normal", fontSize: "16px", letterSpacing: "2px" }}>{item.description}</Typography>

                                </Grid>
                            </Grid>
                        </Box>
                    </>

                )
            })}
        </>
    )
}
export default ViewAll;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// function Data() {

//     const navigate = useNavigate();

//     const [data, setData] = useState([]);

//     const fetchData = () => {
//         axios.get('https://fakestoreapi.com/products')
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleClick = (item) => {
//         navigate(`/homepage/${item.id}`);
//     }

//     return (
//         <>
//             {data?.map((item, index) => {
//                 return (
//                     <div key={index} onClick={() => handleClick(item)}>

//                         <img style={{ width: "300px", height: "300px" }} src={item.image} alt={`Image ${index}`} />
//                     </div>
//                 )
//             })}
//         </>
//     );
// }

// export default Data;