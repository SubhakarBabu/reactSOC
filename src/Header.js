import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import './Header.css';
import './DataScience.css'


import Grid from '@mui/material/Grid';




const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
    <AppBar position="static" >
      <Container className='Appbar' maxWidth="100%">
        <Toolbar disableGutters>
          <HomeOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2  }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            INFO.IT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HomeOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
            <button  className='btn'><a className="link" href='Courses.js'>Courses</a></button>
            <button className='btn' style={{marginRight: "auto"}}><a className="link" href='About.js'>About</a></button>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div className='blog'>
    <Grid container spacing={2}>
        <Grid item xs={4} >
            <a href='DataScience.js'  alt="null"><img  alt="null" className='image-tr' src='https://www.technotification.com/wp-content/uploads/2018/07/Best-Programming-Languages-For-Data-Science.png' ></img></a>
        </Grid>
        <Grid item xs={8} >
        <div className='text'>
      Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data. This analysis helps data scientists to ask and answer questions like what happened, why it happened, what will happen, and what can be done with the results.Data science is important because it combines tools, methods, and technology to generate meaning from data. Modern organizations are inundated with data; there is a proliferation of devices that can automatically collect and store information. Online systems and payment portals capture more data in the fields of e-commerce, medicine, finance, and every other aspect of human life. We have text, audio, video, and image data available in vast quantities.  
        </div>

        </Grid>
        <Grid item xs={4} >
           <a href='null' alt="null"><img  alt="null" className='image-tr' src='https://www.interviewbit.com/blog/wp-content/uploads/2021/08/Data-Engineer-2.jpg' ></img></a> 
        </Grid>
        <Grid item xs={8} >
        <div className='text'>
        Data engineering is the practice of designing and building systems for collecting, storing, and analysing data at scale. It is a broad field with applications in just about every industry. Organisations can collect massive amounts of data, and they need the right people and technology to ensure it is in a highly usable state by the time it reaches data scientists and analysts.

        In addition to making the lives of data scientists easier, working as a data engineer can allow you to make a tangible difference in a world where we’ll be producing 463 exabytes per day by 2025 [1]. That’s one and 18 zeros of bytes worth of data. Fields like machine learning and deep learning can’t succeed without data engineers to process and channel that data. 
        </div>

        </Grid>
        <Grid item xs={4} >
          <a  href='datascience.js'  alt="null"> <img  alt="null" className='image-tr' src='https://www.cetpainfotech.com/wp-content/uploads/2022/05/Data-Analytics-with-python-course-in-noida.jpg' ></img></a>
        </Grid>
        <Grid item xs={8} >
        <div className='text'>
        The process of cleaning, analysing, interpreting, and displaying data using different approaches and business intelligence tools is known as data analysis. Data analysis tools assist you in uncovering key insights that lead to better informed and successful decision-making. It is concerned with the transformation of raw data into meaningful statistics, information, and explanations.Organizations in all sectors are increasingly depending on data to make critical business decisions like which products to make, which markets to enter, what investments to make, or which customers to target. They are also using data to identify weak areas in the business that need to be addressed. 
        </div>

        </Grid>
        
        
    </Grid>
    </div>
    </div>
  );
}
export default Header;