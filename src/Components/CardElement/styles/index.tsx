import { makeStyles } from "@mui/styles";

interface IThemeParameters {
    color?: string;
}

export const useStyles = makeStyles(() => ({
    actionArea: {
        borderRadius: 16,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    card: ({ color }: IThemeParameters) => ({
        minWidth: 256,
        borderRadius: 16,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: `0 6px 12px 0 ${color}`,
        },
    }),
    content: ({ color }: IThemeParameters) => ({
        borderBottom: `5px solid ${color}`,
        padding: '1rem 1.5rem 1.5rem',
    }),
    title: {
        fontFamily: 'Keania One',
        fontSize: '2rem',

        textTransform: 'uppercase',
    },
    subtitle: {
        fontFamily: 'Montserrat',

        opacity: 0.87,
        marginTop: '2rem',
        fontWeight: 500,
        fontSize: 14,
    },
}));