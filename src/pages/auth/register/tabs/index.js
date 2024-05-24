import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, Tab, Tabs, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../../utils/constants';
import AccountProfile from './AccountProfile';
import AccountSecurity from './AccountSecurity';
import TenantPreApproval from './TenantPreApproval';
import { Consents } from './Consents';

export default function TabBar() {
    const navigate = useNavigate();

    const [tabIndex, setTabIndex] = useState(0);
    const [tabBtns, setTabBtns] = useState([
        { title: 'Account profile', disable: false },
        { title: 'Account security', disable: true },
        { title: 'Tenant pre-approval', disable: true },
        { title: 'Consent', disable: true }
    ]);

    const [accountProfile, setAccountProfile] = useState(null);
    const [accountSecurity, setAccountSecurity] = useState(null);
    const [tenant, setTenant] = useState(null);
    const [consents, setConsents] = useState(null);

    const submitForm = (values) => {
        if (tabIndex === 0) {
            setAccountProfile(values);
            setTabBtns(tabBtns.map((item, index) => (index === 1 ? { ...item, disable: false } : item)));
            setTabIndex(1);
            console.log(values);
        } else if (tabIndex === 1) {
            setAccountSecurity(values);
            setTabBtns(tabBtns.map((item, index) => (index === 2 ? { ...item, disable: false } : item)));
            setTabIndex(2);
            console.log(values);
        } else if (tabIndex === 2) {
            setTenant(values);
            setTabBtns(tabBtns.map((item, index) => (index === 3 ? { ...item, disable: false } : item)));
            setTabIndex(3);
            console.log(values);
        } else if (tabIndex === 3) {
            console.log(values);
            setConsents(values);
        } else {
        }
    };

    const onGoBack = () => {
        setTabBtns(tabBtns.map((item, index) => (index === tabIndex ? { ...item, disable: true } : item)));
        setTabIndex((pre) => pre - 1);
    };

    return (
        <Grid container sx={{ padding: '3rem' }}>
            <Grid item lg={12} xs={12}>
                <Typography variant="h4" fontWeight={'bold'} color={COLORS.primary}>
                    Create your account!
                </Typography>
            </Grid>

            <Grid item lg={12} sm={12} sx={{ mt: 3 }}>
                <Box>
                    {tabBtns.map((item, index) => (
                        <Button key={item?.title} disabled={item?.disable} sx={styles.tabBtn}>
                            {item?.title}
                        </Button>
                    ))}
                </Box>
                <Divider sx={{ bgcolor: COLORS.primary }} />
            </Grid>

            <Grid item lg={12} mt={2}>
                {tabIndex === 0 ? (
                    <AccountProfile accountProfile={accountProfile} submitProfileForm={submitForm} />
                ) : tabIndex === 1 ? (
                    <AccountSecurity accountSecurity={accountSecurity} submitSecurityForm={submitForm} goBack={onGoBack} />
                ) : tabIndex === 2 ? (
                    <TenantPreApproval tenant={tenant} submitTenantForm={submitForm} goBack={onGoBack} />
                ) : tabIndex === 3 ? (
                    <Consents consents={consents} submitConsentsForm={submitForm} goBack={onGoBack} />
                ) : (
                    <></>
                )}
            </Grid>
        </Grid>
    );
}

const styles = {
    tabBtn: {
        fontSize: 15,
        textTransform: 'capitalize',
        padding: 0,
        color: COLORS.primary,
        fontWeight: '400',
        mr: 3
    }
};
