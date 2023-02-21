import { Box, Grid, Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import './Shop.css';
import { HomemapCarUsh } from '../../assents/Homemap/Homemap';
import Slider from "react-slick";
import React, { Component } from "react";
import { ShopMap, ShopMap2 } from "../../assents/ShopMap/ShopMap";
import { BsFillGridFill, BsChevronDown, BsListUl } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import ShopQim from './ShopQim';

export default class Shop extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            autoplay: true,
            pauseOnHover: true
        };
        var settings2 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            autoplaySpeed: 5000,
            slidesToScroll: 3,
            initialSlide: 0,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Box id='Shop'>
                <Box id='shopboshrasm1'>
                    <Box>
                        <Typography id='shopboshrasm2'>
                            Organi Shop
                        </Typography>
                        <Box id='shopboshrasm3'>
                            <Link to='/' id='shopboshrasm4'>
                                Home
                                <FaLongArrowAltRight />
                            </Link>
                            <Typography id='shopboshrasm5'>
                                Shop
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Container>
                    <Box sx={{ padding: '80px 0px' }}>
                        <Grid container>
                            <Grid item xs={12} sm={4.8} md={3} lg={3} xl={3}>
                                <Box sx={{ padding: '0 15px' }}>
                                    <Typography id='ShopBoshSoz1'>
                                        Department
                                    </Typography>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Fresh Meat
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Vegetables
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Fruit &amp; Nut Gifts
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Fresh Berries
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Ocean Foods
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Butter &amp; Eggs
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Fastfood
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Fresh Onion
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2'>
                                        Papayaya &amp; Crisps
                                    </Link>
                                    <Link href='#' id='ShopBoshSoz2' style={{ marginBottom: '35px' }}>
                                        Oatmeal
                                    </Link>
                                    <Box sx={{marginBottom:'35px'}}>
                                        <Typography id='ShopBoshSozdwagfaew'>
                                            Price
                                        </Typography>
                                        <ShopQim />
                                        <Box sx={{
                                            display:'flex',
                                            alignItems:'center'
                                        }}>
                                            <Typography id='ShopBosheasgw'>
                                                $10
                                            </Typography>
                                            <Typography id='ShopBosheasgeew'>
                                                -
                                            </Typography>
                                            <Typography id='ShopBosheasgw'>
                                                $540
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ marginBottom: '35px' }}>
                                        <Typography id='ShopBoshSoz1'>
                                            Colors
                                        </Typography>
                                        <Box sx={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '40%'
                                            }}>
                                                <Typography sx={{
                                                    border: '2px solid #333333',
                                                    height: '14px',
                                                    width: '14px',
                                                    borderRadius: '50%',
                                                    marginRight: '18px',
                                                    cursor: 'pointer'
                                                }}>
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    cursor: 'pointer',
                                                    fontWeight: '400',
                                                    fontFamily: '"Cairo", sans-serif'
                                                }}>
                                                    White
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '40%'
                                            }}>
                                                <Typography sx={{
                                                    background: '#E9A625',
                                                    height: '14px',
                                                    width: '14px',
                                                    borderRadius: '50%',
                                                    marginRight: '18px',
                                                    cursor: 'pointer'
                                                }}>
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    cursor: 'pointer',
                                                    fontWeight: '400',
                                                    fontFamily: '"Cairo", sans-serif'
                                                }}>
                                                    Gray
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '40%'
                                            }}>
                                                <Typography sx={{
                                                    background: '#D62D2D',
                                                    height: '14px',
                                                    width: '14px',
                                                    borderRadius: '50%',
                                                    marginRight: '18px',
                                                    cursor: 'pointer'
                                                }}>
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    cursor: 'pointer',
                                                    fontWeight: '400',
                                                    fontFamily: '"Cairo", sans-serif'
                                                }}>
                                                    Red
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '40%'
                                            }}>
                                                <Typography sx={{
                                                    background: '#252525',
                                                    height: '14px',
                                                    width: '14px',
                                                    borderRadius: '50%',
                                                    marginRight: '18px',
                                                    cursor: 'pointer'
                                                }}>
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    cursor: 'pointer',
                                                    fontWeight: '400',
                                                    fontFamily: '"Cairo", sans-serif'
                                                }}>
                                                    Black
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', marginBottom: '8px', alignItems: 'center' }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '40%'
                                            }}>
                                                <Typography sx={{
                                                    background: '#249BC8',
                                                    height: '14px',
                                                    width: '14px',
                                                    borderRadius: '50%',
                                                    marginRight: '18px',
                                                    cursor: 'pointer'
                                                }}>
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    cursor: 'pointer',
                                                    fontWeight: '400',
                                                    fontFamily: '"Cairo", sans-serif'
                                                }}>
                                                    Blue
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '40%'
                                            }}>
                                                <Typography sx={{
                                                    background: '#3CC032',
                                                    height: '14px',
                                                    width: '14px',
                                                    borderRadius: '50%',
                                                    marginRight: '18px',
                                                    cursor: 'pointer'
                                                }}>
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    cursor: 'pointer',
                                                    fontWeight: '400',
                                                    fontFamily: '"Cairo", sans-serif'
                                                }}>
                                                    Geen
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography id='ShopBoshSoz1'>
                                            Popular Size
                                        </Typography>
                                        <Box sx={{ marginBottom: '35px' }}>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box id='ShopBoshSoz3'>
                                                    <Link id='ShopBoshSoz4'>
                                                        Large
                                                    </Link>
                                                </Box>
                                                <Box id='ShopBoshSoz3'>
                                                    <Link id='ShopBoshSoz4'>
                                                        Medium
                                                    </Link>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box id='ShopBoshSoz3'>
                                                    <Link id='ShopBoshSoz4'>
                                                        Small
                                                    </Link>
                                                </Box>
                                                <Box id='ShopBoshSoz3'>
                                                    <Link id='ShopBoshSoz4'>
                                                        Tiny
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: '100%' }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                color: '#1c1c1c',
                                                marginBottom: '45px',
                                                fontSize: '24px',
                                                width: '100%'
                                            }}>
                                                Latest Products
                                            </Typography>
                                        </Box>
                                        <Box id='ShopboshCarus1'>
                                            <Slider {...settings}>
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
                                                                        fontSize: '15.5px'
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
                                                                        fontSize: '15.5px'
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
                                                                        fontSize: '15.5px'
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
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={7.2} md={9} lg={9} xl={9}>
                                <Box>
                                    <Box sx={{ paddingBottom: '67px',maxWidth:'100%' }}>
                                        <Box>
                                            <Typography id='ShopIkkIBoshSoz1'>
                                                Sale Off
                                            </Typography>
                                            <Typography id='ShopIkkIBoshSoz2'></Typography>
                                        </Box>
                                        <Box id='ShopIkkIBoshSoz3'>
                                            <Slider {...settings2}>
                                                {ShopMap.map((val) => (
                                                    <Box sx={{
                                                        padding: '0 14px'
                                                    }}>
                                                        <Box sx={{
                                                            marginBottom: '50px'
                                                        }}>
                                                            <Box sx={{
                                                                width: '100%'
                                                            }}>
                                                                <Box></Box>
                                                                <Typography sx={{width:'100%'}}>
                                                                    <img src={val.img} alt="" width={'100%'} />
                                                                </Typography>
                                                            </Box>
                                                            <Box sx={{
                                                                paddingTop: '15px',
                                                                textAlign: 'center'
                                                            }}>
                                                                <Typography sx={{
                                                                    color: '#b2b2b2',
                                                                    fontSize: '14px',
                                                                    fontFamily: '"Cairo", sans-serif',
                                                                    marginTop: '10px',
                                                                    marginBottom: '4px'
                                                                }}>
                                                                    {val.yoz1}
                                                                </Typography>
                                                                <Typography sx={{
                                                                    color: '#111111',
                                                                    fontSize: '18px',
                                                                    fontFamily: '"Cairo", sans-serif',
                                                                    fontWeight: '400',
                                                                    color: '#111111'
                                                                }}>
                                                                    {val.yoz2}
                                                                </Typography>
                                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                                    <Typography id='ShopIkkIBoshSoz4'>
                                                                        {val.yoz3}
                                                                    </Typography>
                                                                    <Typography id='ShopIkkIBoshSoz5'>
                                                                        {val.yoz4}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                ))}
                                            </Slider>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{
                                            padding: '0 15px'
                                        }}>
                                            <Box sx={{
                                                paddingTop: '45px',
                                                borderTop: '1px solid #ebebeb',
                                                paddingBottom: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}>
                                                <Box sx={{ display: 'flex', marginBottom: '15px' }}>
                                                    <Typography id='ShopIkkIBoshSoz6'>
                                                        Sort By
                                                    </Typography>
                                                    <Typography id='ShopIkkIBoshSoz7'>
                                                        Default
                                                        <BsChevronDown style={{ marginLeft: '4px' }} />
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', marginBottom: '15px' }}>
                                                    <Typography id='ShopIkkIBoshSoz8'>
                                                        16
                                                    </Typography>
                                                    <Typography id='ShopIkkIBoshSoz9'>
                                                        Products found
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', marginBottom: '15px' }}>
                                                    <Typography id='ShopIkkIBoshSoz10'>
                                                        <BsFillGridFill />
                                                    </Typography>
                                                    <Typography id='ShopIkkIBoshSoz11'>
                                                        <BsListUl />
                                                    </Typography>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box>
                                            <Grid container>
                                                { ShopMap2.map((val2) => (
                                                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                                                        <Box sx={{
                                                            padding: '0 15px'
                                                        }}>
                                                            <Box sx={{
                                                                marginBottom: '50px'
                                                            }}>
                                                                <Box sx={{
                                                                    width: '100%'
                                                                }}>
                                                                    <Box></Box>
                                                                    <Typography>
                                                                        <img src={val2.img} alt="" width={'100%'} />
                                                                    </Typography>
                                                                </Box>
                                                                <Box sx={{
                                                                    paddingTop: '15px',
                                                                    textAlign: 'center'
                                                                }}>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontSize: '16px',
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        marginTop: '10px'
                                                                    }}>
                                                                        {val2.yoz1}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        color: '#252525',
                                                                        fontSize: '18px',
                                                                        fontFamily: '"Cairo", sans-serif',
                                                                        fontWeight: '700'
                                                                    }}>
                                                                        {val2.yoz2}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </Box>
                                    <Box sx={{display:'flex',padding:'10px 15px 0 15px'}}>
                                        <Link href='#' id='ShopIkkIBoshSoz12'>
                                            1
                                        </Link>
                                        <Link href='#' id='ShopIkkIBoshSoz12'>
                                            2
                                        </Link>
                                        <Link href='#' id='ShopIkkIBoshSoz12'>
                                            3
                                        </Link>
                                        <Link href='#' id='ShopIkkIBoshSoz13'>
                                            <FaLongArrowAltRight />
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        )
    }
}