import { Box, Container, Grid, Link, Typography } from '@mui/material';
import './Home.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { HomemapTabs1,HomemapTabs2,HomemapTabs3,HomemapTabs4,HomemapTabs5 } from '../../assents/Homemap/Homemap';
import { FaHeart, FaRetweet, FaShoppingCart } from 'react-icons/fa';
import * as React from 'react';

function HomTabs() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ width: '100%' }} id='HomEkkTabBosh'>
                <TabContext value={value}>
                    <Box>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="All" value="1" />
                            <Tab label="Oranges" value="2" />
                            <Tab label="Fresh Meat" value="3" />
                            <Tab label="Vegetables" value="4" />
                            <Tab label="Fastfood" value="5" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Box>
                            <Grid container>
                                {HomemapTabs1.map((val2) => (
                                    <Grid item xs={12} sm={4} md={3} lg={3} xl={3} >
                                        <Box sx={{
                                            padding: '0 14px'
                                        }}>
                                            <Box  className="de34" sx={{
                                                marginBottom: '50px'
                                            }}>
                                                <Box className="dee34" sx={{
                                                    width: '100%',
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    backgroundPosition: "top center",
                                                    height: "270px",
                                                }}>
                                                    <Typography className="deee34">
                                                        <img src={val2.img} alt="" width={'100%'} height={'270px'} />
                                                    </Typography>
                                                    <Box className='de_hover34'>
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaHeart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography >
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaRetweet style={{ fontSize: "16px"}} />
                                                            </Link>
                                                        </Typography>
                                                        <Typography className='de_ii34'>
                                                            <Link className='de_hov34'>
                                                                <FaShoppingCart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography>
                                                    </Box>
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
                    </TabPanel>
                    <TabPanel value="2">
                    <Box>
                            <Grid container>
                                {HomemapTabs2.map((val2) => (
                                    <Grid item xs={12} sm={4} md={3} lg={3} xl={3} >
                                        <Box sx={{
                                            padding: '0 14px'
                                        }}>
                                            <Box  className="de34" sx={{
                                                marginBottom: '50px'
                                            }}>
                                                <Box className="dee34" sx={{
                                                    width: '100%',
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    backgroundPosition: "top center",
                                                    height: "270px",
                                                }}>
                                                    <Typography className="deee34">
                                                        <img src={val2.img} alt="" width={'100%'} height={'270px'} />
                                                    </Typography>
                                                    <Box className='de_hover34'>
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaHeart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography >
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaRetweet style={{ fontSize: "16px"}} />
                                                            </Link>
                                                        </Typography>
                                                        <Typography className='de_ii34'>
                                                            <Link className='de_hov34'>
                                                                <FaShoppingCart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography>
                                                    </Box>
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
                    </TabPanel>
                    <TabPanel value="3">
                    <Box>
                            <Grid container>
                                {HomemapTabs3.map((val2) => (
                                    <Grid item xs={12} sm={4} md={3} lg={3} xl={3} >
                                        <Box sx={{
                                            padding: '0 14px'
                                        }}>
                                            <Box  className="de34" sx={{
                                                marginBottom: '50px'
                                            }}>
                                                <Box className="dee34" sx={{
                                                    width: '100%',
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    backgroundPosition: "top center",
                                                    height: "270px",
                                                }}>
                                                    <Typography className="deee34">
                                                        <img src={val2.img} alt="" width={'100%'} height={'270px'} />
                                                    </Typography>
                                                    <Box className='de_hover34'>
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaHeart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography >
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaRetweet style={{ fontSize: "16px"}} />
                                                            </Link>
                                                        </Typography>
                                                        <Typography className='de_ii34'>
                                                            <Link className='de_hov34'>
                                                                <FaShoppingCart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography>
                                                    </Box>
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
                    </TabPanel>
                    <TabPanel value="4">
                    <Box>
                            <Grid container>
                                {HomemapTabs4.map((val2) => (
                                    <Grid item xs={12} sm={4} md={3} lg={3} xl={3} >
                                        <Box sx={{
                                            padding: '0 14px'
                                        }}>
                                            <Box  className="de34" sx={{
                                                marginBottom: '50px'
                                            }}>
                                                <Box className="dee34" sx={{
                                                    width: '100%',
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    backgroundPosition: "top center",
                                                    height: "270px",
                                                }}>
                                                    <Typography className="deee34">
                                                        <img src={val2.img} alt="" width={'100%'} height={'270px'} />
                                                    </Typography>
                                                    <Box className='de_hover34'>
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaHeart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography >
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaRetweet style={{ fontSize: "16px"}} />
                                                            </Link>
                                                        </Typography>
                                                        <Typography className='de_ii34'>
                                                            <Link className='de_hov34'>
                                                                <FaShoppingCart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography>
                                                    </Box>
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
                    </TabPanel>
                    <TabPanel value="5">
                    <Box>
                            <Grid container>
                                {HomemapTabs5.map((val2) => (
                                    <Grid item xs={12} sm={4} md={3} lg={3} xl={3} >
                                        <Box sx={{
                                            padding: '0 14px'
                                        }}>
                                            <Box  className="de34" sx={{
                                                marginBottom: '50px'
                                            }}>
                                                <Box className="dee34" sx={{
                                                    width: '100%',
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    backgroundPosition: "top center",
                                                    height: "270px",
                                                }}>
                                                    <Typography className="deee34">
                                                        <img src={val2.img} alt="" width={'100%'} height={'270px'} />
                                                    </Typography>
                                                    <Box className='de_hover34'>
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaHeart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography >
                                                        <Typography className='de_i34'>
                                                            <Link className='de_hov34'>
                                                                <FaRetweet style={{ fontSize: "16px"}} />
                                                            </Link>
                                                        </Typography>
                                                        <Typography className='de_ii34'>
                                                            <Link className='de_hov34'>
                                                                <FaShoppingCart style={{ fontSize: "16px" }} />
                                                            </Link>
                                                        </Typography>
                                                    </Box>
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
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
export default HomTabs;