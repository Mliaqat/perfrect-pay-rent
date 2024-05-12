import { FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../../utils/constants';

export default function AccountSecurity() {
    return (
        <Grid container spacing={2}>
            <Grid item lg={2}>
                <Typography variant="h6">Security Questions</Typography>
            </Grid>

            <Grid item container spacing={2} lg={7}>
                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Question one
                    </Typography>

                    <FormControl sx={{ bgcolor: '#e5e5e5' }} fullWidth size="small">
                        <Select labelId="demo-select-small-label" id="demo-select-small">
                            <MenuItem disabled value="">
                                <em>Select Answer</em>
                            </MenuItem>
                            <MenuItem value={10}>Color of your first car?</MenuItem>
                            <MenuItem value={20}>First car you drive?</MenuItem>
                            <MenuItem value={30}>Your best friend name?</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Answer
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Question two
                    </Typography>

                    <FormControl sx={{ bgcolor: '#e5e5e5' }} fullWidth size="small">
                        <Select labelId="demo-select-small-label" id="demo-select-small">
                            <MenuItem disabled value="">
                                <em>Select Answer</em>
                            </MenuItem>
                            <MenuItem value={10}>Color of your first car?</MenuItem>
                            <MenuItem value={20}>First car you drive?</MenuItem>
                            <MenuItem value={30}>Your best friend name?</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Answer
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Question three
                    </Typography>

                    <FormControl sx={{ bgcolor: '#e5e5e5' }} fullWidth size="small">
                        <Select labelId="demo-select-small-label" id="demo-select-small">
                            <MenuItem disabled value="">
                                <em>Select Answer</em>
                            </MenuItem>
                            <MenuItem value={10}>Color of your first car?</MenuItem>
                            <MenuItem value={20}>First car you drive?</MenuItem>
                            <MenuItem value={30}>Your best friend name?</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item lg={6}>
                    <Typography variant="h6" fontWeight={'400'} color={COLORS.lightBlack}>
                        Answer
                    </Typography>
                    <TextField fullWidth size="small" sx={{ bgcolor: '#e5e5e5' }} />
                </Grid>
            </Grid>
        </Grid>
    );
}
