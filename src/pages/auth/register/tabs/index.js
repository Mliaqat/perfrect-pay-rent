import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../../utils/constants';
import GradientButton from '../../../../components/form/button/GradientButton';
import AccountProfile from './AccountProfile';
import AccountSecurity from './AccountSecurity';
import TenantPreApproval from './TenantPreApproval';

export default function TabBar() {
    const navigate = useNavigate();

    const [tabIndex, setTabIndex] = useState(0);
    const tabBtns = ['Account profile', 'Account security', 'Tenant pre-approval', 'Consent'];

    return (
        <Grid container sx={{ padding: '5rem' }}>
            <Grid item lg={12}>
                <Typography variant="h2" fontWeight={'bold'} color={COLORS.primary}>
                    Create your account!
                </Typography>
            </Grid>

            <Grid item lg={12} sx={{ mt: 3 }}>
                <Box>
                    {tabBtns.map((item, index) => (
                        <Button
                            onClick={() => setTabIndex(index)}
                            key={item}
                            sx={{ fontSize: 15, textTransform: 'capitalize', padding: 0, color: COLORS.primary, fontWeight: '400', mr: 3 }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
                <Divider sx={{ bgcolor: COLORS.primary }} />
            </Grid>

            <Grid item lg={12} mt={2}>
                {tabIndex == 0 ? <AccountProfile /> : tabIndex == 1 ? <AccountSecurity /> : <TenantPreApproval />}
            </Grid>

            <Grid item lg={12}>
                <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <GradientButton label="Continue" />

                    <Typography
                        variant="h6"
                        sx={{ ml: 2, transition: '0.4s', '&:hover': { borderBottom: '1px solid', cursor: 'pointer', transition: '0.4s' } }}
                    >
                        Go back
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
