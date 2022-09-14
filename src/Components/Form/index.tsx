import React, { FC, useCallback, useState } from 'react'
import { TextField, Button, Grid } from '@mui/material'
import { useGridStyles } from '../styles/GridStyles';
import { useFormStyles } from './styles';
import { ReLoadButton } from './ReLoadButton';

interface IFormProps {
    onReload: () => void;
    onSubmit: (value: number) => Promise<void>;
}

export const Form: FC<IFormProps> = (props) => {
    const { onSubmit, onReload } = props;
    const [input, setInput] = useState<string>('');
    const gridStyles = useGridStyles();
    const classes = useFormStyles();


    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setInput(e.target.value),
        []
    )

    const onClick =async () => {
        await onSubmit(parseInt(input));
        setInput('');
    }


    return (
        <Grid container className={classes.root} classes={gridStyles}>
            <Grid item >
                <TextField className={classes.textField} type="number"  size="small" label="Add Number" color="primary" value={input} onChange={onChange} />
                <Button size="large" variant="contained" onClick={onClick} color="primary" disabled={!input}> Add </Button>
            </Grid>
            <Grid item>
                <ReLoadButton onClick={onReload}>Refresh</ReLoadButton>
            </Grid>
        </Grid>
    )
}
