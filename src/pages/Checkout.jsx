import React from 'react'
import { CustomContainer } from '../components'
import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Stack } from '@mui/system'
import { Link } from 'react-router-dom';
import {CheckoutProduct} from '../components'

const Checkout = () => {
    const theme = useTheme();
    const checkoutPTextStyles ={
        pName:{
            color:'dark.main',
            fontSize:'16px',
            fontWeight:'500'
        },
        pDetails:{
            color:'typeLowEmphasis.main',
            fontSize:'16px',
            fontWeight:'400'
        },
        pQuantity:{
            color:'typeLowEmphasis.main',
            fontSize:'16px',
            fontWeight:'400'
        }
    }
  return (
    <CustomContainer>
        <Typography variant='h1' fontSize={['15px','34px']} fontWeight='600' color='primary.main' mb={[5,3]}>
            Checkout
        </Typography>
        <Stack mb={5} direction={['column','row']} justifyContent={['normal','space-between']}>
            <Box width={['100%','710px']}>
                <Accordion sx={{mb:[2,5], boxShadow:'none'}}>
                    <AccordionSummary  sx={{borderBottom:'1px solid #0000001F', '&& .MuiButtonBase-root-MuiAccordionSummary-root':{p:0}, '&& .MuiAccordionSummary-content':{margin:0}, m:['0 0 18px 0','0 0 37px 0'], p:0}} expandIcon={<ExpandMoreIcon sx={{color:theme.palette.dark.main , fontSize:['20px','35px']}} />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant='h2' fontSize={['15px','20px']} fontWeight='600' textTransform='capitalize' >
                            add new address
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form action="" style={{width:'100%'}}>
                            <Stack direction='column' gap={[2,3]} width='100%'>
                                <Stack direction='row'>
                                    <TextField type='text' name='First Name' label='First Name' placeholder='Enter First Name' sx={{width:['50%','287px'], mr:['5%','31px'], '&& .MuiFilledInput-underline:before':{borderBottom:0}}} variant="filled" />
                                    <TextField type='text' name='Last Name' label='Last Name' placeholder='Enter Last Name' sx={{width:['45%','391px'], '&& .MuiFilledInput-underline:before':{borderBottom:0}}} variant="filled" />
                                </Stack>
                                <Stack direction='row'>
                                    <TextField type='email' name='Email' label='Email' placeholder='Enter Email' sx={{width:['50%','287px'], mr:['5%','31px'], '&& .MuiFilledInput-underline:before':{borderBottom:0}}} variant="filled" />
                                    <TextField type='number' name='Mobile Number' placeholder='+11' sx={{width:['18%','80px'], mr:['2%',1], '&& .MuiFilledInput-underline:before':{borderBottom:0}}} variant="filled" />
                                    <TextField type='number' name='Mobile Number' label='Mobile Number' placeholder='Enter Number' sx={{width:['25%','304px'], '&& .MuiFilledInput-underline:before':{borderBottom:0}}} variant="filled" />
                                </Stack>
                                <Stack direction='row'>
                                    <TextField type='text' name='Location' label='Address' placeholder='Enter Address' sx={{width:"100%", '&& .MuiFilledInput-underline:before':{borderBottom:0}}} variant="filled" />
                                </Stack>
                            </Stack>
                        </form>
                    </AccordionDetails>
                </Accordion>
                <Stack display={['none', 'flex']} direction='row' mb={[4,0]} justifyContent='space-between' alignItems='center' width='100%' >
                    <Link style={{fontSize:'14px', fontWeight:'600'}} to='/'>
                        Back to cart
                    </Link>
                    <Button sx={{bgcolor:'primary.main', '&:hover':{bgcolor:'#3485b3'}}}>
                        <Typography variant='body1' color='white' textTransform='none' fontSize={['14px','16px']}>
                            Place your order
                        </Typography>
                    </Button>
                </Stack>
            </Box>
            <Stack direction='column' mb={[4,0]} gap={[3,4]} width={['100%','412px']}>
                <Box height={['fit-content','48px']}  borderBottom='1px solid #0000001F'>
                    <Typography mb={1} variant='h2' fontWeight='600' fontSize={['15px','20px']} color='dark.main'>
                        Order Summary
                    </Typography>
                </Box>
                <Stack direction='column' gap={3} mb={[0,'17px']}>
                    <CheckoutProduct src={'https://images2.imgbox.com/10/33/1ecsOzts_o.png'} styles={checkoutPTextStyles} pName={'Coach'} pDetails={'Leather Coach Bag'} pQuantity={"QTy-1"} />
                    <CheckoutProduct src={'https://images2.imgbox.com/10/33/1ecsOzts_o.png'} styles={checkoutPTextStyles} pName={'Coach'} pDetails={'Leather Coach Bag'} pQuantity={"QTy-1"} />
                </Stack>
                <Box borderBottom='1px solid #0000001F'>
                    <Typography mb={1} variant='h2' fontWeight='600' fontSize='20px' color='dark.main'>
                        Order Details
                    </Typography>
                </Box>
                <Stack direction='column' gap='12px' width='100%' >
                    <Stack direction='row' justifyContent='space-between' >
                        <Typography fontSize='16px' fontWeight='500' color='typeLowEmphasis.main' >Sub Total</Typography>
                        <Typography fontSize='16px' fontWeight='500' color='typeHighEmphasis.main' >$119.69</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' >
                        <Typography fontSize='16px' fontWeight='500' color='typeLowEmphasis.main' >Discount</Typography>
                        <Typography fontSize='16px' fontWeight='500' color='typeHighEmphasis.main' >-$13.40</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' >
                        <Typography fontSize='16px' fontWeight='500' color='typeLowEmphasis.main' >Delivery Fee</Typography>
                        <Typography fontSize='16px' fontWeight='500' color='typeHighEmphasis.main' >-$0.00</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' >
                        <Typography fontSize='16px' fontWeight='600' color='typeHighEmphasis.main' >Grand Total</Typography>
                        <Typography fontSize='16px' fontWeight='600' color='typeHighEmphasis.main' >$106.29</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack display={['flex', 'none']} direction='row' justifyContent='space-between' alignItems='center' width='100%' >
                    <Link style={{fontSize:'14px', fontWeight:'600'}} to='/'>
                        Back to cart
                    </Link>
                    <Button sx={{bgcolor:'primary.main', '&:hover':{bgcolor:'#3485b3'}}}>
                        <Typography variant='body1' color='white' textTransform='none' fontSize={['14px','16px']}>
                            Place your order
                        </Typography>
                    </Button>
                </Stack>
        </Stack>
    </CustomContainer>
  )
}

export default Checkout