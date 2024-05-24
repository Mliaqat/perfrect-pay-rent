import { Box, Divider, FormControl, Grid, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { COLORS } from '../../../../utils/constants';
import SimpleTextField from '../../../../components/form/Textfield/SimpleTextFIeld';
import { Form, Formik } from 'formik';
import isEmpty from '../../../../utils/helpers';
import * as Yup from 'yup';
import GradientButton from '../../../../components/form/button/GradientButton';
import SelectWrapper from '../../../../components/form/Select';

export default function TenantPreApproval({ submitTenantForm, tenant, goBack }) {
    const [isGurantor, setIsGurantor] = useState(tenant?.isGurantor || false);
    const [isPreviousLandlord, setIsPreviousLandlord] = useState(tenant?.isPreviousLandlord || false);

    const [identificationType, setIdentificationType] = useState(tenant?.identificationType || '');
    const [identificationValue, setIdentificationValue] = useState(tenant?.identificationValue || '');

    const typeOfIdent = [
        { title: 'Passport', inputFieldTitle: 'Passport ID' },
        { title: 'Driving License', inputFieldTitle: 'Driver’s license number' }
    ];

    let GURANTOR_VALIDATION = {
        gurantorFirstName: Yup.string().trim().required('Required'),
        gurantorLastName: Yup.string().trim().required('Required'),
        gurantorEmail: Yup.string().email('Invalid email').required('Required'),
        gurantorPhoneNo: Yup.number().typeError('Phone number must be a number').required('Required'),
        employment: Yup.string().trim().required('Required'),
        employmentContact: Yup.number().typeError('Phone number must be a number').required('Required'),
        employmentContactEmail: Yup.string().email('Invalid email').required('Required'),
        employmentContactPhoneNo: Yup.number().typeError('Phone number must be a number').required('Required'),
        lendthOfEmployment: Yup.date().required('Required'),
        annualHouseHoldIncome: Yup.number().typeError('Phone number must be a number').required('Required')
    };

    let PRE_LANLORD_VALIDATION = {
        landlordName: Yup.string().trim().required('Required'),
        isCurrentlyLanlord: Yup.string().trim().required('Required'),
        landlordEmail: Yup.string().email('Invalid email').required('Required'),
        landlordPhoneNo: Yup.number().typeError('Phone number must be a number').required('Required')
    };

    return (
        <Formik
            initialValues={
                tenant || {
                    gurantorFirstName: '',
                    gurantorLastName: '',
                    gurantorEmail: '',
                    gurantorPhoneNo: '',
                    employment: '',
                    employmentContact: '',
                    employmentContactEmail: '',
                    employmentContactPhoneNo: '',
                    lendthOfEmployment: '',
                    annualHouseHoldIncome: '',
                    isCurrentlyLanlord: '',
                    landlordName: '',
                    landlordEmail: '',
                    landlordPhoneNo: ''
                }
            }
            validationSchema={Yup.object().shape({
                ...(!!isGurantor ? GURANTOR_VALIDATION : {}),
                ...(!!isPreviousLandlord ? PRE_LANLORD_VALIDATION : {})
            })}
            onSubmit={(values, { resetForm }) => submitTenantForm({...values, identificationType, identificationValue})}
        >
            <Form>
                <Grid container>
                    <Grid item container spacing={2}>
                        <Grid item lg={2}>
                            <Typography variant="subtitle2">Identification*</Typography>
                        </Grid>

                        <Grid item container spacing={2} lg={7}>
                            <Grid item lg={6} sm={6} xs={12}>
                                <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                    Type of identification
                                </Typography>

                                <FormControl fullWidth size="small">
                                    <Select
                                        sx={{ fontSize: 16 }}
                                        value={identificationType}
                                        onChange={(e) => setIdentificationType(e?.target?.value)}
                                        labelId="identfication-type-label"
                                        id="identfication-type"
                                    >
                                        {typeOfIdent?.map((item) => (
                                            <MenuItem key={item?.title} value={item?.title}>
                                                {item?.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item lg={6} sm={6} xs={12}>
                                {!isEmpty(identificationType) && (
                                    <>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            {typeOfIdent?.find((i) => i?.title == identificationType)?.inputFieldTitle}
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            value={identificationValue}
                                            onChange={(e) => setIdentificationValue(e?.target?.value)}
                                        />
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={12} sm={12} xs={12}>
                        <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />
                    </Grid>

                    <Grid item container spacing={2}>
                        <Grid item lg={2}>
                            <Typography variant="subtitle2">Rental Information</Typography>
                        </Grid>

                        <Grid item container spacing={2} lg={7}>
                            <Grid item lg={6} sm={6} xs={12}>
                                <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                    Do you require a Guarantor
                                </Typography>

                                <FormControl fullWidth size="small">
                                    <Select value={isGurantor} onChange={(e) => setIsGurantor(e?.target?.value)}>
                                        <MenuItem value={true}>Yes</MenuItem>
                                        <MenuItem value={false}>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item lg={6} sm={6} xs={12}>
                                <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                    Do you have a previous landlord
                                </Typography>

                                <FormControl fullWidth size="small">
                                    <Select value={isPreviousLandlord} onChange={(e) => setIsPreviousLandlord(e?.target?.value)}>
                                        <MenuItem value={true}>Yes</MenuItem>
                                        <MenuItem value={false}>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>

                    {isGurantor && (
                        <>
                            <Grid item lg={12} sm={12} xs={12}>
                                <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />
                            </Grid>

                            <Grid item container spacing={2}>
                                <Grid item lg={2}>
                                    <Typography variant="subtitle2">Guarantor’s Information</Typography>
                                </Grid>

                                <Grid item container spacing={2} lg={7}>
                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Guarantor’s first name
                                        </Typography>
                                        <SimpleTextField name="gurantorFirstName" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Guarantor’s last name
                                        </Typography>
                                        <SimpleTextField name="gurantorLastName" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Guarantor’s email address
                                        </Typography>
                                        <SimpleTextField name="gurantorEmail" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Guarantor’s phone number
                                        </Typography>
                                        <SimpleTextField name="gurantorPhoneNo" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Employment
                                        </Typography>
                                        <SimpleTextField name="employment" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Employment contact
                                        </Typography>
                                        <SimpleTextField name="employmentContact" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Employment contact email
                                        </Typography>
                                        <SimpleTextField name="employmentContactEmail" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Employment contact phone number
                                        </Typography>
                                        <SimpleTextField name="employmentContactPhoneNo" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Length of employment (date started)
                                        </Typography>
                                        <SimpleTextField type="date" name="lendthOfEmployment" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Guarantor’s annual household income
                                        </Typography>
                                        <SimpleTextField placeholder="$" name="annualHouseHoldIncome" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    )}

                    {isPreviousLandlord && (
                        <>
                            <Grid item lg={12} sm={12} xs={12}>
                                <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />
                            </Grid>

                            <Grid item container spacing={2}>
                                <Grid item lg={2}>
                                    <Typography variant="subtitle2">Previous Landlord</Typography>
                                </Grid>

                                <Grid item container spacing={2} lg={7}>
                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Are they currently your landlord?
                                        </Typography>
                                        <SelectWrapper name="isCurrentlyLanlord" options={['Yes', 'No']} />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Landlord’s name
                                        </Typography>
                                        <SimpleTextField name="landlordName" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Landlord’s email
                                        </Typography>
                                        <SimpleTextField name="landlordEmail" />
                                    </Grid>

                                    <Grid item lg={6} sm={6} xs={12}>
                                        <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightBlack}>
                                            Landlord’s phone number
                                        </Typography>
                                        <SimpleTextField name="landlordPhoneNo" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    )}

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
