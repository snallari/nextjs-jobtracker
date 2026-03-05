"use client"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {useState } from 'react';
import UploadFileComponent from './UploadFileComponent'

const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    }
];



export default function HorizontalLinearAlternativeLabelStepper() {
    const [activeStep,setActiveStep]=useState(0)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Box sx={{ width: '100%', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
            <Stepper activeStep={0} alternativeLabel>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                
                {
                    activeStep==0?
                    <UploadFileComponent description={steps[activeStep].description} />:
                    activeStep==1?
                    <Typography>{steps[activeStep].description}</Typography>:

                    <Typography>{steps[activeStep].description}</Typography>
                }
                <Button onClick={handleBack} disabled={activeStep === 0}>
                    Back
                </Button>
                {activeStep === steps.length - 1 ? (
                    <Button onClick={handleReset}>Reset</Button>
                ) : (
                    <Button onClick={handleNext}>Next</Button>
                )}
            </Box>
        </Box>
    );
}