import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useGridStyles = makeStyles((theme: Theme) => {
    const { breakpoints } = theme;
    return {
        root: {
            padding : 24,
            [breakpoints.up('md')]: {
                justifyContent: 'center',
            },
        },
    }
});