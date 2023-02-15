import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import { AiOutlineTag } from 'react-icons/ai';
import { Chekmap } from '../../../assents/pageslarmep/chekout';

import "./style.css"


function ChecOut() {
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
                                Checkout
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
                                <span style={{ fontSize: "16px", color: "#ffffff", }}>Checkout</span>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={9.8} md={11} sm={11} xl={7.3}>
                        <Box>
                            <Typography variant='h6' sx={{
                                color: "#999999",
                                textAlign: "center",
                                background: "#f5f5f5",
                                borderTop: "1px solid #6AB963",
                                padding: "12px 0 12px",
                                marginBottom: "75px",
                                fontSize: "16px"
                            }}>
                                <span style={{
                                    fontSize: "18px",
                                    color: "#6AB963",
                                    marginRight: "5px",
                                    transform: "rotate(180deg)"
                                }}><AiOutlineTag /></span>
                                Have a coupon?
                                <Link hrefLang='#' style={{ color: "#999999" }}>
                                    Click here
                                </Link>
                                to enter your code
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h4' sx={{
                                color: "#1c1c1c",
                                fontWeight: "800",
                                borderBottom: "1px solid #e1e1e1",
                                paddingBottom: "20px",
                                marginBottom: "25px",
                                fontSize: "22px"
                            }}>
                                Billing Details
                            </Typography>
                        </Box>
                        <Grid container  spacing={3.4}>
                            <Grid item xs={12} lg={8} md={8} sm={6} xl={8}>
                                <Grid container spacing={3}>
                                    {Chekmap.map((val, v) => (
                                        <Grid key={v} item xs={12} lg={val.gr} md={val.gr} sm={12} xl={val.gr}>
                                            <Box sx={{ marginBottom: "7px" }}>
                                                <Typography sx={{
                                                    color: "#1c1c1c",
                                                    marginBottom: (val.bot),
                                                }}>
                                                    {val.name}
                                                    <span style={{ color: "red" }}>{val.sp}</span>
                                                </Typography>
                                                <input type="text" placeholder={val.pl} style={{
                                                    width: "100%",
                                                    height: "46px",
                                                    border: "1px solid #ebebeb",
                                                    paddingLeft: "20px",
                                                    fontSize: "16px",
                                                    color: "#b2b2b2",
                                                    borderRadius: "4px",
                                                }}></input>

                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                        <Typography sx={{ marginBottom: "10px", marginTop: "20px" }}>
                                            <Typography sx={{
                                                fontSize: "17px",
                                                color: "#1c1c1c",
                                                cursor: "pointer",
                                                display: "inline-block",
                                                marginBottom: "0.5rem",
                                                width: "100%"
                                            }}>
                                                <input type="checkbox" style={{
                                                    marginTop: "4px",
                                                    height: "16px",
                                                    width: "14px",
                                                    border: "1px solid #a6a6a6",
                                                    borderRadius: "4px",
                                                    marginRight: "4%"
                                                }}></input>
                                                Create an account?
                                            </Typography>
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: "17px",
                                            color: "#6f6f6f",
                                            marginBottom: "0.5rem",
                                            width: "100%"
                                        }}>
                                            Create an account by entering the information below. If you are a returning customer
                                            please login at the top of the page
                                        </Typography>
                                        <Box sx={{ marginBottom: "7px" }}>
                                            <Typography sx={{
                                                color: "#1c1c1c",
                                                marginBottom: "20px",
                                            }}>
                                                Account Password
                                                <span style={{ color: "red" }}>*</span>
                                            </Typography>
                                            <input type="text" style={{
                                                width: "100%",
                                                height: "46px",
                                                border: "1px solid #ebebeb",
                                                paddingLeft: "20px",
                                                fontSize: "16px",
                                                color: "#b2b2b2",
                                                borderRadius: "4px",
                                            }}></input>

                                        </Box>
                                        <Typography sx={{ marginBottom: "10px", marginTop: "20px" }}>
                                            <Typography sx={{
                                                fontSize: "17px",
                                                color: "#1c1c1c",
                                                cursor: "pointer",
                                                display: "inline-block",
                                                marginBottom: "0.5rem",
                                                width: "100%"
                                            }}>
                                                <input type="checkbox" style={{
                                                    marginTop: "4px",
                                                    height: "16px",
                                                    width: "14px",
                                                    border: "1px solid #a6a6a6",
                                                    borderRadius: "4px",
                                                    marginRight: "4%"
                                                }}></input>
                                                Ship to a different address?
                                            </Typography>
                                        </Typography>
                                        <Box sx={{ marginBottom: "7px" }}>
                                            <Typography sx={{
                                                color: "#1c1c1c",
                                                marginBottom: "20px",
                                            }}>
                                                Order notes
                                                <span style={{ color: "red" }}>*</span>
                                            </Typography>
                                            <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." style={{
                                                width: "100%",
                                                height: "46px",
                                                border: "1px solid #ebebeb",
                                                paddingLeft: "20px",
                                                fontSize: "16px",
                                                color: "#b2b2b2",
                                                borderRadius: "4px",
                                            }}></input>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={4} md={4} sm={6} xl={4}>
                                <Box sx={{
                                    background: "#f5f5f5",
                                    padding: "40px",
                                    paddingTop: "30px",
                                }}>
                                    <Typography variant='h5' sx={{
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        color: "#1c1c1c",
                                        paddingBottom: "25px",
                                        borderBottom: "1px solid #ebebeb",
                                        marginBottom: "18px",
                                    }}>
                                        Cart Total
                                    </Typography>
                                    <Typography variant='h5' sx={{
                                        fontSize: "17px",
                                        fontWeight: 800,
                                        color: "#1c1c1c",
                                        paddingBottom: "13px",
                                        overflow: "hidden",
                                        borderBottom: "1px solid #ebebeb",
                                        marginBottom: "18px",
                                    }}>
                                        Products
                                        <span style={{
                                            fontSize: "16px",
                                            float: "right",
                                        }}>
                                            Total
                                        </span>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#6f6f6f",
                                            lineHeight: "40px",
                                            marginTop: "10px"
                                        }}>
                                            Vegetable’s Package
                                            <span style={{ fontWeight: "800", float: "right" }}>$75.99</span>
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#6f6f6f",
                                            lineHeight: "40px",
                                            marginTop: "10px"
                                        }}>
                                            Fresh Vegetable
                                            <span style={{ fontWeight: "800", float: "right" }}>$151.99</span>
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#6f6f6f",
                                            lineHeight: "40px",
                                            marginTop: "10px"
                                        }}>
                                            Organic Bananas
                                            <span style={{ fontWeight: "800", float: "right" }}>$53.99</span>
                                        </Typography>
                                    </Typography>
                                    <Typography variant='h5' sx={{
                                        fontSize: "15px",
                                        fontWeight: 800,
                                        color: "#1c1c1c",
                                        paddingBottom: "15px",
                                        overflow: "hidden",
                                        borderBottom: "1px solid #ebebeb",
                                        marginBottom: "15px",
                                        paddingTop: "5px"
                                    }}>
                                        Subtotal
                                        <span style={{
                                            fontSize: "18px",
                                            float: "right",
                                        }}>
                                            $750.99
                                        </span>
                                    </Typography>
                                    <Typography variant='h5' sx={{
                                        fontSize: "15px",
                                        fontWeight: 800,
                                        color: "#1c1c1c",
                                        paddingBottom: "15px",
                                        overflow: "hidden",
                                        borderBottom: "1px solid #ebebeb",
                                        marginBottom: "15px",
                                        paddingTop: "5px"
                                    }}>
                                        Total
                                        <span style={{
                                            fontSize: "18px",
                                            color: "#dd2222",
                                            float: "right",
                                        }}>
                                            $750.99
                                        </span>
                                    </Typography>
                                    <Typography sx={{ marginBottom: "10px", marginTop: "20px" }}>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#1c1c1c",
                                            cursor: "pointer",
                                            display: "inline-block",
                                            marginBottom: "0.5rem",
                                            width: "100%"
                                        }}>
                                            <input type="checkbox" style={{
                                                marginTop: "4px",
                                                height: "16px",
                                                width: "14px",
                                                border: "1px solid #a6a6a6",
                                                borderRadius: "4px",
                                                marginRight: "2%"
                                            }}></input>
                                            Create an account?
                                        </Typography>
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "16px",
                                        color: "#6f6f6f",
                                        marginBottom: "0.5rem",
                                        width: "100%"
                                    }}>
                                        Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.
                                    </Typography>
                                    <Typography sx={{ marginBottom: "10px", marginTop: "20px" }}>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#1c1c1c",
                                            cursor: "pointer",
                                            display: "inline-block",
                                            marginBottom: "0.5rem",
                                            width: "100%"
                                        }}>
                                            <input type="checkbox" style={{
                                                marginTop: "4px",
                                                height: "16px",
                                                width: "14px",
                                                border: "1px solid #a6a6a6",
                                                borderRadius: "4px",
                                                marginRight: "2%"
                                            }}></input>
                                            Check Payment
                                        </Typography>
                                    </Typography>
                                    <Typography sx={{ marginBottom: "10px", marginTop: "10px" }}>
                                        <Typography sx={{
                                            fontSize: "16px",
                                            color: "#1c1c1c",
                                            cursor: "pointer",
                                            display: "inline-block",
                                            marginBottom: "0.5rem",
                                            width: "100%"
                                        }}>
                                            <input type="checkbox" style={{
                                                marginTop: "4px",
                                                height: "16px",
                                                width: "14px",
                                                border: "1px solid #a6a6a6",
                                                borderRadius: "4px",
                                                marginRight: "2%"
                                            }}></input>
                                            Paypal
                                        </Typography>
                                    </Typography>
                                    <Link style={{
                                        fontSize: "18px",
                                        padding: "13px 30px 12px",
                                        color: "#ffffff",
                                        textTransform: "uppercase",
                                        fontWeight: 700,
                                        background: "#7fad39",
                                        letterSpacing: "2px",
                                        textAlign: "center",
                                        display: "block",
                                        textDecoration: "none"
                                    }}>
                                        PLACE ORDER
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
export default ChecOut