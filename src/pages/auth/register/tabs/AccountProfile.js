import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../../utils/constants';

export default function AccountProfile() {
    return (
        <Grid container spacing={2}>
            <Grid item lg={2}>
                <Typography variant="h6">Personal Information</Typography>
            </Grid>

            <Grid item container spacing={2} lg={7}>
                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Username
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Date of birth
                    </Typography>
                    <TextField type="date" fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        First name
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Last name
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Email address
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Phone number
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Password
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Confirm password
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>
            </Grid>
        </Grid>
    );
}
