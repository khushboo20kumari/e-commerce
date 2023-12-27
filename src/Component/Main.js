
// import './App.css';
import Navbar from './Navbar';
import  RightSideBar from "./RightSidebar"
import LeftSidebar from './LeftSidebar';
// import RightSidebar from './RightSideBar';
// import LeftSidebar from './LeftSideBar';
import MainContent from './MainContent';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FullScreenDialog from './Dialog';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Main() {
  return (
    <div className="App">
      <Box sx={{ width: '100%' }}>
        <Navbar/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={3} lg={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <LeftSidebar />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8} style={{marginTop:"70px"}}>
            <MainContent/>
            {/* <FullScreenDialog/> */}
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <RightSideBar />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Main;