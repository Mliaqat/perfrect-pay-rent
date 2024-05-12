import { Box, Checkbox, Divider, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../utils/constants';
import GradientButton from '../../../components/form/button/GradientButton';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();

    return (
        <Grid container sx={{ padding: '5rem' }}>
            <Grid item lg={12}>
                <Typography variant="h2" fontWeight={'bold'} color={COLORS.primary}>
                    Log in
                </Typography>
                <Typography variant="h5" color={COLORS.primary} sx={{ mt: 1 }}>
                    Enter your log in credentials below
                </Typography>

                <Divider sx={{ bgcolor: COLORS.primary }} />
            </Grid>

            <Grid item lg={4} sx={{ mt: 4 }}>
                <Box>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Enter your email or username
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Box>

                <Box sx={{ my: 2 }}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Enter your password
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Box>

                <FormControlLabel control={<Checkbox size="medium" />} label={<span style={{ fontSize: '13px' }}>Remember me</span>} />
            </Grid>

            <Grid item lg={12}>
                <Divider sx={{ bgcolor: COLORS.primary, my: 1, mb: 2 }} />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <GradientButton label="Log in" />

                    <Typography
                        onClick={() => navigate('/forgot-password')}
                        variant="h6"
                        sx={{ ml: 2, transition: '0.4s', '&:hover': { borderBottom: '1px solid', cursor: 'pointer', transition: '0.4s' } }}
                    >
                        Forget your password?
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
