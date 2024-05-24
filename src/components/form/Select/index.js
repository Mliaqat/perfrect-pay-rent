import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const SelectWrapper = ({ name, options, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (evt) => {
        const { value } = evt.target;
        setFieldValue(name, value);
    };

    const configSelect = {
        size: 'small',
        ...field,
        ...otherProps,
        select: true,
        fullWidth: true,
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect}>
            {options.map((item, pos) => {
                return (
                    <MenuItem key={pos} value={item?.id || item}>
                        {item?.title || item}
                    </MenuItem>
                );
            })}
        </TextField>
    );
};

export default SelectWrapper;
