import { Box, Container, Grid } from '@mui/material'
import React from 'react'
// import banner from "../../RASM/banner.jpg.webp"
import "./style.css"
function Home() {
    return (
        <Box>
            <Box>
                <Container>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item lg={3} md={3} sm={12}>
                            </Grid>
                            <Grid item lg={9} md={9} sm={12}>
                                <Box id="sall">
                                    {/* <img src={banner} alt="" style={{ width: "100%" }} /> */}
                                    
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Home