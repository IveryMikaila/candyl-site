//React Imports
import React,{useState,useEffect} from 'react'
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from '@material-ui/core';

//Css Imports
import './styles.css';

//Components 
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

//API Imports
import { commerce } from '../../../lib/commerce';
import { Link } from 'react-router-dom';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
  const [activeStep, setActiveStep]= useState(0);
const [checkoutToken,setCheckoutToken] = useState(null);
const [shippingData, setShippingData]= useState({});

useEffect(() =>{
const generateToken =async () =>{
  try{
const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});
setCheckoutToken(token);
  } catch(error){

  }
}
generateToken();
},[cart]);

const nextStep = () => setActiveStep((prevActiveStep)=> prevActiveStep + 1);

const backStep = () => setActiveStep((prevActiveStep)=> prevActiveStep - 1);

const next = (data) =>{
setShippingData(data);
nextStep();
}

const Confirmation = () =>(
   <div className='checkoutConfirmation'>
   <div>Thank you for your purchase!</div>
   <br />
   <div>Check your email for order details...</div>
   <div className='backToHomeBtnContainer'>
   <Link className='backToHomeBtn' to={'/'}>
Back to Home
   </Link>
   </div>
   </div>
  
);

const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken}
nextStep={nextStep}
backStep={backStep} 
onCaptureCheckout={onCaptureCheckout}
/>

  return (
<>
<main className='checkoutPaper'>
  <Paper className='checkoutSection'>
    <Typography variant='h4' align='center' className='checkoutHeading'>Checkout</Typography>
    <Stepper activeStep={activeStep}>
{steps.map((step) =>(
  <Step key={step}>
    <StepLabel>{step}</StepLabel>
  </Step>
))}
    </Stepper>
    {activeStep === steps.length ?<Confirmation /> : checkoutToken &&<Form /> }
  </Paper>
</main>
</>
    )
}

export default Checkout;