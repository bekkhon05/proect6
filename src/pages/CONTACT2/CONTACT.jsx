import { Box, Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { CiClock2 } from "react-icons/ci";
import './CONTACT.css';

function CONTACT() {
    return (
        <Box>
            <Box id='shopboshrasm1'>
                <Box>
                    <Typography id='shopboshrasm2'>
                        Contact Us
                    </Typography>
                    <Box id='shopboshrasm3'>
                        <Link to='/' id='shopboshrasm4'>
                            Home
                            <FaLongArrowAltRight />
                        </Link>
                        <Typography id='shopboshrasm5'>
                            Contact Us
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Container>
                    <Box sx={{
                        display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' },
                        padding: '80px 0 50px 0',
                        justifyContent: 'space-around'
                    }}>
                        <Box sx={{
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}>
                            <Typography sx={{
                                fontSize: '36px',
                                color: '#7fad39'
                            }}>
                                <FaPhoneAlt />
                            </Typography>
                            <Typography sx={{
                                fontSize: '24px',
                                color: '#1c1c1c',
                                fontWeight: '700',
                                marginBottom: '6px',
                                marginTop: '18px'
                            }}>
                                Phone
                            </Typography>
                            <Typography sx={{
                                color: '#666666',
                                fontSize: '16px',
                                fontFamily: '"Cairo", sans-serif',
                                fontWeight: '400',
                                lineHeight: '26px'
                            }}>
                                +01-3-8888-6868
                            </Typography>
                        </Box>
                        <Box sx={{
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}>
                            <Typography sx={{
                                fontSize: '36px',
                                color: '#7fad39'
                            }}>
                                <TfiLocationPin />
                            </Typography>
                            <Typography sx={{
                                fontSize: '24px',
                                color: '#1c1c1c',
                                fontWeight: '700',
                                marginBottom: '6px',
                                marginTop: '18px'
                            }}>
                                Address
                            </Typography>
                            <Typography sx={{
                                color: '#666666',
                                fontSize: '16px',
                                fontFamily: '"Cairo", sans-serif',
                                fontWeight: '400',
                                lineHeight: '26px'
                            }}>
                                60-49 Road 11378 New York
                            </Typography>
                        </Box>
                        <Box sx={{
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}>
                            <Typography sx={{
                                fontSize: '36px',
                                color: '#7fad39'
                            }}>
                                <CiClock2 />
                            </Typography>
                            <Typography sx={{
                                fontSize: '24px',
                                color: '#1c1c1c',
                                fontWeight: '700',
                                marginBottom: '6px',
                                marginTop: '18px'
                            }}>
                                Open time
                            </Typography>
                            <Typography sx={{
                                color: '#666666',
                                fontSize: '16px',
                                fontFamily: '"Cairo", sans-serif',
                                fontWeight: '400',
                                lineHeight: '26px'
                            }}>
                                10:00 am to 23:00 pm
                            </Typography>
                        </Box>
                        <Box sx={{
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}>
                            <Typography sx={{
                                fontSize: '36px',
                                color: '#7fad39'
                            }}>
                                <TfiEmail />
                            </Typography>
                            <Typography sx={{
                                fontSize: '24px',
                                color: '#1c1c1c',
                                fontWeight: '700',
                                marginBottom: '6px',
                                marginTop: '18px'
                            }}>
                                Email
                            </Typography>
                            <Typography sx={{
                                color: '#666666',
                                fontSize: '16px',
                                fontFamily: '"Cairo", sans-serif',
                                fontWeight: '400',
                                lineHeight: '26px'
                            }}>
                                hello@colorlib.com
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box >
            <Box>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47955.529859584916!2d69.26172159999999!3d41.304064000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1665154251123!5m2!1sru!2s"
                    width="100%" height="450" style={{ border: 0 }} allowfullscreen=""
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
            <Box sx={{
                padding: '80px 0',
                background: '#fff'
            }}>
                <Typography sx={{
                    color: '#1c1c1c',
                    fontWeight: '700',
                    fontSize: '36px',
                    textAlign: 'center',
                    marginBottom: '50px'
                }}>
                    Leave Message
                </Typography>
                <Box>
                    <Container>
                        <Box>
                            <Box id="ContInp5">
                                <Box sx={{ width: '100%' }}>
                                    <input type="text" placeholder='Your neme' id='ContInp1' />
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <input type="text" placeholder='Your Email' id='ContInp2' />
                                </Box>
                            </Box>
                            <Box>
                                <Box>
                                    <textarea name="" id="ContInp3" placeholder='Your message'></textarea>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Link href='#' id="ContInp4">
                                        SEND MESSAGE
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box >
    )
}
export default CONTACT;