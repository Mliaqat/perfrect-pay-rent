import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../utils/constants';

export default function SideBar() {
    return (
        <Grid container sx={{ bgcolor: COLORS.primary, height: '100%', padding: '3rem' }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h3" fontWeight={'bold'} color={COLORS.white}>
                    Hello,
                </Typography>
                <Typography variant="h6" fontWeight={'400'} color={COLORS.white}>
                    Glad to see you again!
                </Typography>

                <Grid sx={{ mt: 4 }}>
                    <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.white}>
                        Log in to your account to view and bid on your favorite properties!
                    </Typography>

                    <Divider sx={{ my: 1.5, bgcolor: COLORS.lightWhite }} />
                    <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightWhite}>
                        Receive Services and Rent Assistance with PerfectPayRentBid
                    </Typography>

                    <Divider sx={{ my: 1.5, bgcolor: COLORS.lightWhite }} />
                    <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightWhite}>
                        Make informed bids on properties with our market analysis resources
                    </Typography>

                    <Divider sx={{ my: 1.5, bgcolor: COLORS.lightWhite }} />
                    <Typography fontSize={'14px'} fontWeight={'400'} color={COLORS.lightWhite}>
                        Manage and pay your rent online with your own tenant account
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
