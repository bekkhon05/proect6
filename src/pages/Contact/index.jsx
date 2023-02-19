import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import { ConTactMap } from '../../assents/contact/cont';
import "./style.css"
import { fontSize } from '@mui/system';

function Contact() {
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
                                Contact Us
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
                                <span style={{ fontSize: "16px", color: "#ffffff", }}>Contact Us</span>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingTop: "80px", paddingBottom: "50px" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={9.8} md={11} sm={11} xl={7.3}>
                        <Box>
                            <Grid container spacing={3}>
                                {ConTactMap.map((val, v) => (
                                    <Grid key={v} item xs={12} lg={3} md={3} sm={3} xl={3}>
                                        <Box sx={{ marginBottom: "30px", textAlign: "center" }}>
                                            <span style={{ fontSize: "36px", color: "#7fad39" }}>{val.icon}</span>
                                            <Typography variant='h4' sx={{
                                                color: "#1c1c1c",
                                                fontWeight: 700,
                                                marginBottom: "6px",
                                                marginTop: "18px",
                                            }}>
                                                {val.name}
                                            </Typography>
                                            <Typography sx={{
                                                color: "#666666",
                                                fontSize: "16px",
                                                lineHeight: "26px"
                                            }}>
                                                {val.text}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: "100%", marginBottom: "30px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                    width="100%" height="500" style={{ border: 0 }} allowfullscreen=""
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
            <Box sx={{ paddingTop: "80px", paddingBottom: "80px" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={9.8} md={11} sm={11} xl={7.3}>
                        <Box>
                            <Typography sx={{ marginBottom: "50px", textAlign: "center" }}>
                                <Typography variant='h2' sx={{ color: "#1c1c1c", fontWeight: "800", fontSize: "34px" }}>
                                    Leave Message
                                </Typography>
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={6} md={6} sm={6} xl={6}>
                                    <input type="text" placeholder="Your name" className='conin' />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6} sm={6} xl={6}>
                                    <input type="text" placeholder="Your Email" className='conin' />
                                </Grid>
                                <Grid item xs={12} lg={12} md={12} sm={12} xl={12} sx={{ textAlign: "center" }}>
                                    <textarea placeholder="Your message" className='cont'></textarea>
                                    <button type="submit" style={{
                                        fontSize: " 18px",
                                        letterSpacing: "2px",
                                        color: "#ffffff",
                                        fontWeight: 800,
                                        textTransform: "uppercase",
                                        display: "inline-block",
                                        padding: "13px 30px 12px",
                                        background: "#7fad39",
                                        border: "none",
                                    }}>SEND MESSAGE</button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Contact