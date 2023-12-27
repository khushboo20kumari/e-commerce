import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function HomePage() {

    const [data, setData] = useState([]);
    const [countCart, setCountCart] = useState(0)
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

    const HandleClick = () => {
        setCountCart(countCart + 1)
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} lg={6} md={6} sm={6}>
                        <Item>
                            <img style={{ width: "100%", height: "450px" }} src={data.image} />
                            <Box sx={{ width: "100%" }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Button sm={6} lg={6} md={6} xs={12} variant="outlined" fullWidth style={{ width: "40%", margin: "30px", fontSize: "20px", fontWeight: "bold", color: "rgb(159,32,137)" }} onClick={HandleClick} >Add to Card</Button>
                                    <Button sm={6} lg={2} md={6} xs={12} variant="contained" fullWidth style={{ width: "40%", margin: "30px", fontSize: "20px", fontWeight: "bold", background: "rgb(159,32,137)" }}>Buy Now</Button>
                                </Grid>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} sm={6}>
                        <Item>
                            <Box sx={{ display: "flex", m: "auto" }}>
                                <Typography style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "60px" }}>Price:</Typography>
                                <Typography style={{ fontWeight: "normal", fontSize: "20px" }}>{data.price} R</Typography>
                            </Box>
                            <Typography style={{ fontWeight: "bold", fontSize: "20px", margin: "40px" }} >{data.title}</Typography>
                            <Typography style={{ fontWeight: "normal", fontSize: "16px", margin: "40px", letterSpacing: "2px" }}>{data.description}</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default HomePage;