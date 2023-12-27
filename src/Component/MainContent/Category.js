import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import ViewAll from './ViewAll';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Category() {

    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])


    const fetData = () => {
        fetch("https://fakestoreapi.com/products").then((res) => {
            return res.json()
        }).then((res) => {
            setData(res)
        })
    }

    useEffect(() => {
        fetData()
    }, [])

    const HandlerFilter = (catgree) => {
        const filterdata = data.filter((ele) =>
            ele.category === catgree
        )
        setFilterData(filterdata)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Typography style={{ fontWeight: "normal", fontSize: "30px", margin: "10px" }}>Best of Girls Cloths</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/1/f/i/xl-131-wine-kurta-pant-dupatta-set-zivaa-original-imagdgbpyzftg5va.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/e/w/5/m-ss23ga0603pcam-and-original-imagnkxhcwvzcezq.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/7/2/c/28-ss20at105btlv-and-original-imafpyr7fypx7wtg-bb.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/m/h/3/m-vv-9180-vredevogel-original-imagh4qrkuduwrgj.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                </Grid>

                <Button onClick={() => HandlerFilter("electronics")} style={{ margin: "10px", border: "1px solid red" }}>viewall</Button>
                <br></br>
                <br></br>
                <Typography style={{ fontWeight: "normal", fontSize: "30px", margin: "10px" }}>Best of Boys</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/416/416/xif0q/computer/t/w/i/-original-imagtvq2bmuazhsq.jpeg?q=70'></img>
                        </Item>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/416/416/xif0q/computer/h/k/z/x360-bf0058tu-thin-and-light-laptop-hp-original-imagh4ypj3ujgska.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/312/312/xif0q/computer/l/s/n/-original-imagtq3xfpnyqw4v.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/312/312/xif0q/computer/l/m/j/-original-imagwy8dydwzrnka.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                </Grid>
                <Button onClick={() => HandlerFilter("electronics")} style={{ margin: "10px" }}>view all</Button>
                <br></br>
                <br></br>
                <Typography style={{ fontWeight: "normal", fontSize: "30px", margin: "10px" }}>Best of Electronics</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/300/300/xif0q/kids-t-shirt/e/v/1/10-11-years-fkt94-alphabets-force-original-imagmtygwftg2rag.jpeg?q=90'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/h/o/5/10-11-years-kd-704-round-newyork-olive-m-atlans-clothes-original-imagpqzrkrgy283c.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/w/4/a/11-12-years-fkt50-r-paris-force-original-imagha3gkfzxwszh.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/5/p/m/13-14-years-all-letr-force-original-imagky7ttgtmaz45.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                </Grid>
                <Button style={{ margin: "10px" }} onClick={() => HandlerFilter("men's clothing")}>view all</Button>
                <br></br>
                <br></br>
                <Typography style={{ fontWeight: "normal", fontSize: "30px", margin: "10px" }}>Best of jewelry</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/j/h/i/plastic-na-3-rb-3002-wh-essta-original-imagw6rareks5pux.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/832/832/xif0q/jewellery-set/d/n/6/na-na-neck-40n-fallalery-original-imaggtnmrvbmvqgd.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/7/l/3/cultured-d-ats-pink-dhingli-nnd-1-brado-jewellery-original-imag4qxuhxbrxdhf.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} md={6}>
                        <Item>
                            <img style={{ width: "100%" }} src='https://rukminim2.flixcart.com/image/832/832/krdtlzk0/jewellery-set/z/g/f/80035gr-saiyoni-original-imag56h7n7kk3tfv.jpeg?q=70'></img>
                        </Item>
                    </Grid>
                </Grid>
                <Button onClick={() => HandlerFilter("jewelery")} style={{ margin: "10px" }}>view all</Button>
                <ViewAll filterData={filterData} />

            </Box>
        </>
    );
}

export default Category;