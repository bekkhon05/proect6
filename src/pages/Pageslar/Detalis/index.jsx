import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import { DetaliMap, DetaHover,DetaCaru } from '../../../assents/pageslarmep/detalismep';
import decard from "../img/product-details-1.jpg"
import ButtonGroup from '@mui/material/ButtonGroup';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FaHeart, FaRetweet, FaShoppingCart } from 'react-icons/fa';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import car from "../img/product-1.jpg"
import Carousel from 'react-elastic-carousel'
import "./style.css"


const breakPoints = [
    { width: 100, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 4, showArrows: false },
    { width: 768, itemsToShow: 4, showArrows: false },
    { width: 1200, itemsToShow: 4, showArrows: false },
];

function Detalis() {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className='detalis_name'>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant='h2' sx={{
                                fontSize: "46px",
                                color: "#ffffff",
                                fontWeight: 700,
                            }}>
                                Vegetable’s Package
                            </Typography>
                            <Box>
                                <Link style={{
                                    display: "inline-block",
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    fontWeight: "700",
                                    marginRight: "20px",
                                    position: "relative",
                                    textDecoration: "none"

                                }}>
                                    Home
                                    <Typography sx={{
                                        position: "absolute",
                                        right: "-12px",
                                        top: "13px",
                                        height: "1px",
                                        width: "10px",
                                        background: "#ffffff",
                                    }}></Typography>
                                </Link>
                                <Link style={{
                                    display: "inline-block",
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    fontWeight: "700",
                                    marginRight: "20px",
                                    position: "relative",
                                    textDecoration: "none"

                                }}>
                                    Vegetables
                                    <Typography sx={{
                                        position: "absolute",
                                        right: "-12px",
                                        top: "13px",
                                        height: "1px",
                                        width: "10px",
                                        background: "#ffffff",
                                    }}></Typography>
                                </Link>
                                <span style={{ fontSize: "16px", color: "#ffffff", }}>Vegetable’s Package</span>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={11} lg={9.8} md={11} sm={11} xl={7}>
                    <Box sx={{
                        paddingTop: "80px",
                        paddingBottom: "100px"
                    }}>
                        <Grid container justifyContent="center" spacing={3} >
                            <Grid item xs={12} lg={5.8} md={6} sm={6} xl={6}>
                                <Box>
                                    <Box sx={{
                                        marginBottom: "20px"
                                    }}>
                                        <img src={decard} alt="" style={{ maxWidth: "100%" }} />
                                    </Box>
                                    <Carousel breakPoints={breakPoints} autoPlaySpeed={10000} sx={{width:"150%"}}>
                                        <Grid container justifyContent="center" spacing={3} >
                                        {DetaCaru.map((val, v) => (
                                            <Grid key={v} item xs={12} lg={5.8} md={3} sm={3} xl={3}>
                                                 <img src={val.imgg} alt="" style={{ maxWidth: "100%" }} />
                                            </Grid>
                                        ))}
                                        </Grid>
                                    </Carousel>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={5.8} md={6} sm={6} xl={6}>
                                <Box>
                                    <Typography variant='h3' sx={{
                                        color: "#252525",
                                        fontWeight: "700",
                                        marginBottom: "16px",
                                        fontSize: "30px"
                                    }}>
                                        Vetgetable’s Package
                                    </Typography>
                                    {DetaliMap.map((val, v) => (
                                        <Box key={v}>
                                            <Typography sx={{ fontSize: "14px", marginBottom: "0px", display: "flex" }}>
                                                <i style={{ marginRight: "2px", color: "#EDBB0E" }}>{val.icon1}</i>
                                                <i style={{ marginRight: "2px", color: "#EDBB0E" }}>{val.icon2}</i>
                                                <i style={{ marginRight: "2px", color: "#EDBB0E" }}>{val.icon3}</i>
                                                <i style={{ marginRight: "2px", color: "#EDBB0E" }}>{val.icon4}</i>
                                                <i style={{ marginRight: "2px", color: "#EDBB0E" }}>{val.icon5}</i>
                                                <span style={{ marginLeft: "4px", color: "#dd2222" }}>{val.span}</span>
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "30px",
                                                color: "#dd2222",
                                                fontWeight: "500",
                                                marginTop: { xl: "-5%", lg: "-4%", md: "-5%", sm: "-8%", xs: "-6%" }
                                            }}>
                                                {val.narx}
                                            </Typography>
                                            <Typography sx={{
                                                marginBottom: "45px",
                                                color: "#6f6f6f",
                                                lineHeight: "26px",
                                                marginTop: "-2%"
                                            }}>
                                                {val.text}
                                            </Typography>
                                        </Box>))}
                                    <Grid container sx={{ gap: { xl: "0px", lg: "0px", md: "0px", sm: "0px", xs: "5px" } }}>
                                        <Grid item xs={4.4} lg={3.3} md={4} sm={5.2} xl={3.4}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    width: "140px",
                                                    height: "52px",
                                                    display: "inline - block",
                                                    position: "relative",
                                                    textAlign: "center",
                                                    background: "#f5f5f5",
                                                    marginBottom: "5px",
                                                }}
                                            >
                                                <div >
                                                    <ButtonGroup>
                                                        <span className='minus' onClick={() => {
                                                            setCount(Math.max(count - 1, 0));
                                                        }}>-</span>
                                                        <Typography className='deson'>
                                                            {count}
                                                        </Typography>
                                                        <span className='minus' onClick={() => {
                                                            setCount(count + 1);
                                                        }}>+</span>
                                                    </ButtonGroup>
                                                </div>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={5.4} lg={4} md={4.8} sm={6.8} xl={4.1}>
                                            <Link style={{
                                                padding: "16px 28px 14px",
                                                display: "inline-block",
                                                fontSize: "14px",
                                                color: "#ffffff",
                                                textTransform: "uppercase",
                                                fontWeight: "700",
                                                background: "#7fad39",
                                                letterSpacing: "2px",
                                                textDecoration: "none"
                                            }}>
                                                ADD TO CARD
                                            </Link>
                                        </Grid>
                                        <Grid item xs={1.8} lg={2} md={2} sm={2} xl={2}>
                                            <Link style={{
                                                display: "inline-block",
                                                fontSize: "16px",
                                                color: "#6f6f6f",
                                                padding: "12px 15px 12px",
                                                background: "#f5f5f5",
                                            }}>
                                                <AiOutlineHeart style={{ fontSize: "26px" }} />
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{
                                        borderTop: "1px solid #ebebeb",
                                        paddingTop: "40px",
                                        marginTop: "50px",
                                    }}>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#1c1c1c",
                                            listStyle: "none",
                                            lineHeight: "36px",
                                        }}>
                                            <b style={{
                                                fontWeight: "700",
                                                width: "170px",
                                                display: "inline-block",
                                            }}>Availability</b>
                                            <span style={{
                                                fontSize: "16px",
                                                color: "#1c1c1c",
                                                listStyle: "none",
                                                lineHeight: "36px",
                                            }}>In Stock</span>

                                        </Typography>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#1c1c1c",
                                            listStyle: "none",
                                            lineHeight: "36px",
                                        }}>
                                            <b style={{
                                                fontWeight: "700",
                                                width: "170px",
                                                display: "inline-block",
                                            }}>Shipping</b>
                                            <span style={{
                                                fontSize: "16px",
                                                color: "#1c1c1c",
                                                listStyle: "none",
                                                lineHeight: "36px",
                                            }}>01 day shipping. <samp style={{ color: "red" }}>Free pickup today</samp></span>

                                        </Typography>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#1c1c1c",
                                            listStyle: "none",
                                            lineHeight: "36px",
                                        }}>
                                            <b style={{
                                                fontWeight: "700",
                                                width: "170px",
                                                display: "inline-block",
                                            }}>Weight</b>
                                            <span style={{
                                                fontSize: "16px",
                                                color: "#1c1c1c",
                                                listStyle: "none",
                                                lineHeight: "36px",
                                            }}>0.5 kg </span>
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#1c1c1c",
                                            listStyle: "none",
                                            lineHeight: "36px",
                                        }}>
                                            <b style={{
                                                fontWeight: "700",
                                                width: "170px",
                                                display: "inline-block",
                                            }}>Share on</b>
                                            <span style={{
                                                fontSize: "16px",
                                                color: "#1c1c1c",
                                                listStyle: "none",
                                                lineHeight: "36px",
                                            }}>
                                                <Box sx={{ display: "inline-block" }}>
                                                    <Link className='deic'>
                                                        <FaFacebookF />
                                                    </Link>
                                                    <Link className='deic'>
                                                        <FaTwitter />
                                                    </Link>
                                                    <Link className='deic'>
                                                        <FaInstagram />
                                                    </Link>
                                                    <Link className='deic'>
                                                        <FaPinterest />
                                                    </Link>
                                                </Box>
                                            </span>
                                        </Typography>

                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper', paddingTop: "10px", marginBottom: "120px" }} value={value}>
                        <Tabs value={value} onChange={handleChange} centered sx={{ paddingBottom: "100px" }}>
                            <Tab label="Description" value="1" sx={{
                                marginRight: "55px",
                                color: "#495057",
                                fontSize: "14px",
                                fontWeight: "700"
                            }} />
                            <Tab label="Information" value="2" sx={{
                                marginRight: "55px",
                                color: "#999999",
                                fontSize: "14px",
                                fontWeight: "700"
                            }} />
                            <Tab label="Reviews (1)" value="3" sx={{
                                marginRight: "55px",
                                color: "#999999",
                                fontSize: "14px",
                                fontWeight: "700"
                            }} />
                        </Tabs>
                        <Box value="1">
                            <Typography variant='h6' sx={{
                                fontWeight: "700",
                                color: "#333333",
                                marginBottom: "26px",
                            }}>
                                Products Infomation
                            </Typography>
                            <Typography sx={{
                                lineHeight: "26px",
                                margin: "0 0 15px 0"
                            }}>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                vel, ullamcorper sit amet ligula. Proin eget tortor risus.
                            </Typography>
                            <Typography sx={{
                                lineHeight: "26px",
                                margin: "0 0 15px 0"
                            }}>
                                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                sed sit amet dui. Proin eget tortor risus.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ paddingBottom: "30px" }}>
                        <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                            <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Box sx={{ paddingBottom: "70px", textAlign: "center" }}>
                                    <Typography variant='h2' sx={{
                                        color: "#1c1c1c",
                                        fontWeight: "700",
                                        position: "relative",
                                        fontSize: "36px"
                                    }}>Related Product
                                        <Typography sx={{
                                            position: "absolute",
                                            left: "0",
                                            bottom: "-15px",
                                            right: "0",
                                            height: "4px",
                                            width: "80px",
                                            background: "#7fad39",
                                            margin: "0 auto",
                                        }}>

                                        </Typography>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            {DetaHover.map((val, v) => (
                                <Grid key={v} item xs={12} lg={3} md={3} sm={4} xl={3}>
                                    <Box sx={{ marginBottom: "50px" }} className="de">
                                        <Box className="dee" sx={{
                                            height: "270px",
                                            position: "relative",
                                            overflow: "hidden",
                                            backgroundPosition: "top center"
                                        }}>
                                            <img src={val.img} alt="" className="deee" />
                                            <Box className='de_hover'>
                                                <Typography className='de_i'>
                                                    <Link className='de_hov'>
                                                        <FaHeart style={{ fontSize: "20px" }} />
                                                    </Link>
                                                </Typography >
                                                <Typography className='de_i'>
                                                    <Link className='de_hov'>
                                                        <FaRetweet style={{ fontSize: "20px" }} />
                                                    </Link>
                                                </Typography>
                                                <Typography className='de_ii'>
                                                    <Link className='de_hov'>
                                                        <FaShoppingCart style={{ fontSize: "20px" }} />
                                                    </Link>
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ textAlign: "center", paddingTop: "15px" }}>
                                            <Typography variant='h6' sx={{ fontSize: "16px", marginBottom: "10px", color: "#252525", fontWeight: 400, }}>
                                                Crab Pool Security
                                            </Typography>
                                            <Typography variant='h5' sx={{ fontSize: "18px", color: "#252525", fontWeight: 800, }}>
                                                $30.00
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}
export default Detalis