import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { COLORS } from '../../../utils/constants';
import GradientButton from '../../../components/form/button/GradientButton';
import SimpleTextField from '../../../components/form/Textfield/SimpleTextFIeld';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
export const EnterOTP = ({setShowComp}) => {
    const FORM_VALIDATION = Yup.object().shape({
        otpValue: Yup.number()
            .typeError('OTP must be a number')
            .integer('OTP must be an integer')
            .required('OTP is required')
            .min(100000, 'OTP must be at least 6 digits')
            .max(999999, 'OTP must be at most 6 digits')
            .required()
    });

    const handleSubmit = (values) => {
        setShowComp('newPassword');
    };

    return (
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { resetForm }) => handleSubmit(values)}
        >
            <Form>
                <Grid item lg={4} sx={{ mt: 4, mb: 2 }}>
                    <Box>
                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                            Enter your otp
                        </Typography>
                        <SimpleTextField name="otpValue" />
                    </Box>
                </Grid>

                <Grid item lg={12}>
                    <Divider sx={{ bgcolor: COLORS.primary, my: 1, mb: 2 }} />

                    <GradientButton loading={false} type="submit" label="Submit" />
                </Grid>
            </Form>
        </Formik>
    );
};
