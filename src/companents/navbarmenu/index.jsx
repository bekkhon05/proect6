import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import { Navname, NavBut, NavIcon, NavIcons } from '../navbar/navbarmap/index';
import rasm from "../navbar/logo.png (1).webp"
import "./style.css"
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HiOutlineMail } from 'react-icons/hi';

const drawerWidth = 320;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} className="bar">
                <Toolbar>
                    <Typography component="div" sx={{ marginLeft: "12px", mr: 2, ...(open && { display: 'none' }) }}>
                        <img src={rasm} alt="" style={{ marginTop: "8px" }} />
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ color: "black", marginLeft: "0px", marginTop: "8px", ml: { xs: "210px", sm: "530px" } }}
                    >
                        <MenuIcon sx={{ fontSize: "32px", border: "1px solid black" }} />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader >
                    <IconButton className="icon" onClick={handleDrawerClose} sx={{ background: "#fbb710", color: "#fff" }}>
                        {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
                    </IconButton>
                </DrawerHeader>
                <List sx={{
                    p: "30px"
                }}>

                    <Box>
                        <img src={rasm} alt="" style={{ width: "50%", marginBottom: "15px" }} />
                    </Box>
                    <Box sx={{
                        display: "flex",
                        width: "100%",
                        height: "auto",
                        p: "12px 0",
                        alignItems: "center",

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

                    <Box sx={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start"
                    }}>

                        <Box sx={{ width: "auto", height: "auto", borderRight: "1px solid #EBEBEB", p: "0 10px", fontSize: "15px" }}>
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
                    <Box sx={{ background: "#4c4c4c", width: "100%", height: "auto", display: "flex", p: "5px" }}>


                        <Accordion sx={{
                            width: "100%",
                            background: "none"
                        }}>
                            <AccordionSummary

                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{
                                    display: "flex",
                                    justifyContent: "right",
                                    textAlign: "end",
                                    // width:"35%",
                                }}
                            >
                                <Typography sx={{ width: "100%", height: "80%", fontWeight: "800", color: "white" }}>MENU</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ ml: "16px", mb: "10px", }}>

                                    <Link style={{ textDecoration: 'none', height: 'auto', fontSize: "14px", color: "white" }} to="/">
                                        Home
                                    </Link >
                                </Typography>
                                <Typography sx={{ ml: "16px" }}>
                                    <Link style={{ textDecoration: 'none', height: 'auto', fontSize: "14px", color: "white" }} to="/shop">
                                        Shop
                                    </Link>
                                </Typography>
                                <Accordion sx={{ border: "none", mb: "10px", background: "none" }} id="salom">
                                    <AccordionSummary

                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        sx={{
                                            width: "200px",

                                        }}
                                    >
                                        <Typography sx={{ display: "block", fontSize: "14px", color: "white", }}>Pages</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={{ ml: "30px", mt: "-15px" }}>
                                            <Typography sx={{ mb: "10px" }}>
                                                <Link style={{ textDecoration: 'none', height: 'auto', fontSize: "14px", color: "white", }} to="/detalis"> Shop Details</Link>
                                            </Typography>
                                            <Typography sx={{ mb: "10px" }}>
                                                <Link style={{ textDecoration: 'none', height: 'auto', fontSize: "14px", color: "white", }} to="/shopcard"> Shopping Cart</Link>
                                            </Typography>
                                            <Typography sx={{ mb: "10px" }}>
                                                <Link style={{ textDecoration: 'none', height: 'auto', fontSize: "14px", color: "white", }} to="/checout"> Check Out</Link>
                                            </Typography>
                                            <Typography>
                                                <Link style={{ textDecoration: 'none', height: 'auto', fontSize: "14px", color: "white" }} to="/blog"> Blog Details</Link>
                                            </Typography>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Typography sx={{ ml: "16px", mb: "10px" }}>
                                    <Link style={{ textDecoration: 'none', height: 'auto', fontSize: "14px", color: "white" }} to="/blog">
                                        Blog
                                    </Link>
                                </Typography>
                                <Typography sx={{ ml: "16px" }}>
                                    <Link to="/contact" style={{ textDecoration: 'none', height: 'auto', fontSize: "14px", color: "white" }}>
                                        Contact
                                    </Link>
                                </Typography>

                            </AccordionDetails>
                        </Accordion>



                    </Box>
                        <Box sx={{
                            width: "150px", height: "25px", display: "flex", justifyContent: "space-around", alignItems: "center"
                        }}>
                            <GrFacebookOption style={{ fontSize: "16px", cursor: "pointer" }} />
                            <AiOutlineTwitter style={{ fontSize: "16px", cursor: "pointer" }} />
                            <ImLinkedin2 style={{ fontSize: "16px", cursor: "pointer" }} />
                            <FaPinterestP style={{ fontSize: "16px", cursor: "pointer" }} />
                        </Box>

                        <Box sx={{
                                width: "100%",
                                height: "100%",
                                // display: "flex",
                                alignItems: "center",
                                mt:"40px"
                            }}>
                             <Typography sx={{display:"flex"}}>  <HiOutlineMail style={{ fontSize: "20px", marginRight: "5px" }} /><Typography sx={{ fontSize: "14px", mr: "20px" }}>  hello@colorlib.com</Typography></Typography> 
                                <Box sx={{ width: "auto", height: "auto", mt:"10px" }}>
                                    <Typography sx={{ fontSize: "14px", }}>Free Shipping for all Order of $99</Typography>

                                </Box>
                            </Box>
                </List>

            </Drawer>
        </Box>
    );
}