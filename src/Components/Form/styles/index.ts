import { makeStyles } from "@mui/styles";

export const useFormStyles = makeStyles({
    root: {
        marginTop: 16
    },
    textField: {
        '&.MuiTextField-root' : {
            marginRight : 16
        }
    },
    reLoadButton: {
        marginLeft: 36
    }
})