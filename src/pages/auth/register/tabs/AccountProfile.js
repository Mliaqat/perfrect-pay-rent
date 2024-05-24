import { Box, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../../utils/constants';
import SimpleTextField from '../../../../components/form/Textfield/SimpleTextFIeld';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import GradientButton from '../../../../components/form/button/GradientButton';

const AccountProfile = ({ submitProfileForm, accountProfile }) => {
    const FORM_VALIDATION = Yup.object().shape({
        username: Yup.string().required('Required'),
        dateOfBirth: Yup.date().required('Required'),
        firstName: Yup.string().trim().required('Required'),
        lastName: Yup.string().required('Required'),
        emailAddress: Yup.string().email('Invalid email').required('Required'),
        phoneNumber: Yup.number().typeError('Phone number must be a number').required('Required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
    });

    return (
        <Formik
            initialValues={
                accountProfile || {
                    username: '',
                    dateOfBirth: '',
                    firstName: '',
                    lastName: '',
                    emailAddress: '',
                    phoneNumber: '',
                    password: '',
                    confirmPassword: ''
                }
            }
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { resetForm }) => submitProfileForm(values)}
        >
            <Form>
                <Grid container spacing={2}>
                    <Grid item lg={2} xs={12}>
                        <Typography variant="subtitle2">Personal Information</Typography>
                    </Grid>

                    <Grid item container spacing={2} lg={7} sm={12}>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Typography fontSize={'14px'} color={COLORS.lightBlack}>
                                Username
                            </Typography>
                            <SimpleTextField name="username" />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Typography fontSize={'14px'} color={COLORS.lightBlack}>
                                Date of birth
                            </Typography>
                            <SimpleTextField type="date" name={'dateOfBirth'} />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Typography fontSize={'14px'} color={COLORS.lightBlack}>
                                First name
                            </Typography>
                            <SimpleTextField name={'firstName'} />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Typography fontSize={'14px'} color={COLORS.lightBlack}>
                                Last name
                            </Typography>
                            <SimpleTextField name={'lastName'} />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Typography fontSize={'14px'} color={COLORS.lightBlack}>
                                Email address
                            </Typography>
                            <SimpleTextField name={'emailAddress'} />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Typography fontSize={'14px'} color={COLORS.lightBlack}>
                                Phone number
                            </Typography>
                            <SimpleTextField name={'phoneNumber'} />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Typography fontSize={'14px'} color={COLORS.lightBlack}>
                                Password
                            </Typography>
                            <SimpleTextField name={'password'} />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Typography fontSize={'14px'} color={COLORS.lightBlack}>
                                Confirm password
                            </Typography>
                            <SimpleTextField name={'confirmPassword'} />
                        </Grid>
                    </Grid>

                    <Grid item lg={12} xs={12}>
                        <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <GradientButton type="submit" label="Continue" />
                        </Box>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
};

export default AccountProfile;
