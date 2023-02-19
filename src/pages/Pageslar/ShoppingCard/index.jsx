import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import ca from "../img//cart-1.jpg"
import ButtonGroup from '@mui/material/ButtonGroup';
import CloseIcon from '@mui/icons-material/Close';
import { Shoppmap } from '../../../assents/pageslarmep/shoppinshcard';


import "./style.css"


function Shopcard() {
    const [count, setCount] = React.useState(1);
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
                                Shopping Cart
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
                                <span style={{ fontSize: "16px", color: "#ffffff", }}>Shopping Cart</span>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={9.8} md={11} sm={11} xl={7.3}>
                        <Box sx={{ marginBottom: "30px" }}>
                            <Box sx={{ borderBottom: "1px solid #ebebeb", display: "flex" }}>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    color: "#1c1c1c",
                                    paddingBottom: "20px",
                                    width: "50%"
                                }}>
                                    Products
                                </Typography>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    color: "#1c1c1c",
                                    paddingBottom: "20px",
                                    width: "15%",
                                    textAlign: "center"
                                }}>
                                    Price
                                </Typography>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    color: "#1c1c1c",
                                    paddingBottom: "20px",
                                    width: "15%",
                                    textAlign: "center"
                                }}>
                                    Quantity
                                </Typography>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    color: "#1c1c1c",
                                    paddingBottom: "20px",
                                    width: "15%",
                                    textAlign: "center"
                                }}>
                                    Total
                                </Typography>
                            </Box>
                            {Shoppmap.map((val, v) => (
                                <Box key={v} sx={{ borderBottom: "1px solid #ebebeb", display: "flex", paddingTop: "30px", paddingBottom: "30px" }}>
                                    <Typography sx={{ width: "50%" }}>
                                        <img src={val.imgg} alt="" style={{ marginRight: "25px" }} />
                                        <Typography variant='h5' sx={{
                                            display: "inline-block",
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            color: "#1c1c1c",
                                        }}>
                                            {val.name}
                                        </Typography>
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        color: "#1c1c1c",
                                        paddingBottom: "20px",
                                        width: "15%",
                                        textAlign: "center",
                                        marginTop: "3%"
                                    }}>
                                        {val.som}
                                    </Typography>
                                    <Typography sx={{
                                        width: "15%",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        marginTop: "2%"
                                    }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                width: "80%",
                                                height: "52px",
                                                display: "inline - block",
                                                position: "relative",
                                                textAlign: "center",
                                                background: "#f5f5f5",
                                                marginBottom: "5px",
                                                marginLeft: "10%"
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
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        color: "#1c1c1c",
                                        paddingBottom: "20px",
                                        width: "15%",
                                        textAlign: "center",
                                        marginTop: "3%",

                                    }}>
                                        {val.som2}

                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "24px",
                                        color: "#b2b2b2",
                                        cursor: "pointer",
                                        marginLeft: "30px",
                                        marginTop: "2.5%",
                                    }}><CloseIcon /></Typography>
                                </Box>
                            ))}
                        </Box>
                        <Grid container  >
                            <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                <Box>
                                    <Link href="#" style={{
                                        color: "#6f6f6f",
                                        padding: "14px 30px 12px",
                                        background: "#f5f5f5",
                                        display: "inline-block",
                                        fontSize: "14px",
                                        letterSpacing: "2px",
                                        fontWeight: "700",
                                        textDecoration: "none"
                                    }}>
                                        CONTINUE SHOPPING
                                    </Link>
                                    <Link href="#" style={{
                                        color: "#6f6f6f",
                                        padding: "14px 30px 12px",
                                        background: "#f5f5f5",
                                        display: "inline-block",
                                        fontSize: "14px",
                                        letterSpacing: "2px",
                                        fontWeight: "700",
                                        textDecoration: "none",
                                        float: "right"
                                    }}>
                                        <span></span>
                                        Upadate Cart
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={6} md={6} sm={12} xl={6}>
                                <Box sx={{marginTop:"45px"}}>
                                    <Typography variant='h5' sx={{
                                        fontSize: "18px",
                                        fontWeight: 800,
                                        color: "#1c1c1c",
                                        paddingBottom: "25px",
                                    }}>
                                        Discount Codes
                                    </Typography>
                                    <Grid container spacing={3} >
                                        <Grid item xs={12} lg={6} md={6} sm={6} xl={6}>
                                            <input type="text" placeholder="Enter your coupon code" className='inp' />
                                        </Grid>
                                        <Grid item xs={12} lg={6} md={6} sm={6} xl={6}>
                                            <Link href="#" style={{
                                                color: "#ffffff",
                                                padding: "15px 30px 12px",
                                                background: "#6f6f6f",
                                                display: "inline-block",
                                                fontSize: "12px",
                                                letterSpacing: "2px",
                                                fontWeight: "800",
                                                textDecoration: "none"
                                            }}>
                                                APPLY COUPON
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={6} md={6} sm={12} xl={6}>
                                <Box sx={{
                                    background: "#f5f5f5",
                                    padding: "30px",
                                    paddingTop: "20px",
                                    marginTop: "50px",
                                }}>
                                    <Typography variant='h5' sx={{
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        color: "#1c1c1c",
                                        paddingBottom: "25px",
                                    }}>
                                        Cart Total
                                    </Typography>
                                    <Typography variant='h5' sx={{
                                        fontSize: "15px",
                                        fontWeight: 800,
                                        color: "#1c1c1c",
                                        paddingBottom: "13px",
                                        overflow: "hidden",
                                        borderBottom: "1px solid #ebebeb",
                                        marginBottom: "18px",
                                    }}>
                                        Subtotal
                                        <span style={{
                                            fontSize: "18px",
                                            color: "#dd2222",
                                            float: "right",
                                        }}>
                                            $454.98
                                        </span>
                                    </Typography>
                                    <Typography variant='h5' sx={{
                                        fontSize: "15px",
                                        fontWeight: 800,
                                        color: "#1c1c1c",
                                        paddingBottom: "13px",
                                        overflow: "hidden",
                                        borderBottom: "1px solid #ebebeb",
                                        marginBottom: "18px",
                                    }}>
                                        Total 
                                        <span style={{
                                            fontSize: "18px",
                                            color: "#dd2222",
                                            float: "right",
                                        }}>
                                            $454.98
                                        </span>
                                    </Typography>
                                    <Link style={{
                                        fontSize: "14px",
                                        padding: "10px 28px 10px",
                                        color: "#ffffff",
                                        textTransform: "uppercase",
                                        fontWeight: 700,
                                        background: "#7fad39",
                                        letterSpacing: "2px",
                                        textAlign:"center",
                                        display:"block",
                                        textDecoration:"none"
                                    }}>
                                        PROCEED TO CHECKOUT
                                    </Link>

                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Shopcard