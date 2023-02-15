import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import { BlogCate, BlogRec, BlogSeach, BlogTh, BlogIc, BlogPost } from "../../../assents/pageslarmep/blog";
import blonik from "../img/details-author.jpg"
import { FaCalendar, FaComment } from 'react-icons/fa';

import "./style.css"


function Blog() {
    return (
        <>
            <Box className='detalis_name'>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                        <Box sx={{ textAlign: "center", padding: "80px" }}>
                            <Typography variant='h2' sx={{
                                fontSize: "46px",
                                color: "#ffffff",
                                fontWeight: 700,
                            }}>
                                The Moment You Need To Remove Garlic From The Menu
                            </Typography>
                            <Box sx={{ marginTop: "10px" }}>
                                <Link style={{
                                    display: "inline-block",
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    fontWeight: "600",
                                    marginRight: "45px",
                                    position: "relative",
                                    textDecoration: "none"

                                }}>
                                    By Michael Scofield
                                    <Typography sx={{
                                        position: "absolute",
                                        right: "-26px",
                                        top: "0px",
                                    }}>|</Typography>
                                </Link>
                                <Link style={{
                                    display: "inline-block",
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    fontWeight: "600",
                                    marginRight: "45px",
                                    position: "relative",
                                    textDecoration: "none"

                                }}>
                                    January 14, 2019
                                    <Typography sx={{
                                        position: "absolute",
                                        right: "-26px",
                                        top: "0px",
                                    }}>|</Typography>
                                </Link>
                                <Link style={{
                                    display: "inline-block",
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    fontWeight: "600",
                                    marginRight: "45px",
                                    position: "relative",
                                    textDecoration: "none"

                                }}>
                                    8 Comments
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingTop: "100px", paddingBottom: "80px", borderBottom: "1px solid #e1e1e1" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={9.8} md={11} sm={11} xl={7.2}>
                        <Grid container spacing={3.4}>
                            <Grid item xs={12} lg={4} md={4} sm={5} xl={4}>
                                <Box sx={{ paddingTop: "50px" }}>
                                    <Box sx={{ paddingBottom: "50px" }}>
                                        <Typography sx={{ position: "relative" }}>
                                            <input type="text" placeholder="Search..." style={{
                                                width: "100%",
                                                height: "46px",
                                                fontSize: "16px",
                                                color: "#6f6f6f",
                                                paddingLeft: "15px",
                                                border: "1px solid #e1e1e1",
                                                borderRadius: "20px",
                                            }} />
                                            <button type="submit" style={{
                                                fontSize: "16px",
                                                color: "#6f6f6f",
                                                background: "transparent",
                                                border: "none",
                                                position: "absolute",
                                                right: "0",
                                                top: "0",
                                                height: "100%",
                                                padding: "0px 18px",
                                            }}
                                            ><span class="icon_search"><VscSearch /></span></button>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ paddingBottom: "50px" }}>
                                        <Typography variant="h4" sx={{
                                            color: "#1c1c1c",
                                            fontWeight: 700,
                                            marginBottom: "25px",
                                            fontSize: "24px"
                                        }}>
                                            Categories
                                        </Typography>
                                        {BlogCate.map((val, v) => (
                                            <Typography key={v}>
                                                <Link hrefLang="#" style={{
                                                    fontSize: "16px",
                                                    color: "#666666",
                                                    lineHeight: "48px",
                                                    textDecoration: "none"
                                                }}>
                                                    {val.text}
                                                </Link>
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Box sx={{ paddingBottom: "50px" }}>
                                        <Typography variant="h4" sx={{
                                            color: "#1c1c1c",
                                            fontWeight: 700,
                                            marginBottom: "25px",
                                            fontSize: "24px"
                                        }}>
                                            Recent News
                                        </Typography>
                                        {BlogRec.map((val, v) => (
                                            <Link key={v} hrefLang="#" style={{ textDecoration: "none", marginBottom: "20px", width: "100%", display: "block" }}>
                                                <Typography sx={{ float: "left", marginRight: "20px" }}>
                                                    <img src={val.imgg} alt="" style={{ maxWidth: "100%" }} />
                                                </Typography>
                                                <Typography>
                                                    <Typography variant="h4" sx={{
                                                        color: "#333333",
                                                        fontWeight: 700,
                                                        marginBottom: "5px",
                                                        fontSize: "16px",
                                                        lineHeight: "20px"
                                                    }}>
                                                        {val.name}
                                                        <br />
                                                        {val.b}
                                                    </Typography>
                                                    <span style={{
                                                        fontSize: "12px",
                                                        color: "#999999",
                                                        textTransform: "uppercase",
                                                    }}>{val.text}</span>
                                                </Typography>
                                            </Link>
                                        ))}
                                    </Box>
                                    <Box sx={{ paddingBottom: "50px" }}>
                                        <Typography variant="h4" sx={{
                                            color: "#1c1c1c",
                                            fontWeight: 700,
                                            marginBottom: "25px",
                                            fontSize: "24px"
                                        }}>
                                            Search By
                                        </Typography>
                                        {BlogSeach.map((val, v) => (
                                            <Link hrefLang="#" key={v} style={{
                                                fontSize: "16px",
                                                color: "#6f6f6f",
                                                background: "#f5f5f5",
                                                display: "inline-block",
                                                padding: "7px 26px 5px",
                                                marginRight: "6px",
                                                marginBottom: "10px",
                                                textDecoration: "none"
                                            }}>
                                                {val.name}
                                            </Link>
                                        ))}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={8} md={8} sm={7} xl={8}>
                                <Box sx={{ marginBottom: "45px" }}>
                                    {BlogTh.map((val, v) => (
                                        <Box key={v}>
                                            <img src={val.imgg} alt="" style={{ maxWidth: "100%" }} />
                                            <Typography sx={{
                                                fontSize: "18px",
                                                lineHeight: "30px",
                                                color: "#6f6f6f"
                                            }}>
                                                {val.text}
                                            </Typography>
                                            <Typography variant="h3" sx={{
                                                color: "#333333",
                                                fontWeight: 700,
                                                marginBottom: "1px",
                                                fontSize: "30px",
                                                lineHeight: "30px"
                                            }}>
                                                {val.name}
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "18px",
                                                lineHeight: "30px",
                                                color: "#6f6f6f"
                                            }}>
                                                {val.text2}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <Box sx={{ marginBottom: "45px" }}>
                                    <Grid container >
                                        <Grid item xs={12} lg={6} md={6} sm={12} xl={5.5}>
                                            <Box sx={{ marginBottom: "40px" }}>
                                                <Typography sx={{
                                                    float: "left",
                                                    marginRight: "15px",
                                                }}>
                                                    <img src={blonik} alt="" style={{
                                                        height: "92px",
                                                        width: "92px",
                                                        borderRadius: "50%"
                                                    }} />
                                                </Typography>
                                                <Typography sx={{ paddingTop: "30px" }}>
                                                    <Typography variant="h4" sx={{
                                                        color: "#333333",
                                                        fontWeight: 700,
                                                        marginBottom: "5px",
                                                        fontSize: "16px",
                                                        lineHeight: "20px"
                                                    }}>
                                                        Michael Scofield
                                                        <Typography style={{
                                                            fontSize: "16px",
                                                            color: "#6f6f6f",
                                                        }}>Admin</Typography>
                                                    </Typography>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} lg={6} md={6} sm={12} xl={6.5}>
                                            <Box>
                                                <Typography sx={{ marginBottom: "5px" }}>
                                                    <Typography sx={{
                                                        fntSize: "16px",
                                                        color: "#6f6f6f",
                                                        listStyle: "none",
                                                        lineHeight: "30px",
                                                    }}>
                                                        <span style={{
                                                            color: "#1c1c1c",
                                                            fontWeight: "700",
                                                        }}>Categories:</span>
                                                        Food
                                                    </Typography>
                                                    <Typography sx={{
                                                        fntSize: "16px",
                                                        color: "#6f6f6f",
                                                        listStyle: "none",
                                                        lineHeight: "30px",
                                                    }}>
                                                        <span style={{
                                                            color: "#1c1c1c",
                                                            fontWeight: "700",
                                                        }}>Tags:</span>
                                                        All, Trending, Cooking, Healthy Food, Life Style
                                                    </Typography>
                                                </Typography>

                                                <Box>
                                                    {BlogIc.map((val, v) => (
                                                        <Link key={v} style={{
                                                            display: "inline-block",
                                                            fontSize: "20px",
                                                            color: "#6f6f6f",
                                                            marginRight: "24px",
                                                            "&:hover": {
                                                                color: "#7fad39;"
                                                            }
                                                        }}>
                                                            {val.icon}
                                                        </Link>
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingTop: "70px", paddingBottom: "10px" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={9.8} md={11} sm={11} xl={7.2}>
                        <Box sx={{ paddingBottom: "30px" }}>
                            <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                    <Box sx={{ paddingBottom: "70px", textAlign: "center" }}>
                                        <Typography variant='h2' sx={{
                                            color: "#1c1c1c",
                                            fontWeight: "800",
                                            position: "relative",
                                            fontSize: "32px"
                                        }}>Post You May Like
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
                            <Grid container spacing={4}>
                                {BlogPost.map((val, v) => (
                                    <Grid key={v} item xs={12} lg={4} md={4} sm={4} xl={4}>
                                        <Box sx={{ marginBottom: "50px" }} className="de">
                                            <Box className="dee" sx={{
                                                height: "270px",
                                                position: "relative",
                                                overflow: "hidden",
                                                backgroundPosition: "top center"
                                            }}>
                                                <img src={val.imgg} alt="" style={{maxWidth:"100%"}} />
                                            </Box>
                                            <Box sx={{ marginTop: {xl:"25px",lg:"25px",md:"-30px",sm:"-90px",xs:"25px"} }}>
                                                <Typography sx={{marginBottom:"12px"}}>
                                                    <Typography sx={{
                                                        fontSize: "16px",
                                                        color: "#b2b2b2",
                                                        listStyle: "none",
                                                        display: "inline-block",
                                                        marginRight: "30px",
                                                    }}>
                                                        <span style={{ marginRight: "10px" }}><FaCalendar /></span>
                                                        May 4,2019
                                                    </Typography>
                                                    <Typography sx={{
                                                        fontSize: "16px",
                                                        color: "#b2b2b2",
                                                        listStyle: "none",
                                                        display: "inline-block",
                                                        marginRight: "15px",
                                                    }}>
                                                        <span style={{ marginRight: "10px" }}><FaComment /></span>
                                                        5
                                                    </Typography>
                                                </Typography>
                                                <Typography variant="h5" sx={{
                                                    color: "#1c1c1c",
                                                    fontWeight: 700,
                                                    marginBottom: "12px",
                                                    fontSize: "20px"
                                                }}>
                                                    {val.name}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: "16px",
                                                    lineHeight: "25px",
                                                    color: "#6f6f6f"
                                                }}>
                                                   Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat
                                                </Typography>

                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Blog