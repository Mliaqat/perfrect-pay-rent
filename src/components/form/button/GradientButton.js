import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { CircularProgress, Typography } from '@mui/material';
import { COLORS } from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
    gradientButton: {
        backgroundImage: 'linear-gradient(-45deg, #00a593 30%, #00a7dd 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
        }
    }
}));

const GradientButton = ({ label, loading, ...otherProps }) => {
    const classes = useStyles();

    return (
        <Button className={classes.gradientButton} sx={{ py: 1, px: 4 }} {...otherProps}>
            {loading ? (
                <CircularProgress size={20} sx={{color: COLORS.white, m: 0.3}} />
            ) : (
                <Typography sx={{ color: COLORS.white, textTransform: 'capitalize' }}>{label}</Typography>
            )}
        </Button>
    );
};

export default GradientButton;
