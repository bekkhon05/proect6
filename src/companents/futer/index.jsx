import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import logo from "../navbar/logo.png (1).webp"
import "../navbar/style.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import rasm from "./payment-item.png.webp"
function Futter() {
    return (
        <Box sx={{ background: "#F3F6FA", }}>
            <Container>
                <Box sx={{ width: "100%", height: "auto", pt: "70px" }}>
                    <Grid container columnspacing={0} rowSpacing={5} sx={{ pb: "25px" }}>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box sx={{ width: "100%", height: "auto", }}>
                                <Box sx={{ mb: "15px" }}>
                                    <img src={logo} alt="" />
                                </Box>
                                <Typography sx={{ fontSize: "14px", color: "#1c1c1c", lineHeight: "36px", fontFamily: '"Cairo", sans-serif' }}>
                                    Address: 60-49 Road 11378 New York
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "#1c1c1c", lineHeight: "36px" }}>
                                    Phone: +65 11.188.888
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "#1c1c1c", lineHeight: "36px" }}>
                                    Email: hello@colorlib.com
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12} sx={{ ml: { lg: "90px", md: "0", sm: " 0 ", xs: "0" } }}>
                            <Box sx={{ width: "100%", height: "auto", }}>
                                <Typography sx={{ fontSize: "16px", color: "#1c1c1c", fontWeight: "700", mb: "10px" }}>Useful Links</Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ width: "50%", height: "100%", color: "#1c1c1c", fontSize: "14px", }}>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>About Us</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>About Our Shop</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Secure Shopping</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Delivery infomation</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Privacy Policy</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Our Sitemap</Typography>
                                    </Box>
                                    <Box sx={{ width: "50%", height: "100%", color: "#1c1c1c", fontSize: "14px", }}>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Who We Are</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Our Services</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Projects</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Contact</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Innovation</Typography>
                                        <Typography sx={{ lineHeight: "32px", fontSize: "13px" }}>Testimonials</Typography>
                                    </Box>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box sx={{ width: "100%", height: "auto" }}>
                                <Typography sx={{ fontSize: "16px", color: "#1c1c1c", fontWeight: "700", mb: "10px" }}>Join Our Newsletter Now</Typography>
                                <Typography sx={{ color: "#1c1c1c", fontSize: "14px", mb: "30px" }}>
                                    Get E-mail updates about our latest shop and special offers.
                                </Typography>
                                <Box sx={{ width: "100%", height: "auto", display: "flex" }}>
                                    <input type="text" style={{ width: "100%", height: "45px", }} className="sapma" placeholder='Enter your Email' />
                                    <span style={{ width: "121px", height: "45px", background: "#7fad39", padding: "15px 15px", fontSize: "14px", color: "white", fontWeight: "700" }}>SUBSCRIBE</span>
                                </Box>
                                <Box sx={{ display: "flex", mt: "30px" }}>

                                    <Typography sx={{ width: "40px", height: "40px", background: "white", borderRadius: "50%", "&:hover": { background: "#7fad39", color: "white", transform: "0.5s", }, m: "0 10px 0 0", display: "flex", justifyContent: "center", alignItems: "center" }}> <FaFacebookF />   </Typography>
                                    <Typography sx={{ width: "40px", height: "40px", background: "white", borderRadius: "50%", "&:hover": { background: "#7fad39", color: "white", transform: "0.5s", }, m: "0 10px 0 0", display: "flex", justifyContent: "center", alignItems: "center" }}> <FaInstagram />   </Typography>
                                    <Typography sx={{ width: "40px", height: "40px", background: "white", borderRadius: "50%", "&:hover": { background: "#7fad39", color: "white", transform: "0.5s", }, m: "0 10px 0 0", display: "flex", justifyContent: "center", alignItems: "center" }}><FaTwitter />    </Typography>
                                    <Typography sx={{ width: "40px", height: "40px", background: "white", borderRadius: "50%", "&:hover": { background: "#7fad39", color: "white", transform: "0.5s", }, m: "0 10px 0 0", display: "flex", justifyContent: "center", alignItems: "center" }}> <FaPinterest />   </Typography>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                </Box>

            </Container>
            <Box sx={{ width: "100%", height: "auto", }}>
                <Container>
                    <Box sx={{ borderTop: "1px solid #ebebeb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={8} sm={12} xs={12}>
                                <Typography sx={{ fontSize: "16px", color: "#6f6f6f", fontWeight: "400", lineHeight: "26px", m: "15px 0 12px 0",textAlign:{lg:"start", md:"start", sm:"start", xs:"center"} }}>
                                    Copyright ©2023 All rights reserved | This template is made with <FaHeart />  by <Link sx={{ textDecoration: "none", cursor: "pointer", "&:hover": { color: "white" } }}>Colorlib</Link>
                                </Typography>

                            </Grid>
                            <Grid item lg={6} md={4} sm={12} xs={12}>
                                <Typography sx={{ m: "15px 0 15px 0" , display:"flex", justifyContent:{lg:"right", md:"right", sm:"right", xs:"center"}}}>
                                    <img src={rasm} alt="" />
                                </Typography>

                            </Grid>
                        </Grid>
                    </Box>

                </Container>
            </Box>

        </Box>
    )
}

export default Futter