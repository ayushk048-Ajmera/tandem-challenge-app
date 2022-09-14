import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useGridStyles = makeStyles((theme: Theme) => {
    const { breakpoints } = theme;
    return {
        root: {
            [breakpoints.up('md')]: {
                justifyContent: 'center',
            },
        },
    }
});