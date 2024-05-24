import { Box, Checkbox, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { COLORS } from '../../../utils/constants';
import GradientButton from '../../../components/form/button/GradientButton';
import { useNavigate } from 'react-router-dom';
import SimpleTextField from '../../../components/form/Textfield/SimpleTextFIeld';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
    const navigate = useNavigate();

    const [isRememberMe, setIsRememberMe] = useState(false);

    const FORM_VALIDATION = Yup.object().shape({
        email_username: Yup.string().trim().required('Required'),
        password: Yup.string().trim().required('Required')
    });

    return (
        <Formik
            initialValues={{
                email_username: '',
                password: ''
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { resetForm }) => console.log(values)}
        >
            <Form>
                <Grid container sx={{ padding: '3rem' }}>
                    <Grid item lg={12} md={12} xs={12} sm={12}>
                        <Typography variant="h4" fontWeight={'bold'} color={COLORS.primary}>
                            Log in
                        </Typography>
                        <Typography variant="h6" color={COLORS.primary} sx={{ mt: 1 }}>
                            Enter your log in credentials below
                        </Typography>

                        <Divider sx={{ bgcolor: COLORS.primary }} />
                    </Grid>

                    <Grid item lg={4} sm={6} xs={12} sx={{ mt: 4 }}>
                        <Box>
                            <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                Enter your email or username
                            </Typography>
                            <SimpleTextField name={'email_username'} />
                        </Box>

                        <Box sx={{ my: 2 }}>
                            <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                Enter your password
                            </Typography>
                            <SimpleTextField name={'password'} />
                        </Box>

                        <FormControlLabel
                            control={
                                <Checkbox size="medium" checked={isRememberMe} onChange={(e) => setIsRememberMe(e?.target?.checked)} />
                            }
                            label={'Remember me'}
                        />
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Divider sx={{ bgcolor: COLORS.primary, my: 1, mb: 2 }} />

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <GradientButton type="submit" label="Log in" />

                            <Typography
                                onClick={() => navigate('/forgot-password')}
                                sx={{
                                    ml: 2,
                                    transition: '0.4s',
                                    '&:hover': { borderBottom: '1px solid', cursor: 'pointer', transition: '0.4s' }
                                }}
                            >
                                Forget your password?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
}
