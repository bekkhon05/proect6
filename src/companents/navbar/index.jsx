import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Link } from "react-router-dom"
import "./style.css"
import logo from "./logo.png (1).webp"
import { HiOutlineMail } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import Menu from '@mui/material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Grow from '@mui/material/Grow';



import Badge from '@mui/material/Badge';
import PersistentDrawerLeft from '../navbarmenu'
const options = [' All departments', "Fresh Meat", "Vegetables", "Fruit & Nut Gifts", "Fresh Berries", "Ocean Foods", "Butter & Eggs", "Fastfood", "Fresh Onion", "Papayaya & Crisps", "Oatmeal", "Fresh Bananas",];
const options2 = ['All Categories', 'Computers', 'Laptops', 'Cameras', 'Hardware', 'Smartphones'];
function Navbar() {



    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };
    const handleClick2 = () => {
        console.info(`You clicked ${options2[selectedIndex]}`);
    };


    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

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
        <Box>

            <Box sx={{
                width: "100%",
                height: "auto",
                background: "#f5f5f5",
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                alignItems: "center"
            }}>
                <Container >

                    <Grid container spacing={0} >
                        <Grid item xs={6}>
                            <Box sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <HiOutlineMail style={{ fontSize: "20px", marginRight: "5px" }} /><Typography sx={{ fontSize: "14px", mr: "20px" }}>  hello@colorlib.com</Typography>
                                <Box sx={{ width: "auto", height: "auto", borderLeft: "1px solid grey" }}>
                                    <Typography sx={{ fontSize: "14px", ml: "20px" }}>Free Shipping for all Order of $99</Typography>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "right"
                            }}>
                                <Box sx={{
                                    width: "150px", height: "25px", display: "flex", justifyContent: "space-around", alignItems: "center"
                                }}>
                                    <GrFacebookOption style={{ fontSize: "16px", cursor: "pointer" }} />
                                    <AiOutlineTwitter style={{ fontSize: "16px", cursor: "pointer" }} />
                                    <ImLinkedin2 style={{ fontSize: "16px", cursor: "pointer" }} />
                                    <FaPinterestP style={{ fontSize: "16px", cursor: "pointer" }} />
                                </Box>
                                <Box sx={{ width: "auto", height: "auto", borderLeft: "1px solid #EBEBEB", borderRight: "1px solid #EBEBEB", p: "0 25px", fontSize: "15px" }}>
                                    <Box sx={{ minHeight: '100%', marginRight: '0px' }}>
                                        <Link style={{ textDecoration: 'none', height: 'auto' }}>
                                            <Box id='NavmenuZzz71'>
                                                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                                    <Typography id='NavmenuZzz1'>
                                                        English
                                                    </Typography>
                                                    <Typography style={{
                                                        fontSize: '12px',
                                                        color: "#252525",
                                                        marginLeft: '3px',
                                                        marginTop: '3px'
                                                    }}>
                                                        <FaChevronDown />
                                                    </Typography>
                                                </Box>
                                                <Box id='NavmenuZzz81'>
                                                    <Link to='' id='NavmenuZzz41'>
                                                        Spanis
                                                    </Link>
                                                    <Link to="" id='NavmenuZzz41'>
                                                        English
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Box>
                                </Box>
                                <FaUser style={{ fontSize: "16px", marginLeft: "20px" }} /> <Typography sx={{ fontSize: "14px", ml: "10px" }}> Login</Typography>
                            </Box>
                        </Grid>

                    </Grid>



                </Container>
            </Box>
            <Box>
                <Container>
                    <Grid container spacing={0} >
                        <Grid item lg={3} md={3} sm={12} >
                            <Box sx={{
                                width: "100%",
                                height: "auto",
                                p: "12px 0"
                            }}>
                                <img src={logo} alt="" />
                            </Box>

                        </Grid>
                        <Grid item lg={6} md={6} sm={6} sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" }, alignItems: "center", }}>
                            <Box sx={{ width: "100%", height: "50px", p: "12px 0", display: "flex", alignItems: "center" }}>
                                <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                    <Link style={{ color: "#252525", fontWeight: "700", fontSize: "14px", textDecoration: "none" }} to="/">HOME</Link>
                                    <Link style={{ color: "#252525", fontWeight: "700", fontSize: "14px", textDecoration: "none" }} to="/shop">SHOP </Link>
                                    <Box sx={{ minHeight: '100%', marginRight: '0px' }}>
                                        <Link style={{ textDecoration: 'none', height: 'auto' }}>
                                            <Box id='NavmenuZzz7'>
                                                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                                    <Typography id='NavmenuZzz'>
                                                        PAGES
                                                    </Typography>
                                                </Box>
                                                <Box id='NavmenuZzz8'>
                                                    <Link to='/detalis' id='NavmenuZzz4'>
                                                        Shop Details
                                                    </Link>
                                                    <Link to="/Shopcard" id='NavmenuZzz4'>
                                                        Shopping cart
                                                    </Link>
                                                    <Link to='/checout' id='NavmenuZzz4'>
                                                        Check Out
                                                    </Link>
                                                    <Link to='/blog' id='NavmenuZzz4'>
                                                        Blog Details
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Box>
                                    <Link style={{ color: "#252525", fontWeight: "700", fontSize: "14px", textDecoration: "none" }} to="/blog">BLOG</Link>
                                    <Link style={{ color: "#252525", fontWeight: "700", fontSize: "14px", textDecoration: "none" }} to="/contact">CONTACT</Link>
                                </Box>
                            </Box>
                            {/* <Menu
                                sx={{ mt: '45px' }}
                                id="menu-aytr"
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
                                <Box sx={{
                                    padding: '26px 16px 30px 16px',
                                    display: { xl: 'none', lg: 'none', md: 'none', sm: 'none', xs: ';block' }
                                }}>
                                    <input type="text" id='zxcvhkszcyf' placeholder="Search for products..." />
                                </Box>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{
                                            textTransform: 'uppercase',
                                            fontSize: '14px',
                                            color: '#fff',
                                            fontWeight: '500'
                                        }}>Language</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ padding: '0 15px' }}>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            English
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Italian
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Spanish
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Japanese
                                        </Link>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{
                                            textTransform: 'uppercase',
                                            fontSize: '14px',
                                            color: '#fff',
                                            fontWeight: '500'
                                        }}>Currency</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ padding: '0 15px' }}>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            $ US dollar
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            EUR Euro
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            GBP British Pound
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            JPY Japanese Yen
                                        </Link>
                                    </AccordionDetails>
                                </Accordion>
                                <Box>
                                    <Link to='/' className='dsfgaewrzsrnf'>
                                        HOME
                                    </Link>
                                </Box>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{
                                            textTransform: 'uppercase',
                                            fontSize: '14px',
                                            color: '#fff',
                                            fontWeight: '500'
                                        }}>Super Deals</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ padding: '0 15px' }}>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Super Deals
                                        </Link>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{
                                                    textTransform: 'uppercase',
                                                    fontSize: '14px',
                                                    color: '#fff',
                                                    fontWeight: '500'
                                                }}>Menu Item</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ padding: '0 15px' }}>
                                                <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                    Menu Item
                                                </Link>
                                                <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                    Menu Item
                                                </Link>
                                                <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                    Menu Item
                                                </Link>
                                                <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                                    Menu Item
                                                </Link>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{
                                            textTransform: 'uppercase',
                                            fontSize: '14px',
                                            color: '#fff',
                                            fontWeight: '500'
                                        }}>Featured Brands</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ padding: '0 15px' }}>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Featured Brands
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{
                                            textTransform: 'uppercase',
                                            fontSize: '14px',
                                            color: '#fff',
                                            fontWeight: '500'
                                        }}>Trending Styles</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ padding: '0 15px' }}>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Trending Styles
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                        <Link onClick={handleCloseUserMenu} className='NavboshCla1'>
                                            Menu Item
                                        </Link>
                                    </AccordionDetails>
                                </Accordion>
                                <Box>
                                    <Link to='/blog' className='dsfgaewrzsrnf'>
                                        BLOG
                                    </Link>
                                </Box>
                                <Box>
                                    <Link to='/contact' className='dsfgaewrzsrnf'>
                                        CONTACT
                                    </Link>
                                </Box>
                                <Box>
                                    <Box id='aefsWHRaafs'>
                                        <Box sx={{ display: 'flex', marginRight: '40px', alignItems: 'center' }}>
                                            <Typography sx={{
                                                marginRight: '14px',
                                            }}>
                                                <img src={logo} alt="" id='vbdkjgn48757ew' />
                                            </Typography>
                                            <Typography id='tfhftfrhsfgfjgha'>
                                                +38 068 005 3570
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography sx={{
                                                marginRight: '14px'
                                            }}>
                                                <img src={logo} alt="" id='vbdkjfgergn48deqw757' />
                                            </Typography>
                                            <Link href='mailto:fastsales@gmail.com' id='tfhftfrhgfjgh' >
                                                fastsales@gmail.com
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Menu> */}
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} sx={{ display: "flex", alignItems: "center", }}>
                            <Box sx={{
                                display: "flex",
                                width: "100%",
                                height: "auto",
                                p: "12px 0",
                                alignItems: "center",
                                justifyContent: { lg: "right", md: "right", sm: "center", xs: "center" }
                            }}>
                                <Badge color="success" badgeContent={1} showZero>
                                    <FaHeart style={{ fontSize: "18px" }} />
                                </Badge>
                                <Badge color="success" badgeContent={3} showZero>
                                    <FaShoppingBag style={{ fontSize: "18px", marginLeft: "20px" }} />
                                </Badge>
                                <Typography sx={{ ml: "20px", fontSize: "14px", color: "#6f6f6f" }}>
                                    item: <span style={{ color: "black", fontWeight: "700" }}>$150.00</span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Grid container spacing={2} sx={{ p: "10px 0" }}>
                        <Grid item lg={3} md={3} sm={12} sx={{ width: "100%" }}>
                            <Box sx={{ width: '100%', height: '100%', mt: "5px" }}>
                                <React.Fragment sx={{ width: "100%" }}>
                                    <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" sx={{ width: "100% ", }}>
                                        <Box onClick={handleToggle} sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                                            <Link onClick={handleClick} style={{ textDecoration: "none", width: "100%", padding: "15px 20px", fontSize: "18px", fontWeight: "700", height: "auto", background: "#7fad39", color: "white", display: "flex", justifyContent: "space-between", alignItems:"center" }} className="salomm">
                                                <FaBars style={{ marginRight: "0px" }} />
                                                {options[selectedIndex]}
                                                <FaChevronDown />
                                            </Link>
                                        </Box>
                                    </ButtonGroup>
                                    <Popper
                                        sx={{
                                            zIndex: 1,
                                            width: { lg: "16.5%", md: "22.5%", sm: "94%", xs: "93%" }
                                        }}
                                        open={open}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        transition
                                        disablePortal
                                    >
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin:
                                                        placement === 'bottom' ? 'center top' : 'center bottom',
                                                }}>
                                                <Paper>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList id="split-button-menu" autoFocusItem>
                                                            {options.map((option, index) => (
                                                                <MenuItem
                                                                    key={option}
                                                                    selected={index === selectedIndex}
                                                                    onClick={(event) => handleMenuItemClick(event, index)}
                                                                >
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </React.Fragment>
                            </Box>
                        </Grid>
                        <Grid item lg={9} md={9} sm={12}>

                            <Box sx={{ mt: "5px" }}>
                                <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-between" }}>
                                    <Grid container spacing={2}>
                                        <Grid item sm={8.5} xs={12}>
                                            <Box sx={{ width: "100%", height: "50px", border: "1px solid #EBEBEB", display: "flex", justifyContent: "space-around", alignItems: "center", }}>
                                                <Typography sx={{
                                                    width: "30%",
                                                    fontSize: "16px",
                                                    fontWeight: "700",
                                                    color: "#1c1c1c",
                                                    borderRight: "1px solid #EBEBEB",
                                                    pl: "15px"

                                                }}>
                                                    <Typography sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "none" }, alignItems: "center", fontWeight: "700" }}>

                                                        All Categories
                                                        <FaChevronDown style={{ marginLeft: "10px", fontSize: "14px", fontWeight: "500" }} />
                                                    </Typography>
                                                </Typography>
                                                <Typography sx={{
                                                    width: "70%",
                                                    height: "100%",
                                                    display: "flex"
                                                }}>
                                                    <input type="text" style={{ width: "100%", height: "100%", border: "none", outline: "none", padding: "0 15px", }} placeholder="What do you need?" />
                                                    <Typography sx={{ width: "50%", height: "100%", background: "red", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#7fad39", color: "white", fontWeight: "800", cursor: "pointer", mr: "-2px" }}>Search</Typography>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item sm={3.5} xs={12}>
                                            <Box sx={{ display: "flex", justifyContent: { lg: "right", md: "right", sm: "right", xs: "left" } }}>
                                                <Box sx={{
                                                    width: "50px",
                                                    height: "50px",
                                                    background: "#f5f5f5",
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}>
                                                    <FaPhoneAlt style={{ color: "#7fad39" }} />
                                                </Box>
                                                <Box sx={{ ml: "15px" }}>
                                                    <Typography sx={{ color: "#1c1c1c", fontWeight: "700", mt: "5px" }}>
                                                        +65 11.188.888
                                                    </Typography>
                                                    <Typography sx={{ color: "#6f6f6f", fontSize: "14px" }}>
                                                        support 24/7 time
                                                    </Typography>

                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }, width: { xs: "0%", } }}>
                <PersistentDrawerLeft />
            </Box>
        </Box>
    )
}
export default Navbar