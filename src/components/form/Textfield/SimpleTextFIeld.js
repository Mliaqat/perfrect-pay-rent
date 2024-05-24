import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const SimpleTextField = ({ name, ...otherProps }) => {
    const [field, mata] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        fontSize: 16
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return <TextField size='small' {...configTextfield} inputProps={{ style: { fontSize: '15px' } }} />;
};

export default SimpleTextField;
