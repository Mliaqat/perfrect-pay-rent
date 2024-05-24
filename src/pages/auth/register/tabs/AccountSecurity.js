import { Box, Divider, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../../utils/constants';
import SelectWrapper from '../../../../components/form/Select';
import { Form, Formik } from 'formik';
import SimpleTextField from '../../../../components/form/Textfield/SimpleTextFIeld';
import GradientButton from '../../../../components/form/button/GradientButton';
import * as Yup from 'yup';

export default function AccountSecurity({ submitSecurityForm, accountSecurity, goBack }) {
    let questions = [
        { id: 1, title: 'Color of your first car?' },
        { id: 2, title: 'First car you drive?' },
        { id: 3, title: 'Your best friend name?' },
        { id: 4, title: 'Your Favorite Subject?' }
    ];

    const FORM_VALIDATION = Yup.object().shape({
        question1: Yup.string().trim().required('Required'),
        question2: Yup.string().trim().required('Required'),
        question3: Yup.string().trim().required('Required'),
        answer1: Yup.string().trim().required('Required'),
        answer2: Yup.string().trim().required('Required'),
        answer3: Yup.string().trim().required('Required')
    });

    return (
        <Formik
            initialValues={
                accountSecurity || {
                    answer1: '',
                    answer2: '',
                    answer3: '',
                    question1: '',
                    question2: '',
                    question3: ''
                }
            }
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { resetForm }) => submitSecurityForm(values)}
        >
            <Form>
                <Grid container spacing={2}>
                    <Grid item lg={2}>
                        <Typography variant="subtitle2">Security Questions</Typography>
                    </Grid>

                    <Grid item container spacing={2} lg={7}>
                        <Grid item lg={6}>
                            <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                Question one
                            </Typography>

                            <SelectWrapper defaultValue="" name="question1" options={questions} />
                        </Grid>

                        <Grid item lg={6}>
                            <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                Answer
                            </Typography>
                            <SimpleTextField name="answer1" />
                        </Grid>

                        <Grid item lg={6}>
                            <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                Question two
                            </Typography>

                            <SelectWrapper defaultValue="" name="question2" options={questions} />
                        </Grid>

                        <Grid item lg={6}>
                            <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                Answer
                            </Typography>
                            <SimpleTextField name="answer2" />
                        </Grid>

                        <Grid item lg={6}>
                            <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                Question three
                            </Typography>

                            <SelectWrapper defaultValue="" name="question3" options={questions} />
                        </Grid>

                        <Grid item lg={6}>
                            <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                Answer
                            </Typography>
                            <SimpleTextField name="answer3" />
                        </Grid>
                    </Grid>

                    <Grid item lg={12} sm={12} xs={12}>
                        <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <GradientButton type="submit" label="Continue" />

                            <Typography
                                onClick={goBack}
                                sx={{
                                    ml: 2,
                                    transition: '0.4s',
                                    '&:hover': { borderBottom: '1px solid', cursor: 'pointer', transition: '0.4s' }
                                }}
                            >
                                Go back
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
}
