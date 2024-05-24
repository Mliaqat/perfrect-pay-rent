import { Box, Checkbox, Divider, FormControlLabel, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import GradientButton from '../../../../components/form/button/GradientButton';
import { COLORS } from '../../../../utils/constants';
import ReCAPTCHA from 'react-google-recaptcha';

export const Consents = ({ consents, submitConsentsForm, goBack }) => {
    const [isCreditCheck, setIsCreditCheck] = useState(consents?.isCreditCheck || false);
    const [isAgreeToTermsConditions, setIsAgreeToTermsConditions] = useState(consents?.isAgreeToTermsConditions || false);

    return (
        <Grid container>
            <Grid item container spacing={2}>
                <Grid item lg={2}>
                    <Typography variant="subtitle2">Acknowledgment</Typography>
                </Grid>

                <Grid item lg={7}>
                    <Box sx={styles.termsCondition}>
                        <Typography sx={{ fontSize: 11, fontWeight: 'bold' }}>Terms Summary</Typography>

                        <Typography sx={{ fontSize: 11 }}>1. I have read, understand and agree to the Terms and Conditions.</Typography>
                        <Typography sx={{ fontSize: 11 }}>
                            2. I understand that the first month’s rent deposit is non refundable.
                        </Typography>
                        <Typography sx={{ fontSize: 11 }}>
                            3. I understand that all pre-construction properties have a tentative timeline and the expected occupancy date
                            is subject to change.
                        </Typography>

                        <Typography sx={{ fontSize: 11, fontWeight: 'bold', mt: 1 }}>Terms and Conditions</Typography>

                        <Typography sx={{ fontSize: 11 }}>
                            Lorem ipsum dolor sit amet, est case nusquam eu, unum antiopam et mea. Porro rationibus cotidieque cum eu.
                            Omnium audiam id pro, ut appareat conceptam adversarium pri. Ex cum atqui accusata. Forensibus elaboraret est
                            an, erat falli dicam ut mea, eu cum fierent interesset. Et graeci tractatos ius, erant graece quo ad, no liber
                            oblique referrentur pro. Ea constituto assueverit sed. Duo cu dicit vocibus dignissim. Id omnium integre nec,
                            omnis augue consetetur per at. Mei ut rebum movet vituperata.
                        </Typography>

                        <Typography sx={{ fontSize: 11, mt: 1 }}>
                            Lorem ipsum dolor sit amet, est case nusquam eu, unum antiopam et mea. Porro rationibus cotidieque cum eu.
                            Omnium audiam id pro, ut appareat conceptam adversarium pri. Ex cum atqui accusata. Forensibus elaboraret est
                            an, erat falli dicam ut mea, eu cum fierent interesset. Et graeci tractatos ius, erant graece quo ad, no liber
                            oblique referrentur pro. Ea constituto assueverit sed. Duo cu dicit vocibus dignissim. Id omnium integre nec,
                            omnis augue consetetur per at. Mei ut rebum movet vituperata.
                        </Typography>

                        <Typography sx={{ fontSize: 11, mt: 1 }}>
                            Lorem ipsum dolor sit amet, est case nusquam eu, unum antiopam et mea. Porro rationibus cotidieque cum eu.
                            Omnium audiam id pro, ut appareat conceptam adversarium pri. Ex cum atqui accusata. Forensibus elaboraret est
                            an, erat falli dicam ut mea, eu cum fierent interesset. Et graeci tractatos ius, erant graece quo ad, no liber
                            oblique referrentur pro. Ea constituto assueverit sed. Duo cu dicit vocibus dignissim. Id omnium integre nec,
                            omnis augue consetetur per at. Mei ut rebum movet vituperata.
                        </Typography>
                    </Box>

                    <Box mt={1}>
                        <FormControlLabel
                            control={
                                <Checkbox size="small" checked={isCreditCheck} onChange={(e) => setIsCreditCheck(e?.target?.checked)} />
                            }
                            label={<Typography sx={{ fontSize: 13 }}>I consent to a credit check to be made in my name.</Typography>}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    size="small"
                                    checked={isAgreeToTermsConditions}
                                    onChange={(e) => setIsAgreeToTermsConditions(e?.target?.checked)}
                                />
                            }
                            label={
                                <Typography sx={{ fontSize: 13 }}>
                                    I verify that I have read, understand and agree to the Terms Summary & Terms and Conditions
                                </Typography>
                            }
                        />

                        <ReCAPTCHA sitekey="6LfcFt8pAAAAAIumzhWyX4Qz5r8QbLrktyYCCMvz" onChange={(e) => console.log(e, '---------------')} />
                    </Box>
                </Grid>
            </Grid>

            <Grid item lg={12} sm={12} xs={12}>
                <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <GradientButton
                        onClick={() => submitConsentsForm({ isCreditCheck, isAgreeToTermsConditions })}
                        disabled={!isCreditCheck || !isAgreeToTermsConditions}
                        type="submit"
                        label="Submit"
                    />

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
    );
};

const styles = {
    termsCondition: {
        width: '100%',
        height: '300px',
        borderRadius: '5px',
        bgcolor: '#e5e5e5',
        border: '2px solid #d5d5d5',
        overflow: 'auto',
        p: 2
    }
};
