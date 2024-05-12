import { Divider, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { COLORS } from '../../../../utils/constants';

export default function TenantPreApproval() {
    const [isGuranter, setIsGuranter] = useState(null);
    const [isPreviousLandlord, setIsPreviousLandlord] = useState(null);

    return (
        <Grid container>
            <Grid item container spacing={2}>
                <Grid item lg={2}>
                    <Typography variant="h6">Identification*</Typography>
                </Grid>

                <Grid item container spacing={2} lg={7}>
                    <Grid item lg={6}>
                        <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                            Type of identification
                        </Typography>

                        <FormControl sx={{ bgcolor: '#e5e5e5' }} fullWidth size="small">
                            <Select labelId="demo-select-small-label" id="demo-select-small">
                                <MenuItem disabled value="">
                                    <em>Select Answer</em>
                                </MenuItem>
                                <MenuItem value={10}>Driving License</MenuItem>
                                <MenuItem value={20}>Passport</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={6}>
                        <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                            Driver’s license number
                        </Typography>
                        <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item lg={12}>
                <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />
            </Grid>

            <Grid item container spacing={2}>
                <Grid item lg={2}>
                    <Typography variant="h6">Rental Information</Typography>
                </Grid>

                <Grid item container spacing={2} lg={7}>
                    <Grid item lg={6}>
                        <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                            Do you require a Guarantor
                        </Typography>

                        <FormControl sx={{ bgcolor: '#e5e5e5' }} fullWidth size="small">
                            <Select
                                value={isGuranter}
                                onChange={(e) => setIsGuranter(e?.target?.value)}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={6}>
                        <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                            Do you have a previous landlord
                        </Typography>

                        <FormControl sx={{ bgcolor: '#e5e5e5' }} fullWidth size="small">
                            <Select
                                value={isPreviousLandlord}
                                onChange={(e) => setIsPreviousLandlord(e?.target?.value)}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>

            <Typography>{isGuranter}</Typography>

            {isGuranter && (
                <>
                    <Grid item lg={12}>
                        <Divider sx={{ bgcolor: COLORS.primary, my: 2.5 }} />
                    </Grid>

                    <Grid item container spacing={2}>
                        <Grid item lg={2}>
                            <Typography variant="h6">Guarantor’s Information</Typography>
                        </Grid>

                        <Grid item container spacing={2} lg={7}>
                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Guarantor’s first name
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Guarantor’s last name
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Guarantor’s email address
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Guarantor’s phone number
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Employment
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Employment contact
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Employment contact email
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Employment contact phone number
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Length of employment (date started)
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                                    Guarantor’s annual household income
                                </Typography>
                                <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5', fontSize: 36, padding: 0 }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )}
        </Grid>
    );
}
