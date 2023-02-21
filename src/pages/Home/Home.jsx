import { Box, Container, Grid, Link, Typography } from '@mui/material';
import Carousel from "react-elastic-carousel";
import { Homemap, HomemapCarUsh, Homemapohiriyes } from '../../assents/Homemap/Homemap';
import React, { Component } from "react";
import Slider from "react-slick";
import HomeImgbosh1 from '../../assents/Img/banner-1.webp'
import HomeImgbosh2 from '../../assents/Img/banner-2.webp'
import './Home.css';
import HomTabs from './HomTabs';
import { BsCalendar } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 640, itemsToShow: 3 },
    { width: 850, itemsToShow: 4 },
    { width: 900, itemsToShow: 4 },
    { width: 1100, itemsToShow: 4 },
];

export default class Home extends Component {

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3500,
            autoplay: true,
            pauseOnHover: true
        };

        return (
            <Box id='Home'>
                <Container>
                    <Box>
                        {/* <Box>
                            <Box id='hommenu1'>
                                <Box>
                                    <Typography>
                                        FRUIT FRESH
                                    </Typography>
                                    <Typography>
                                        Vegetable
                                    </Typography>
                                    <Typography>
                                        100% Organic
                                    </Typography>
                                    <Typography>
                                        Free Pickup and Delivery Available
                                    </Typography>
                                    <Link>
                                        SHOP NOW
                                    </Link>
                                </Box>
                            </Box>
                        </Box> */}
                        <Box id='hommenu4'>
                            <Carousel breakPoints={breakPoints} >
                                {Homemap.map((val) => (
                                    <Box id={val.img}>
                                        <Box id='hommenu3'>
                                            <Typography id='hommenu2'>
                                                {val.yoz}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Carousel>
                        </Box>
                        <Box sx={{ padding: '80px 0 40px 0' }}>
                            <Box>
                                <Typography sx={{
                                    width: '100%',
                                    textAlign: 'center',
                                    color: '#1c1c1c',
                                    fontWeight: '700',
                                    fontSize: '36px'
                                }}>
                                    Featured Product
                                </Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '5px',
                                    marginBottom: '42px'
                                }}>
                                    <Typography sx={{
                                        height: '4px',
                                        width: '80px',
                                        background: '#7fad39',
                                    }}>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <HomTabs />
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{
                                display: {xl:'flex',lg:'flex',md:'flex',sm:'flex',xs:'block'}
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    padding: '0 15px',
                                }}>
                                    <img src={HomeImgbosh1} alt="" width={'100%'} />
                                </Box>
                                <Box sx={{
                                    width: '100%',
                                    padding: '0 15px'
                                }}>
                                    <img src={HomeImgbosh2} alt="" width={'100%'} />
                                </Box>
                            </Box>
                        </Box>
                        <Box className='HomeSelectZZ1'>
                            <Box sx={{ marginTop: '80px' }}>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                        <Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    color: '#1c1c1c',
                                                    marginBottom: '45px',
                                                    fontSize: '24px',
                                                    padding: '0 14px',
                                                    width: 'auto'
                                                }}>
                                                    Latest Products
                                                </Typography>
                                            </Box>
                                            <Slider {...settings} style={{padding:'0 15px'}}>
                                                {HomemapCarUsh.map((val3) => (
                                                    <Box sx={{ width: '100%' }}>
                                                        <Link href='#' sx={{ textDecoration: 'none', width: '100%' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer',
                                                                width: '100%'
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img1} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz1}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma1}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                        <Link href='#' sx={{ textDecoration: 'none' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img2} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz2}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma2}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                        <Link href='#' sx={{ textDecoration: 'none' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img3} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz3}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma3}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                    </Box>
                                                ))}
                                            </Slider>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                        <Box sx={{ width: '100%' }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    color: '#1c1c1c',
                                                    marginBottom: '45px',
                                                    fontSize: '24px',
                                                    padding: '0 14px'
                                                }}>
                                                    Latest Products
                                                </Typography>
                                            </Box>
                                            <Slider {...settings} style={{padding:'0 15px'}}>
                                                {HomemapCarUsh.map((val3) => (
                                                    <Box sx={{ width: '100%' }}>
                                                        <Link href='#' sx={{ textDecoration: 'none', width: '100%' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img1} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz1}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma1}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                        <Link href='#' sx={{ textDecoration: 'none' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img2} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz2}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma2}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                        <Link href='#' sx={{ textDecoration: 'none' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img3} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz3}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma3}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                    </Box>
                                                ))}
                                            </Slider>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                        <Box sx={{ width: '100%' }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    color: '#1c1c1c',
                                                    marginBottom: '45px',
                                                    fontSize: '24px',
                                                    padding: '0 14px'
                                                }}>
                                                    Latest Products
                                                </Typography>
                                            </Box>
                                            <Slider {...settings} style={{padding:'0 15px'}}>
                                                {HomemapCarUsh.map((val3) => (
                                                    <Box sx={{ width: '100%' }}>
                                                        <Link href='#' sx={{ textDecoration: 'none', width: '100%' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img1} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz1}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma1}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                        <Link href='#' sx={{ textDecoration: 'none' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer'
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img2} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz2}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma2}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                        <Link href='#' sx={{ textDecoration: 'none' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                marginBottom: '14px',
                                                                cursor: 'pointer',
                                                            }}>
                                                                <Typography sx={{
                                                                    marginRight: '25px'
                                                                }}>
                                                                    <img src={val3.img3} alt="" />
                                                                </Typography>
                                                                <Box sx={{ paddingTop: '10px' }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        marginBottom: '8px',
                                                                        fontWeight: 400,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '16px'
                                                                    }}>
                                                                        {val3.yoz3}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontWeight: 700,
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontSize: '18px'
                                                                    }}>
                                                                        {val3.yozsuma3}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                    </Box>
                                                ))}
                                            </Slider>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ padding: '50px 0' }}>
                                <Box>
                                    <Typography sx={{
                                        width: '100%',
                                        textAlign: 'center',
                                        color: '#1c1c1c',
                                        fontWeight: '700',
                                        fontSize: '36px'
                                    }}>
                                        From The Blog
                                    </Typography>
                                    <Box sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginTop: '5px',
                                        marginBottom: '42px'
                                    }}>
                                        <Typography sx={{
                                            height: '4px',
                                            width: '80px',
                                            background: '#7fad39',
                                        }}>
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Grid container>    
                                    {Homemapohiriyes.map((val4) => (
                                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                                <Box sx={{padding:'0 15px'}}>
                                                    <Box>
                                                        <Typography sx={{width:'100%',marginBottom:'25px'}}>
                                                            <img src={val4.img1} alt="" width={'100%'} />
                                                        </Typography>
                                                        <Box sx={{display:'flex',alignItems:'center',marginBottom:'15px'}}>
                                                            <Typography sx={{
                                                                fontSize:'16px',
                                                                color:'#b2b2b2',
                                                                marginRight:'15px'
                                                            }}>
                                                                <BsCalendar style={{marginRight:'4px',marginBottom:'-1px'}} />
                                                                May 4,2019
                                                            </Typography>
                                                            <Typography  sx={{
                                                                fontSize:'16px',
                                                                color:'#b2b2b2',
                                                                marginRight:'15px'
                                                            }}>
                                                                <FaRegComment style={{marginRight:'4px',marginBottom:'-2px'}} /> 
                                                                  5
                                                            </Typography>
                                                        </Box>
                                                        <Link href='#' sx={{
                                                                fontSize: '19px',
                                                                color: '#1c1c1c',
                                                                fontWeight: 600 ,
                                                                fontFamily:'"Cairo", sans-serif',
                                                                textDecoration:'none',
                                                                cursor:'pointer'
                                                        }}>
                                                            {val4.yoz1}
                                                        </Link>
                                                        <Typography id='homohitugijbdssiu'>
                                                            {val4.yoz2}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                    ))}
                                        </Grid>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        );
    }
}