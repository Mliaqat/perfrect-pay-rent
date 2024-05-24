import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { COLORS } from '../../../utils/constants';
import GradientButton from '../../../components/form/button/GradientButton';
import { useNavigate } from 'react-router-dom';
import SimpleTextField from '../../../components/form/Textfield/SimpleTextFIeld';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { EnterOTP } from './EnterOTP';
import { EnterNewPassword } from './EnterNewPassword';

export default function EnterEmail() {
    const navigate = useNavigate();

    const [showComp, setShowComp] = useState('email');

    return (
        <Grid container sx={{ padding: '3rem' }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h4" fontWeight={'bold'} color={COLORS.primary}>
                    Forgot your password?
                </Typography>
                <Typography variant="h6" color={COLORS.primary} sx={{ mt: 1 }}>
                    Enter your email address below
                </Typography>

                <Divider sx={{ bgcolor: COLORS.primary }} />

                {showComp === 'email' ? (
                    <EmailForm setShowComp={setShowComp} />
                ) : showComp === 'otp' ? (
                    <EnterOTP setShowComp={setShowComp} />
                ) : showComp === 'newPassword' ? (
                    <EnterNewPassword />
                ) : (
                    <></>
                )}
            </Grid>
        </Grid>
    );
}

const EmailForm = ({ setShowComp }) => {
    const FORM_VALIDATION = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required')
    });

    const handleSubmit = (values) => {
        setShowComp('otp');
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
                            Enter your email
                        </Typography>
                        <SimpleTextField name="email" />
                    </Box>
                </Grid>

                <Grid item lg={12}>
                    <Divider sx={{ bgcolor: COLORS.primary, my: 1, mb: 2 }} />

                    <GradientButton type="submit" label="Submit" />
                </Grid>
            </Form>
        </Formik>
    );
};
