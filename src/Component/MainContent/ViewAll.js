import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ViewAll({ filterData }) {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ position: "relative", top: "50px" }}>
                {filterData.map((item) => (
                    <>
                        <Grid item xs={12} sm={5} md={5} lg={5} >
                            <img style={{ width: "70%", height: "350px", maring: "20px" }} src={item.image}></img>
                        </Grid>
                        <Grid item xs={12} sm={7} md={7} lg={7} >
                            <Typography style={{ fontWeight: "bold", fontSize: "20px", margin: "40px" }}>{item.title}</Typography>                            <Typography style={{ fontWeight: "normal", fontSize: "18px", margin: "30px", letterSpacing: "2px" }}>{item.description}</Typography>
                        </Grid>
                    </>
                ))}
            </Grid>
        </>
    )
}
export default ViewAll;