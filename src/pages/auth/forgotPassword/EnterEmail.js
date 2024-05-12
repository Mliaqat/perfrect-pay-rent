import { Box, Checkbox, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../utils/constants';
import GradientButton from '../../../components/form/button/GradientButton';
import { useNavigate } from 'react-router-dom';

export default function EnterEmail() {
    const navigate = useNavigate();

    return (
        <Grid container sx={{ padding: '5rem' }}>
            <Grid item lg={12}>
                <Typography variant="h2" fontWeight={'bold'} color={COLORS.primary}>
                    Forgot your password?
                </Typography>
                <Typography variant="h5" color={COLORS.primary} sx={{ mt: 1 }}>
                    Enter your email address below
                </Typography>

                <Divider sx={{ bgcolor: COLORS.primary }} />
            </Grid>

            <Grid item lg={4} sx={{ mt: 4, mb: 2 }}>
                <Box>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Enter your email
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Box>
            </Grid>

            <Grid item lg={12}>
                <Divider sx={{ bgcolor: COLORS.primary, my: 1, mb: 2 }} />

                <GradientButton label="Submit" />
            </Grid>
        </Grid>
    );
}
