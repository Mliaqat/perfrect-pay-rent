import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../utils/constants';

export default function SideBar() {
    return (
        <Grid container sx={{ bgcolor: COLORS.primary, height: '100%', padding: '3rem' }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h3" fontWeight={'bold'} color={COLORS.white}>
                    Oops,
                </Typography>
                <Typography variant="h6" fontWeight={'400'} color={COLORS.white}>
                    Don't panic, we can help!
                </Typography>

                <Grid sx={{ mt: 4 }}>
                    <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightWhite}>
                        We will send you email instructions on how to reset your password.
                    </Typography>

                    <Divider sx={{ my: 1.5, bgcolor: COLORS.lightWhite }} />
                    <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightWhite}>
                        Consider keeping a record of your passwords in a safe and secure location.
                    </Typography>

                    <Divider sx={{ my: 1.5, bgcolor: COLORS.lightWhite }} />
                    <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightWhite}>
                        Changing your password regularly can help keep intruders away from your account.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12} mt={'auto'}>
                <Divider sx={{ my: 1.5, bgcolor: COLORS.lightWhite }} />
                <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightWhite}>
                    Terms and Conditions
                </Typography>
            </Grid>
        </Grid>
    );
}
