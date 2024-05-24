import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { COLORS } from '../../../utils/constants';
import GradientButton from '../../../components/form/button/GradientButton';
import SimpleTextField from '../../../components/form/Textfield/SimpleTextFIeld';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
export const EnterNewPassword = ({ setShowComp }) => {
    const FORM_VALIDATION = Yup.object().shape({
        newPassword: Yup.string().min(8, 'Password must be at least 8 characters long').required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Required')
    });

    const handleSubmit = (values) => {
        console.log(values)
    };

    return (
        <Formik
            initialValues={{
                newPassword: '',
                confirmPassword: ''
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { resetForm }) => handleSubmit(values)}
        >
            <Form>
                <Grid item lg={4} md={6} sm={6} xs={12} sx={{ mt: 4, mb: 2 }}>
                    <Box>
                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                            New Password
                        </Typography>
                        <SimpleTextField name="newPassword" />
                    </Box>

                    <Box mt={2}>
                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                            Confirm New Password
                        </Typography>
                        <SimpleTextField name="confirmPassword" />
                    </Box>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Divider sx={{ bgcolor: COLORS.primary, my: 1, mb: 2 }} />

                    <GradientButton loading={false} type="submit" label="Submit" />
                </Grid>
            </Form>
        </Formik>
    );
};
